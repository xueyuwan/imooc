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

	$(".userHPic").hover(function(){
		$(".userBox").stop().fadeIn(300);
		$(".userHPic img").addClass("userHPicBorder");

	},function(){
		$(".userBox").stop().fadeOut(500);
		$(".userHPic img").removeClass("userHPicBorder");
	});

	$(".userBox").hover(function(){
		$(".userBox").stop().fadeIn(300);
		$(".userHPic img").addClass("userHPicBorder");
	},function(){
		$(".userBox").stop().fadeOut(500);
		$(".userHPic img").removeClass("userHPicBorder");
	});


	$("#user-modify").on("click",function(){
		layer.open({
			type: 1,
			area: ['600px', '360px'],
			title: '验证身份',
			shadeClose: true, //点击遮罩关闭
			content: '\<\div style="padding:20px;">自定义内容\<\/div>'
		});
	});
	$("#user-mobile").on("click",function(){
		layer.open({
			type: 1,
			area: ['600px', '360px'],
			title: '手机绑定',
			shadeClose: true, //点击遮罩关闭
			content: '\<\div style="padding:20px;">自定义内容\<\/div>'
		});
	});

	$("#user-password").on("click",function(){
		layer.open({
			type: 1,
			area: ['600px', '360px'],
			title: '修改密码',
			shadeClose: true, //点击遮罩关闭
			content: '\<\div style="padding:20px;">自定义内容\<\/div>'
		});
	});
   $("#weixin-bind").on("click",function () {

	   layer.open({
		   type: 2,
		   title: 'layer mobile页',
		   shadeClose: true,
		   shade: 0.8,
		   area: ['380px', '500px'],
		   content: 'http://layer.layui.com/mobile/' //iframe的url
	   });
   });

	$("#weibo-bind").on("click",function () {
		layer.open({
			type: 2,
			title: 'layer mobile页',
			shadeClose: true,
			shade: 0.8,
			area: ['1200px', '600px'],
			content: 'http://weibo.com/alvye'//iframe的url
		});
	});
	$(".login").on("click",function () {
		layer.tab({
			area: ['600px', '300px'],
			tab: [{
				title: '登陆',
				content: '内容1'
			}, {
				title: '注册',
				content: '内容2'
			}]
		});
	})

	

})
