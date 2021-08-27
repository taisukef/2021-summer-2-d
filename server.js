import {Server} from "https://js.sabae.cc/Server.js";
import {jsonfs} from "https://js.sabae.cc/jsonfs.js";
//import {CSV} from "https://js.sabae.cc/CSV.js";
//import {Day} from "https://code4fukui.github.io/day-es/Day.js";
import {get_wlevel} from "./get_wlevel.js";

//import {get_weather} from "./get_weather.js";

const beachfn="data/beach.json";
const riverfn="data/river.json";
const boardfn="data/board.json";
const accidfn="data/accident.json";

let beach=jsonfs.read(beachfn)||[];
let river=jsonfs.read(riverfn)||[];
let board=jsonfs.read(boardfn)||[];
let accid=jsonfs.read(accidfn)||[];

class MyServer extends Server{
    async api(path,req){
        //console.log("path :",path);
        //console.log("req :",req);
               if (path == "/api/get") {
            //海水浴場のデータを取得する
            //call:("/api/get",{type,ID}),return:{name,lat,lng,info,img}
            console.log("call get");
            console.log(req);
            console.log(req.type);
            let json=[];
            if(req.type=="b" || req.type=="beach"){
                json=beach;
            }else if(req.type=="r" || req.type=="river"){
                json=river;
            }else{
                return "warning";
            }
            for(const d of json){
                //console.log(d);
                //console.log("ID :",d.ID);
                //console.log(d.ID==reqID);
                if(d.ID==req.ID){
                    //delete d.ID;
                    return d;
                }
            }
            
        } else if (path == "/api/add") {
            //掲示板に書き込む
            //call:("/api/badd",data{未定}),return:"ok"
            console.log("call badd");
            board.push(req);
            jsonfs.write(boardfn,board);
            return "ok";
        } else if (path == "/api/list") {
            console.log("call list")
            return board;
        } else if (path == "/api/blist") {
            //掲示板の内容を返却
            //call:("/api/blist",boardID),return:[data{未定}, ...]
            console.log("call blist")
            let data=[];
            console.log(req);
            for(const d of board){
                //console.log(d);
                if(d.ID==req.ID && d.type==req.type){
                    //delete d.ID;
                    data.push(d);
                }
            }
            console.log(data);
            return data;
        } else if (path == "/api/get-allID"){
            //
            //call:("/api/get-allID",mode),return:[{ID,name}, ...]
            //mode:"b" or "beach",return:beach[{ID,name,img}, ...]
            //mode:"r" or "river",return:river[{ID,name,img}, ...]
            if(req=="b" || req=="beach"){
                return beach;
            }else if(req=="r" || req=="river"){
                return river;
            }else{
                return "warning"
            }
        } else if (path == "/api/wlevel"){
            //
            //call:(/api/wlevel),return:[{data}, ...]
            console.log("call wlevel");
            let item=[];
            for(const d of river){
                if(!item.includes(d.river)) item.push(d.river);
            }
            //console.log("item :",item);
            const data=await get_wlevel(item);
            //console.log(data);
            return data;
        } else if (path == "/api/rwlevel"){
            //
            //call:("/api/rwlevel",river),return:[{data}, ...]
            console.log("call rwlevel");
            console.log(req);
            const data=await get_wlevel(req);
            for(const d in data){
                 delete data[d].id;
                 delete data[d].通報水位;
                 delete data[d].警戒水位;
                 delete data[d].特別警戒水位;
                 delete data[d].危険水位;
                 //delete data[d].geo3x3;
            }
            return data;
        } else if (path == "/api/pull_pin"){
            //call:("api/pull_pin"),return:[{lat,lng}, ...]
            console.log("call pull_pin");
            return accid;
        } else if (path == "/api/push_pin"){
            //call:("api/push_pin",{lat,lng}),return:ok
            console.log("call push_pin");
            accid.push(req);
            jsonfs.write(accidfn,accid);
            return "ok";
        }
    }
}

new MyServer(8889);
//https://t.co/2HQumqjel8?