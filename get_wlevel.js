import { fetchSJIS } from "https://code4fukui.github.io/waterlevel_fukui/fetchSJIS.js";
import { parseList } from "https://code4fukui.github.io/waterlevel_fukui/parseList.js";
import { sleep } from "https://js.sabae.cc/sleep.js";

const getUniqueValue = () => {
    const d = new Date();
    const z = (n) => n < 10 ? "0" + n : n;
    return "" + d.getFullYear() + z(d.getMonth() + 1) + z(d.getDate()) + z(d.getHours()) + z(d.getMinutes()) + z(d.getSeconds());
  }

async function get_wlevel(river_list){
  const url = "http://ame.pref.fukui.jp/bousai/servlet/bousaiweb.servletBousaiMap?lod=0&sb1=1&mp=0&no=0&fn=0&sv=1&dk=2&mp=0&no=0&nw=1&tm=000101010000&sn=0&pg=1&vm=0&tvm=0&fn=0&cn=0&st=0&it=0&tsk=0&tsw=0&tk=0&sb=1&ga=4&gk=0&gk1=0&gk2=0&gk3=0&gk4=0&gk5=0&gn=0&gl=0&gw=0&gc=0&go=0&gm=0&omp=0&ost=0&og1=0&og2=0&og3=0&og4=0&og5=0&og6=0&og7=0&og8=0&og9=0&og10=0&og11=0&rk=1&mty=0&vo=0&tmgo=&mnflg=0&sb2=1&unq=" + getUniqueValue();
  const txt = await fetchSJIS(url);
  const data = parseList(txt);
  
  let target_data=[];
  for(const d of data){
      //console.log(data[d].河川名);
      //console.log(river_list)
      //console.log(river_list.includes(d.河川名));
      if(river_list.includes(d.河川名)) target_data.push(d);
  }
  console.log("target_data :",target_data);
  return target_data;
}

export {get_wlevel};