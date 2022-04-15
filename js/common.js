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
            $(".contentArea").css("width","calc(100% - 90px)");
            $(".sideBar").css("width", "50px").addClass("active");
        } else if ($(this).find("i").hasClass("xi-hamburger-out")) {
            $(this).find("i").addClass("xi-hamburger-back");
            $(this).find("i").removeClass("xi-hamburger-out");
            $(".sideBar").css("width", "200px").removeClass("active");
            $(".contentArea").css("width","calc(100% - 240px)");
            console.log("git Test");
        }
    })

    $('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('ul.tabs li').removeClass('active');
		$('.tab-contents').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
        console.log(tab_id);
	})
})

function arrowRotate(){
    let rotate = document.querySelector(".userArrow .rotate");
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
