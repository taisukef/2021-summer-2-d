"use strict";

const enc = (s) => {
    s = s.replace(/&/g, "&amp;");
    s = s.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/\n/g, "<br>");
    s = s.replace(/"/g, "&quot");
    s = s.replace(/'/g, "&#39");
    return s;
}

async function add_board(data){
    console.log("call add-board");
    const item = {
        name: document.getElementById("inp_name").value,
        body: document.getElementById("inp_body").value,
        date: new Date().toString(),
        ID:data.ID,
        type:data.type
    }
    console.log(item);
    if (await fetchJSON("api/add", item) == "ok") {
        window.location.reload();
    }
}

async function load_board(item){
    console.log("call load_board");
    console.log(item);
    //const api_url="api/blist?"+item.toString();
    console.log("api/blist",item);
    const data=await fetchJSON("api/blist",item);
    for (const d of data) {
        const div = document.createElement("div");
        div.className = "bbsitem";
        div.innerHTML = `<span class=date>${enc(d.date)}</span><br><span class=name>name : ${enc(d.name)}</span><div class=body>comment : ${enc(d.body)}</div>`
        board.appendChild(div);
    }
}