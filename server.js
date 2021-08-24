import {Server} from "https://js.sabae.cc/Server.js";
import {jsonfs} from "https://js.sabae.cc/jsonfs.js";

const beachfn="data/beach.json";
const riverfn="data/river.json";

let beach=jsonfs.read(beachfn)|[];
let river=jsonfs.read(riverfn)|[];

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
                    delete d.ID;
                    return d;
                }
            }
            return "warning";
        }else if(path == "/api/get-r"){
            //河川(キャンプ場)のデータを取得する
            //call("/api/get-r",ID),return:{name,river,lat,lng,info,img}
            console.log("call get-r");
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
        }
    }
}

//https://t.co/2HQumqjel8?