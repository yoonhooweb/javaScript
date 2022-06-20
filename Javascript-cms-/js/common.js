$(document).ready(function(){
    aa();
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