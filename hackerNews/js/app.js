const ajax = new XMLHttpRequest();  // ajax 사용하기위한 선언
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
let CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';
const container = document.getElementById('root');
const ul = document.createElement('ul');
const content_box = document.createElement('div');
const store = {
    currentPage : 1,
}

function getData (url) {
    ajax.open("GET", url, false);
    ajax.send();

    return JSON.parse(ajax.response);
} 

/* ajax.open('GET', NEWS_URL, false); // 데이터 통신을 위한 시작
ajax.send();  //데이터 통신 보내기 */

let newsFeed = getData(NEWS_URL);; //ajax.response는 데이터 받고 json.parse로 json데이터 변환
container.appendChild(ul);

function feed() {
    for (let i = 0; i < newsFeed.length; i++) {
        const li = document.createElement('li'); // li 태그 생성하는것
        const div = document.createElement('div');
    
        div.innerHTML = `
            <li>
                <a href='#${newsFeed[i].id}' data-url=${newsFeed[i].url}>${newsFeed[i].title} (${newsFeed[i].comments_count})</a>
            </li>
        `
        //appendChild div를 하게되면 div자체가 들어가버리지만 firstElementChild 를 하게 되면 li가 자식요소로써 들어가게된다.
        ul.appendChild(div.firstElementChild);
        div.innerHTML = `
            <ul>
                <li><a href="#${store.currentPage - 1}">이전 페이지</a></li>
                <li><a href="#${store.currentPage + 1}">다음 페이지</a></li>
            </ul>
        `
    };    
}

function newsDetail(){
    const ID = location.hash.substring(1);  //첫번째 것을 제외한 값으로 변경 
    let news_contents = getData(CONTENT_URL.replace("@id", ID));
    const title = document.createElement('h1');

    container.innerHTML = `
        <h1>${news_contents.title}</h1>
        <a href=''>목록으로</a>
    `
}

function router() {
    const routePath = location.hash;

    if (routePath === '') {
        feed();
    } else {
        newsDetail();
    }
    
}

window.addEventListener('hashchange', router);

router();
