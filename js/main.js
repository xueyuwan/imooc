$(function(){
	$(".app").hover(function(){
		$(".erweima").stop().css("display","block");         
	},function(){
		$(".erweima").stop().css("display","none");       
	});
	$(".erweima").hover(function(){
		$(this).stop().css("display","block");      
	},function(){
		$(this).stop().css("display","none");        
	});
	$(".sideNav li").each(function(){
        $(this).hover(function(){
           //$(this).addClass("actived").siblings().removeClass("actived");
           var index=$(this).index(); 
           $(".box").eq(index).css("display","block").siblings(".box").css("display","none");
        },function(){
        	$(".box").css("display","none");
        });
    });
   $(".box").hover(function(){
		$(this).stop().css("display","block");      
	},function(){
		$(this).stop().css("display","none");        
	});
	
	$(".content1").hover(function () {
        $(this).find(".text1").stop().animate({
            top: '30px'
        }, 300)
        },function(){
            $(this).find(".text1").stop().animate({
                top:'90px'
            }, 300)
    });
   
   $(".chapter h3").click(function(){
     	$(this).siblings(".video").toggleClass("mychange");
	});

	$(window).scroll(function() {
		if($(window).scrollTop() >= 693){
			$(".js-fixed").fadeIn(300) ;
			$("#backTop").css("display","block") ;
			   }else{
				$(".js-fixed").fadeOut(300) ;
			    $("#backTop").css("display","none") ;
		     }
	});

	$('#backTop').click(function (e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: 0}, 800);
	});


})
