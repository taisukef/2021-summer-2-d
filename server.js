import {Server} from "https://js.sabae.cc/Server.js";
import {jsonfs} from "https://js.sabae.cc/jsonfs.js";
import {CSV} from "https://js.sabae.cc/CSV.js";
import {Day} from "https://code4fukui.github.io/day-es/Day.js";

//import {get_weather} from "./get_weather.js";

const beachfn="data/beach.json";
const riverfn="data/river.json";
const boardfn="data/board.json";

let beach=jsonfs.read(beachfn)||[];
let river=jsonfs.read(riverfn)||[];
let board=jsonfs.read(boardfn)||[];

class MyServer extends Server{
    async api(path,req){
               if (path == "/api/get"){
            //海水浴場のデータを取得する
            //call("/api/get-b",{type,ID}),return:{name,lat,lng,info,img}
            console.log("call get");
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
                if(d.ID==req){
                    //delete d.ID;
                    return d;
                }
            }
            
        } else if (path == "/api/badd") {
            //掲示板に書き込む
            //call:("/api/badd",data{未定}),return:"ok"
            board.push(req);
            jsonfs.write(boardfn,board);
            return "ok";
        } else if (path == "/api/blist") {
            //掲示板の内容を返却
            //call:("/api/blist"),return:[data{未定}, ...]

            return board;
        } else if (path == "/api/get-allID"){
            //
            //call:("/api/get-allID",mode),return:[{ID,name}, ...]
            //mode:"b" or "beach",return:beach[{ID,name,img}, ...]
            //mode:"r" or "river",return:river[{ID,name,img}, ...]
            let data=[];
            let json=[];
            if(req=="b" || req=="beach"){
                json=beach;
            }else if(req=="r" || req=="river"){
                json=river;
            }else{
                return "warning"
            }
            for(const d of json){
                //console.log(d);
                //console.log("ID :",d.ID);
                //console.log(d.ID==reqID);
                //delete d.lat;
                //delete d.lng;
                //delete d.info;
                data.push(d);
            }
            console.log(data);
            return data;
        } else if (path == "/api/csv"){
            console.log("call csv");
            const senserfn="data/sensors.csv";
            let datafn="data/"+new Day().toString()+".csv";
            console.log(datafn);
            const senser=CSV.toJSON(await CSV.fetch(senserfn)).reverse();
            const data=CSV.toJSON(await CSV.fetch(datafn)).reverse();
            console.log(senser);
            console.log(data);
            return data;
        }
    }
}

new MyServer(8889);
//https://t.co/2HQumqjel8?