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
		$('ul.tabs li').removeClass('active');
		$('.tab-contents').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	});
});

(function userInfo() {
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
})();

(function searchBox() {
    let search = document.querySelector(".search");
    let searchBox = document.querySelector(".search-box");
    let userBox = document.querySelector(".userInfo-wrap");
    search.addEventListener("click",function(){
        searchBox.classList.toggle("active");
    });
})();

/* function leftBt() {
    let sideBt = document.querySelector(".left-navBt");
    let side = document.querySelector(".side-nav");
    let active = sessionStorage.getItem("active");
    sideBt.addEventListener("click",function(){
        sessionStorage.removeItem(active);
        if ( side.classList.contains(active) ) {
            side.classList.remove(active);
            sessionStorage.removeItem(active);
        } else {
            sessionStorage.setItem("active" , "active");
            side.classList.add(active);

        }

    })
} */

(function leftBt() {
    let main = document.querySelector("#main");
    let sideBt = document.querySelector(".left-navBt");
    let side = document.querySelector(".side-nav");
    sideBt.addEventListener("click",function(){
        if ( side.classList.contains("active") ) {
            side.classList.remove("active");
            main.classList.remove("active");
        } else {
            side.classList.add("active");
            main.classList.add("active");
        }

    })
})();

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
