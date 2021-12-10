$(function(){
	// 1) 페이지 이동 관련
	var scrollT=0;
	var pageN=0;
	var targetY=0;
	var winHalf;
	var categoryFlag=false;

	$(".global_menu .menu li").eq(pageN).addClass("active");
	$(".floating_menu .list li").eq(pageN).addClass("active");

	$(window).scroll(function(){
		scrollT=$(window).scrollTop();

		if(scrollT <= $("#page1").offset().top-winHalf){
			pageN=0;
		}
		else if(scrollT <= $("#page2").offset().top-winHalf){
			pageN=1;
		}
		else if(scrollT <= $("#page3").offset().top-winHalf){
			pageN=2;
		}
		else if(scrollT <= $("#page4").offset().top-winHalf){
			pageN=3;
		}
		else{
			pageN=4;
		}
		// console.log(pageN);

		$(".logo_menu #gnb li").removeClass("active");
		$(".logo_menu #gnb li").eq(pageN).addClass("active");
		$(".floating_menu .list li").removeClass("active");
		$(".floating_menu .list li").eq(pageN).addClass("active");

		if(pageN ==1  || pageN ==3 || pageN ==5){
			$(".logo_menu").addClass("dark");
			$("#gnb").addClass("dark");
			$(".tab").addClass("dark");
		}
		else{
			$(".logo_menu").removeClass("dark");
			$("#gnb").removeClass("dark");
			$(".tab").removeClass("dark");
		}

		if(pageN ==2  || pageN ==3 || pageN ==5){
			$(".fix_contact").addClass("dark");
		}
		else{
			$(".fix_contact").removeClass("dark");
		}

		if(pageN ==1){
			$(".download").addClass("dark");
		}
		else{
			$(".download").removeClass("dark");
		}

		if(pageN ==2 || pageN ==4){
			$(".logo").addClass("active");
		}
		else{
			$(".logo").removeClass("active");
		}

		if(categoryFlag){
			return;
		}
		else{
			if(pageN == 0){
				$("#header").addClass("active");
			}
			else{
				$("#page"+pageN).addClass("active");

				if(pageN == 4){
					categoryFlag=true;
				}
			}
		}
	});

	// 2) 화면 크기 조정 관련
	$(window).resize(function(){
		winHalf=$(window).height()/2; 
		$(window).trigger("scroll");
	});
	$(window).trigger("resize");

	// 3) 메뉴 바 이동 관련
	$("#gnb li:first-child").addClass("active");

	$("#gnb li").click(function(e){
		e.preventDefault();
		
		n=$(this).index();

		if(n == 0){
			pos=0;
		}
		else{
		pos=$("#page"+n).offset().top;	
		}

		$("html").animate({"scrollTop" : pos}, 300)
	});

	// 4) 포트폴리오 선택 관련
	var posY;
	var portfolioN=0;

	$(".portfolio:first").addClass("active");
	
	$(".portfolio .title").click(function(e){
		e.preventDefault();
		$(".portfolio").removeClass("active");
		$(this).parents(".portfolio").addClass("active");
		
		posY=$(this).parents(".portfolio").offset().top-75;

		$("html").animate({scrollTop : posY}, 800);
	});

	$(".portfolio #project2 .title").click(function(e){
		e.preventDefault();
		
		$("#project2 .title_area .content").addClass("active");
		$("#project1 .title_area .content").removeClass("active");
	});

	// 5) 탭 이동 관련
	$(".tab").click(function(e){
		e.preventDefault();
		if($(this).hasClass("active") == false){
			$(this).addClass("active");
			$(".floating_menu").addClass("active");
		}
		else{
			$(this).toggleClass("active");
			$(".floating_menu").toggleClass("active")
		}
	});
	$(".floating_menu .list li").click(function(e){
		e.preventDefault();
		pageN=$(this).index();

		$(".tab").removeClass("active");
		$(".floating_menu").removeClass("active");

		if(pageN == 0){
			targetY=0;
		}
		else{
			targetY=$("#page"+pageN).offset().top;
		}

		$("html").delay(400).animate({"scrollTop":targetY}, 300);
	});

	$(".about_icon").click(function(e){
		e.preventDefault();
		if($(this).hasClass("active") == false){
			$(this).addClass("active");
			$(".tab_down").addClass("active");
		}
		else{
			$(this).toggleClass("active");
			$(".tab_down").toggleClass("active")
		}
	
		$("html").delay(400).animate({"scrollTop":targetY}, 300);
	});


	// 6) VIDEO_비디오 구현 관련
	var videoUrl=["video1", "video2", "video3", "video4"];
	var videoTotal=videoUrl.length-1;
	var videoN=0;
	var videoPath="";
	var video=document.getElementById("my_video");
	video.play();
	video.muted=true;

	function videoDimmed(){
		$(".video video").hide().css({opacity:0});

		setTimeout(function(){
			$(".video video").show().animate({opacity:1}, 150);
		}, 800);
	}

	videoDimmed();

	video.addEventListener("ended", function(){
		if(videoN < videoTotal){
			videoN+=1;
		}
		else{
			videoN=0;
		}

		video.pause();
		videoPath="video/"+videoUrl[videoN]+".mp4";
		$("#my_video").attr({src:videoPath});
		video.play();
		videoDimmed();
	});
	$(".arrow .left").click(function(e){
		e.preventDefault();

		if(videoN > 0){
			videoN-=1;
		}
		else{
			videoN=videoTotal;
		}

		video.pause();
		videoPath="video/"+videoUrl[videoN]+".mp4";
		$("#my_video").attr({src:videoPath});
		videoDimmed();
		video.play();
	});
	$(".arrow .right").click(function(e){
		e.preventDefault();

		if(videoN < videoTotal){
			videoN+=1;
		}
		else{
			videoN=0;
		}

		video.pause();
		videoPath="video/"+videoUrl[videoN]+".mp4";
		$("#my_video").attr({src:videoPath});
		videoDimmed();
		video.play();
	});	

	// 7) MOBILE.URL_이동 관련
	function mobileLink(){
		if(isMobile){
			$("a.project1").attr({"href": "project1/mobile/index.html"});
			$("a.project3").attr({"href": "project3/mobile/index.html"});
		}
		else{
			$("a.project1").attr({"href": "project1/pc/index.html"}); 
			$("a.project3").attr({"href": "project3/pc/index.html"});
		}

		$("a.project2").attr({"href": "project2/index.html"});
		$("a.project1_interface").attr({"href": "project1_interface/html/index.html"});
		$("a.project2_interface").attr({"href": "project2_interface/html/index.html"});
	}

	mobileLink();
});

