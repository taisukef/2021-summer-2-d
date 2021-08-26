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

async function add_board(boardID){
    console.log("call add-board");
    const item = {
        name: document.getElementById("inp_name").value,
        body: document.getElementById("inp_body").value,
        date: new Date().toString(),
        ID:boardID
    }
    console.log(item);
    if (await fetchJSON("api/add", item) == "ok") {
        window.location.reload();
    }
}

async function load_board(ID){
    console.log("reload");
    console.log(ID);
    const api_url="api/list?"+ID.toString();
    console.log(api_url);
    const data=await fetchJSON(api_url);
    for (const d of data) {
        const div = document.createElement("div");
        div.className = "bbsitem";
        div.innerHTML = `<span class=date>${enc(d.date)}</span> by <span class=name>${enc(d.name)}</span><div class=body>${enc(d.body)}</div>`
        board.appendChild(div);
    }
}