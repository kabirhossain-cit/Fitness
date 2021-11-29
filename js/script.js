let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};


var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        600:{
            slidesPerView:2,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        },
    },
});
$(document).ready (function(){
    // ============================ preloader start ================================
    $(window).on('load',function(){
        $('#preloader').delay(800).fadeOut(800);
    });
    // ============================ preloader end ================================
    
    new WOW().init();
    // ===============================  backtop  start =============================
	$('.back-to-top').click(function(){
		$('body,html').animate({scrollTop:0},500);
	});
	$(window).scroll(function(){
		var scrolling = $(this).scrollTop();
		if(scrolling > 500){
			$('.back-to-top').fadeIn(500);
		}
		else{
			$('.back-to-top').fadeOut(500);
		}
	});
	// ===============================  backtop  end =============================
    });