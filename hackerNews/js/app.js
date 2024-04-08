const ajax = new XMLHttpRequest();  // ajax 사용하기위한 선언
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
let CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';
const div_root = document.getElementById('root');
const ul = document.getElementById('ul');
const content_box = document.getElementById('content');

ajax.open('GET', NEWS_URL, false); // 데이터 통신을 위한 시작
ajax.send();  //데이터 통신 보내기

let newsFeed = JSON.parse(ajax.response); //ajax.response는 데이터 받고 json.parse로 json데이터 변환

for (let i = 0; i < newsFeed.length; i++) {
    const li = document.createElement('li'); // li 태그 생성하는것
    const a = document.createElement('a');  // a태그 생성하는것

    a.href = `#${newsFeed[i].id}`;  //a 태그 생성한 후 URL 넣어주기
    a.innerHTML = `${newsFeed[i].title} (${newsFeed[i].comments_count})`;  // a태그 안에 데이터 넣기
    a.dataset.title = newsFeed[i].id;   //data-title 만들기

    a.addEventListener("click", function(){});

    li.appendChild(a);
    ul.appendChild(li);
};

window.addEventListener('hashchange', function(){
    const ID = location.hash.substring(1);  //첫번째 것을 제외한 값으로 변경 
    ajax.open("GET", CONTENT_URL.replace('@id', ID), false); //replace : '기존값' , '바뀌는값'
    ajax.send();
    let news_contents = JSON.parse(ajax.response);
    const title = document.createElement('h1');

    title.innerHTML = news_contents.title;
    content_box.appendChild(title);
});
