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
    div.innerHTML = inner+"</table></p>";
    console.log(inner);
    table.appendChild(div);
}