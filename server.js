import {Server} from "https://js.sabae.cc/Server.js";
import {jsonfs} from "https://js.sabae.cc/jsonfs.js";

//import {get_weather} from "./get_weather.js";

const beachfn="data/beach.json";
const riverfn="data/river.json";
const boardfn="data/board.json";

let beach=jsonfs.read(beachfn)||[];
let river=jsonfs.read(riverfn)||[];
let board=jsonfs.read(boardfn)||[];

class MyServer extends Server{
    api(path,req){
        if(path == "/api/get-b"){
            //海水浴場のデータを取得する
            //call("/api/get-b",ID),return:{name,lat,lng,info,img}
            console.log("call get-b");
            for(const d of beach){
                //console.log(d);
                //console.log("ID :",d.ID);
                //console.log(d.ID==reqID);
                if(d.ID==req){
                    //delete d.ID;
                    return d;
                }
            }
            return "warning";
        }else if(path == "/api/get-r"){
            //河川(キャンプ場)のデータを取得する
            //call("/api/get-r",ID),return:{name,river,lat,lng,info,img}
            console.log("call get-r");
            console.log(river);
            for(const d of river){
                //console.log(d);
                //console.log("ID :",d.ID);
                //console.log(d.ID==reqID);
                if(d.ID==req){
                    delete d.ID;
                    return d;
                }
            }
            return "warning";
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
        } else if (path=="/api/get-allID"){
            //
            //call:("/api/get-allID",mode),return:[{ID,name}, ...]
            //mode:"b" or "beach",return:beach[{ID,name,img}, ...]
            //mode:"r" or "river",return:river[{ID,name,img}, ...]
            let data=[];
            if(req=="b" || req=="beach"){
                for(const d of beach){
                    //console.log(d);
                    //console.log("ID :",d.ID);
                    //console.log(d.ID==reqID);
                    delete d.lat;
                    delete d.lng;
                    delete d.info;
                    data.push(d);
                }
                console.log(data);
            }else if(req=="r" || req=="river"){
                for(const d of river){
                    //console.log(d);
                    //console.log("ID :",d.ID);
                    //console.log(d.ID==reqID);
                    delete d.lat;
                    delete d.lng;
                    delete d.info;
                    data.push(d);
                }
                console.log(data);
            }else{
                data="warning"
            }
            return data;
        }
    }
}

new MyServer(8889);
//https://t.co/2HQumqjel8?