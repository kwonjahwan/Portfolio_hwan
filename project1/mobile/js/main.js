$(function(){ //mainslider
	var mainSwiper=new Swiper(".mainSwiper", {

		autoplay: { 
			delay: 5000,
		},
		pagination: {
			el: ".swiper-pagination",
		},
	});

	$(".prev").click(function(e){
		e.preventDefault();
		mainSwiper.slidePrev(); 
	});
	$(".next").click(function(e){ 
		e.preventDefault();
		mainSwiper.slideNext(); 
	});
	$(".play").click(function(e){ 
		e.preventDefault();
		mainSwiper.autoplay.start(); 
	});
	$(".pause").click(function(e){ 
		e.preventDefault();
		mainSwiper.autoplay.stop(); 
	});
});

$(function(){ //subslider_content1
	var subSwiper=new Swiper(".subSwiper", {

		autoplay: { // added
			delay: 5000,
		},
		pagination: {
			el: ".swiper-pagination",
		},
	});

	$(".prev").click(function(e){ 
		e.preventDefault();
		subSwiper.slidePrev(); 
	});
	$(".next").click(function(e){
		e.preventDefault();
		subSwiper.slideNext(); 
	});
	$(".play").click(function(e){ 
		e.preventDefault();
		subSwiper.autoplay.start(); 
	});
	$(".pause").click(function(e){ 
		e.preventDefault();
		subSwiper.autoplay.stop(); 
	});
});

$(function(){ //eventslider
	var subSwiper=new Swiper(".eventSwiper", {
		autoplay: { 
			delay: 5000,
		},
	});
});

$(function(){ //subslider_content3
   var sub_slider=new Swiper("#sub_slider .swiper-container", {
			slidesPerView: 1.5, 
   		    spaceBetween: 12, 
			pagination:{ 
			    el: "#sub_slider .swiper-pagination",
				type: "progressbar"
		},
		navigation: {
			nextEl: "#sub_slider .swiper-button-next",
			prevEl: "#sub_slider .swiper-button-prev",
		},
		breakpoints: {
         640: { 
            slidesPerView: 3.5,
            spaceBetween: 5
         }
      },
	  on: {
         init: function(){
            var subSliderLength=$("#sub_slider .swiper-slide").length;
            $("#sub_slider .tot").text("/ "+subSliderLength);
         },
         slideChange: function(){
            var currentSlider=sub_slider.activeIndex;
            currentSlider+=1;
            $("#sub_slider .num").text(currentSlider);
         }
      }
   });
});

$(function(){ //mobile_menu.tab
   $("#header .tab").click(function(e){
      e.preventDefault();
      $("body").addClass("fixed");
	  $("#mobile").addClass("active");
	  $(".dim").addClass("active");
	  $(".dim_logo").addClass("active");
	  $(".closed").addClass("active");
   });
   $(".dim").click(function(e){
	  e.preventDefault();
	  $("body").removeClass("fixed");
      $("#mobile").removeClass("active");
      $(".dim").removeClass("active");
	  $(".dim_logo").removeClass("active");
	  $(".closed").removeClass("active");
   });
   $("#mobile > ul > li").click(function(e){
	e.preventDefault();
	
	if($(this).hasClass("active") == false){
		$("#mobile > ul > li").removeClass("active");
		$(this).addClass("active");
		$("#mobile ul ul").slideUp(300);
		$(this).children("ul").slideDown(300);
	}
	else{
		$(this).removeClass("active");
		$(this).children("ul").slideUp(300);
	}
	});
});

$(function(){ // 상품 하트(찜) 선택시 변경 및 전환
	$(".prod .hart").click(function(e){
		e.preventDefault();
		if($(this).hasClass("active")==false){
        	$(this).addClass("active");
     	 }
     	else{
        	$(this).removeClass("active");
     	}
	});
});

$(function(){
 
	var t=0; 
 
	$(window).scroll(function(){
	   t=$(window).scrollTop();
 
	   if(t > 300){
		  $("#fixed").addClass("active");
	   }
	   else{
		  $("#fixed").removeClass("active");
	   }
	});
 });
