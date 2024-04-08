const ajax = new XMLHttpRequest();
const root = document.getElementById("root");
const sub_root = document.createElement("div");
const sub_div = document.getElementById("detail-page");
const TABLE_LIST_URL = "https://api.hnpwa.com/v0/news/1.json"; 
const DETAIL_URL = "https://api.hnpwa.com/v0/item/@id.json"; 

const ul = document.getElementById("ul");
ajax.open("GET", TABLE_LIST_URL , false);
ajax.send();
const data = JSON.parse(ajax.response);

for (let i = 0; i < data.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    
    ul.appendChild(li);
    a.href = `#${data[i].id}`;
    a.dataset = data[i].id;
    a.innerHTML = `${data[i].title} (${data[i].comments_count})`;

    li.appendChild(a);
}

window.addEventListener("hashchange", function () {

    const id = location.hash.substring(1)
    const H1 = document.createElement("h1");
    H1.innerHTML = '';
    console.log(id);
    
    ajax.open("GET", DETAIL_URL.replace("@id", id), false);
    ajax.send();
    
    const subData = JSON.parse(ajax.response);

    H1.innerHTML = subData.title;

    sub_div.appendChild(H1);

});
