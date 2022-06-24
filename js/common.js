(function(){
    userInfo();
    searchBox();
    leftBt();
})();

function userInfo() {
    let userIcon = document.querySelector(".userIcon");
    let userBox = document.querySelector(".userInfo-wrap");
    let arrow = document.querySelector(".userArrow");
    userIcon.addEventListener("click",function(){
        console.log("test");
        if (userBox.classList.contains('active')) {
            userBox.classList.remove('active');
            arrow.classList.add('xi-caret-down-min');
            arrow.classList.remove('xi-caret-up-min');
        } else { 
            userBox.classList.add('active');
            arrow.classList.remove('xi-caret-down-min');
            arrow.classList.add('xi-caret-up-min');
        }
    });
};

function searchBox() {
    let search = document.querySelector(".search");
    let searchBox = document.querySelector(".search-box");
    let userBox = document.querySelector(".userInfo-wrap");
    search.addEventListener("click",function(){
        searchBox.classList.toggle("active");
    });
};

function leftBt() {
    let sideBt = document.querySelector(".left-navBt");
    let side = document.querySelector(".side-nav");
    sideBt.addEventListener("click",function(){
        side.classList.toggle("active");
    })
}