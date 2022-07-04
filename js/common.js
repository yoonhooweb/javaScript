$(document).ready(function(){

    $("#stDate,#endDate").datepicker({
        dateFormat: 'yy-mm-dd'
        ,showOtherMonths: true
        ,showMonthAfterYear:true
        ,dayNamesMin: ['일','월','화','수','목','금','토']
        ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
    });

    $('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
        console.log(tab_id);
		$('ul.tabs li').removeClass('active');
		$('.tab-contents').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	});
});

(function(){
    let main = document.querySelector("#main");
    let sideBt = document.querySelector(".left-navBt");
    let side = document.querySelector(".side-nav");
    let getClass = localStorage.getItem("active");
    sideBt.addEventListener("click",function(){
        if ( side.classList.contains("active") ) {
            localStorage.removeItem(getClass);
            side.classList.remove("active");
            main.classList.remove("active");
        } else {
            let setClass = localStorage.setItem("active", "active");
            side.classList.add("active");
            main.classList.add("active");
        }
    })

    if (localStorage.getItem("active") == 'active') {
        side.classList.add("active");
        main.classList.add("active");
    } else if (localStorage.getItem("active") == null && localStorage.getItem("active") == false) {
        side.classList.remove("active");
        main.classList.remove("active");
    }
})();

(function userInfo() {
    let userIcon = document.querySelector(".userIcon");
    let userBox = document.querySelector(".userInfo-wrap");
    let arrow = document.querySelector(".userArrow");
    userIcon.addEventListener("click",function(){
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
})();

(function searchBox() {
    let search = document.querySelector(".search");
    let searchBox = document.querySelector(".search-box");
    let userBox = document.querySelector(".userInfo-wrap");
    search.addEventListener("click",function(){
        searchBox.classList.toggle("active");
    });
})();

/* (function leftBt() {
    let ACTIVECLASS = "active";
    let main = document.querySelector("#main");
    let sideBt = document.querySelector(".left-navBt");
    let side = document.querySelector(".side-nav");
    let getClass = localStorage.getItem(ACTIVECLASS);
    sideBt.addEventListener("click",function(){
        if ( side.classList.contains("active") ) {
            localStorage.removeItem(getClass);
            side.classList.remove("active");
            main.classList.remove("active");
        } else {
            let setClass = localStorage.setItem(ACTIVECLASS, "active");
            side.classList.add(ACTIVECLASS);
            main.classList.add(ACTIVECLASS);
        }
    })

})(); */



(function modalVersion1(){
    let modalopen = document.querySelector(".modal-version1");
    let modal = document.querySelector(".version-1");
    modalopen.addEventListener("click", function(){
        modal.style.display = "block";
    });

    let close = document.querySelector(".modal-close");
    close.addEventListener("click", function(){
        modal.style.display = "none";
    });
})();


(function tableRow(){
    let tableHeader = document.querySelector(".table-header");
    let tbody = document.querySelector(".table-body tbody").clientHeight;
    if (tbody > 300) {
        tableHeader.style.padding = '0px 20px 0px 0px';
    }
})();   
