$(document).ready(function(){
	var button = $(".container .nav");
	var menu = $("#menu");
	var stt = $("#scrolltotop");
	  
	/*  menu button for mobile */  
	set();
	function set(){
		button.on("click",function(){
	
			$(menu).addClass("open");
			$(this).css({"background" : "url(imgs/logo2.png) no-repeat 90% center" , "display" : "block" , "width" : "100%" , "height" : "33px" , "background-color" : "#404040" , "cursor" : "pointer" , "margin-bottom" : "10px"});
			setEvent();
		});
	}
	function setEvent(){
		button.on("click",function(){
	
			$(menu).removeClass("open");
			$(this).css({"background" : "url(imgs/logo.png) no-repeat 90% center" , "display" : "block" , "width" : "100%" , "height" : "33px" , "background-color" : "#404040" , "cursor" : "pointer" , "margin-bottom" : "10px"});
			set();
		});
	}

	
	  
	/* Scroll to top button*/
	stt.on("click",function(){
		$("html , body").animate({scrollTop : 0 },700);
	});
	
	$(document).scroll(function(e){
		var scrollPos = $(this).scrollTop();
		if(scrollPos < 100){
			$(stt).addClass("hide");
		}
		else{
			$(stt).removeClass("hide");
		}
	});
	
	
	/* Changing the header */
	$(document).scroll(function(e){
		var scrollPos = $(this).scrollTop();
		if(scrollPos > 5){
			$("header").addClass("sticky");
		}
		else{
			$("header").removeClass("sticky");
		}
	});
	
	
	
});

 
		

















