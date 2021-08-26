"use strict";

async function criate_table(name){
    const data=await fetchJSON("api/rwlevel",name);
    console.log(data);
    const time=data[0].日時.split("T");
    console.log("time :",time);
    //'<p><h2>河川の状態<h2></p><p>対象：'+name+'</p>'
    let inner='<p><h2>河川の状態</h2></p><p><h3>対象：'+name+'</h3></p><p>データ取得日時：'+time[0]+'　'+time[1]+'</p><p><table border="1"><tr><th>観測所名</th><th>河川水位</th><th>警報状態</th></tr>';
    for (const d of data) {
        console.log(d);
        let row="<tr>";
        row=row+"<th>"+d.観測所名+"</th><th>"+d.河川水位+"</th><th><b>";
        //+d.警報状態+"</th>";
        switch(d.警報状態){
            case "通常":
                row=row+"<font color=#00ff00>通常"
                break;
            case "水防団大気水位超過(通報水位)":
                row=row+"<font color=#ffff00>通常"
                break;
            case "はん濫注意水位超過(警戒水位)":
                row=row+"<font color=#ff0f00>通常"
                break;
            case "避難判断水位超過(特別警戒水位)":
                row=row+"<font color=#ff0800>通常"
                break;
            case "はん濫危険水位超過(危険水位)":
                row=row+"<font color=#ff0000>危険水位"
                break;
            default:
                row=row+"<font color=#0f0f0f>不明"
                break;
        }
        row=row+"</b></font></th></tr>";
        inner=inner+row;
    }
    const div = document.createElement("div");
    div.className = "bbsitem";
    div.innerHTML = inner+"</table></p><p><a href='http://ame.pref.fukui.jp/bousai/main.html'>DATA by 福井県　河川・砂防総合情報</a></p>";
    console.log(inner);
    table.appendChild(div);
}

async function water_level(item){
    //item:{name,watch}
    const data=await fetchJSON("api/rwlevel",item.name);
    console.log(data);
    const time=data[0].日時.split("T");
    console.log("time :",time);
    //'<p><h2>河川の状態<h2></p><p>対象：'+name+'</p>'
    const watcher=item.watch+"観測所";

    let inner='<h2 class="river-title">河川の状態</h2><h3 class="river-sub-title">対象：'+item.name+' '+watcher+' (※一番近い観測所です。)</h3><p>データ取得日時：'+time[0]+'　'+time[1]+'</p><table border="1"><tr><th>観測所名</th><th>河川水位</th><th>警報状態</th></tr>';
    for (const d of data) {
        console.log(d.観測所名);
        if (d.観測所名.match(item.watch)){
            console.log("match");
            let row="<tr>";
            row=row+"<th>"+d.観測所名+"</th><th>"+d.河川水位+"</th><th><b>";
            switch(d.警報状態){
                case "通常":
                    row=row+"<font color=#00ff00>通常"
                    break;
                case "水防団大気水位超過(通報水位)":
                    row=row+"<font color=#ffff00>通常"
                    break;
                case "はん濫注意水位超過(警戒水位)":
                    row=row+"<font color=#ff0f00>通常"
                    break;
                case "避難判断水位超過(特別警戒水位)":
                    row=row+"<font color=#ff0800>通常"
                    break;
                case "はん濫危険水位超過(危険水位)":
                    row=row+"<font color=#ff0000>危険水位"
                    break;
                default:
                    row=row+"<font color=#0f0f0f>不明"
                    break;
            }
            row=row+"</b></font></th></tr>";
            inner=inner+row;
            break;
        }
        //inner ='data Error';
        /*
        let row="<tr>";
        row=row+"<th>"+d.観測所名+"</th><th>"+d.河川水位+"</th><th><b>";
        //+d.警報状態+"</th>";
        switch(d.警報状態){
            case "通常":
                row=row+"<font color=#00ff00>通常"
                break;
            case "水防団大気水位超過(通報水位)":
                row=row+"<font color=#ffff00>通常"
                break;
            case "はん濫注意水位超過(警戒水位)":
                row=row+"<font color=#ff0f00>通常"
                break;
            case "避難判断水位超過(特別警戒水位)":
                row=row+"<font color=#ff0800>通常"
                break;
            case "はん濫危険水位超過(危険水位)":
                row=row+"<font color=#ff0000>危険水位"
                break;
            default:
                row=row+"<font color=#0f0f0f>不明"
                break;
        }
        row=row+"</b></font></th></tr>";
        inner=inner+row;*/
    }
    const div = document.createElement("div");
    div.className = "bbsitem";
    div.innerHTML = inner+"</table><a href='http://ame.pref.fukui.jp/bousai/main.html'>DATA by 福井県　河川・砂防総合情報</a>";
    //const url = "http://ame.pref.fukui.jp/bousai/servlet/bousaiweb.servletBousaiMap?lod=0&sb1=1&mp=0&no=0&fn=0&sv=1&dk=2&mp=0&no=0&nw=1&tm=000101010000&sn=0&pg=1&vm=0&tvm=0&fn=0&cn=0&st=0&it=0&tsk=0&tsw=0&tk=0&sb=1&ga=4&gk=0&gk1=0&gk2=0&gk3=0&gk4=0&gk5=0&gn=0&gl=0&gw=0&gc=0&go=0&gm=0&omp=0&ost=0&og1=0&og2=0&og3=0&og4=0&og5=0&og6=0&og7=0&og8=0&og9=0&og10=0&og11=0&rk=1&mty=0&vo=0&tmgo=&mnflg=0&sb2=1&unq=" + getUniqueValue();
    console.log(inner);
    table.appendChild(div);
    
}