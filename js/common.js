$(document).ready(function(){
    let menuCheckli = $(".gnb .depth1");
    let menuCheck = $(".gnb")
    $(menuCheckli).bind({"mouseover" : function(){
        if (!menuCheck.hasClass("active")) {
            $(menuCheck).addClass("active");
        }
        }, "mouseleave" :  function (){
            if (menuCheck.hasClass("active")) {
                $(menuCheck).removeClass("active");
            }
        }
    });

    $(".sideBarBt").click(function(){
        if ( $(this).find("i").hasClass("xi-hamburger-back") ) {
            $(this).find("i").removeClass("xi-hamburger-back");
            $(this).find("i").addClass("xi-hamburger-out");
            $(".sideBar").addClass("active");
            $(".layout-wrap .layout-content").addClass("active");
            $(".sideBarMenu li a").css("display","none");
            $(".sideBarMenu li a").addClass("hidden");
        } else if ($(this).find("i").hasClass("xi-hamburger-out")) {
            $(this).find("i").addClass("xi-hamburger-back");
            $(this).find("i").removeClass("xi-hamburger-out");
            $(".sideBar").removeClass("active");
            $(".layout-wrap .layout-content").removeClass("active");
            $(".sideBarMenu li a").fadeIn(500);
        }
    })

    $('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('ul.tabs li').removeClass('active');
		$('.tab-contents').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	})

    $("#stDate,#endDate").datepicker({
        dateFormat: 'yy-mm-dd'
        ,showOtherMonths: true
        ,showMonthAfterYear:true
        ,dayNamesMin: ['일','월','화','수','목','금','토']
        ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
    });

});

function arrowRotate(){
    let rotate = document.querySelector(".userArrow");
    let userInfo = document.querySelector(".userInfo");
    rotate.classList.toggle("active");
    if (rotate.classList.contains("active")) {
        userInfo.style.height = "200px";
        userInfo.style.display = "block";
    } else {
        userInfo.style.height = "0px";
        userInfo.style.display = "none";
    }
}


function aa(){
    let modal = document.querySelector("#modal");
    let close = document.querySelector(".modal-close");
    close.addEventListener("click",function(){
        modal.style.display = "none";
    })
}

