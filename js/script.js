//modal
$(function(){
	　　　$('.menu-trigger').on("click", function(){
	　　　　if ($('.menu-trigger').hasClass('active')) {
	　　　　　$('.menu-trigger').removeClass('active');
	　　　　} else {
	　　　　　$('.menu-trigger').addClass('active');
	　　　　}
	　　　});
	　　});		


$(function(){
　　　$('.menu-trigger').on("click", function(){
　　　　if ($('.gnav').hasClass('active')) {
　　　　　$('.gnav').removeClass('active');
　　　　} else {
　　　　　$('.gnav').addClass('active');
　　　　}
　　　});
　　});
		
$(function(){
　　　$('.menu-trigger').on("click", function(){
　　　　if ($('body').hasClass('open')) {
　　　　　$('body').removeClass('open');
　　　　} else {
　　　　　$('body').addClass('open');
　　　　}
　　　});
　　});


//slider
$('.slider').slick({
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	fade: true,
	arrows: false,

	responsive: [
		{
		  breakpoint: 768,
		  settings: {

		  }
		},
		{
		  breakpoint: 480,
		  settings: {

		  }
		}
	  ]
});

$('.slider02').slick({
	infinite: true,
	autoplay: true,
	speed: 500,
	fade: true,
	cssEase: 'linear'
});


$('.slider-1').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
	autoplay: true,
	autoplaySpeed: 2000,
	dots:true,

	responsive: [
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
		  }
		}
	  ]
});


//LODINGここから--------------

// window.onload = function() {
// 	const spinner = document.getElementById('loading');
// 	spinner.classList.add('loaded');
//   }



//TOPアニメーションここから--------------


//MV
$(function() {
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({ 
	triggerElement: ".cover-item",  // Sceneの指定 })
})
scene.on("enter", function(event) {
	$(".cover-item .left,.cover-item .right").addClass("active");
})
.addTo(controller);
});

$(function() {
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({ 
triggerElement: ".data-item.ratio01",  // Sceneの指定 })
})
scene.on("enter", function(event) {
$(".data-item.ratio01 li").addClass("active");
})
.addTo(controller);
});

//1
$(function() {
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({ 
triggerElement: ".content01",  // Sceneの指定 })
})
scene.on("enter", function(event) {
	$(".content01 dt,.content01 dd").addClass("active");
  })
  .addTo(controller);
});

//2
$(function() {
	var controller = new ScrollMagic.Controller();
	
	var scene = new ScrollMagic.Scene({ 
		triggerElement: ".content02",  // Sceneの指定 })
	})
	scene.on("enter", function(event) {
		$(".content02 dt,.content02 dd").addClass("active");
	})
	.addTo(controller);
	});

//3	
$(function() {
	var controller = new ScrollMagic.Controller();
	
	var scene = new ScrollMagic.Scene({ 
		triggerElement: ".content04",  // Sceneの指定 })
	})
	scene.on("enter", function(event) {
		$(".content04 li").addClass("active");
	})
	.addTo(controller);
	});


//4
$(function() {
	var controller = new ScrollMagic.Controller();
	
	var scene = new ScrollMagic.Scene({ 
		triggerElement: ".content05",  // Sceneの指定 })
	})
	scene.on("enter", function(event) {
		$(".content05 div").addClass("active");
	})
	.addTo(controller);
	});



//TOPアニメーションここまで--------------



//PAGETOP
$(document).ready(function(){
    $("#pageTop").hide();
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100) {
            $("#pageTop").fadeIn("fast");
        } else {
            $("#pageTop").fadeOut("fast");
        }
        scrollHeight = $(document).height();
        scrollPosition = $(window).height() + $(window).scrollTop();
        footHeight = $("footer").innerHeight(); //footerの高さ（＝止めたい位置）
        if ( scrollHeight - scrollPosition  <= footHeight ) {
            $("#pageTop").css({
                "position":"absolute", 
                "bottom": footHeight + 20
            });
        } else { 
            $("#pageTop").css({
                "position":"fixed",
                "bottom": "120px" 
            });
        }
    });
    $('#pageTop').click(function () {
        $('body,html').animate({
        scrollTop: 0
        }, 400);
        return false;
    });
});

$('.slideshow').slick({
    arrows: false,//左右の矢印はなし
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
    speed: 6900,//スライドのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
    pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
    cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
    slidesToShow: 4,//スライドを画面に4枚見せる
    slidesToScroll: 1,//1回のスライドで動かす要素数
    responsive: [
      {
      breakpoint: 769,//モニターの横幅が769px以下の見せ方
      settings: {
        slidesToShow: 2,//スライドを画面に2枚見せる
      }
    },
    {
      breakpoint: 426,//モニターの横幅が426px以下の見せ方
      settings: {
        slidesToShow: 1.5,//スライドを画面に1.5枚見せる
      }
    }
  ]
  });