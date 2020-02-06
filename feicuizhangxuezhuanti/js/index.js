// 轮播图
	var num=null;
	// 向左运动
	$('.banner .banner-change .left').click(function(){
		num--;
		if(num<0){
			num=$('.banner .middle span').length-1;
		}
		change(num);
	})
	// 向右运动
	$('.banner .banner-change .right').click(function(){
		num++;
		if(num>$('.banner .middle span').length-1){
			num=0;
		}
		change(num);
	})
	// 指示点
	$('.banner .change .middle span').click(function(){
		num=$(this).index();
		change(num);
	})
	function change(num){
		$('.banner .banner-change .middle span').eq(num).addClass("nows").siblings(".banner .banner-change .middle span").removeClass("nows");
		$('.banner .banner-one').eq(num).addClass("active").siblings(".banner .banner-one").removeClass("active");
	}
// 产品轮播
	var count=null;
	// 向左
	$('.mokuai .left2').click(function(){
		count--;
		if(count<0){
			count=$('.mokuai .contents li').length-1;
		}
		changes(count);
	})
	// 向右
	$('.mokuai .right2').click(function(){
		count++;
		if(count>$('.mokuai .contents li').length-1){
			count=0;
		}
		changes(count);
	})
	function changes(count){
		$('.mokuai .now-line li').removeClass("nowed");
		$('.mokuai .now-line li').eq(count).addClass("nowed");
		$('.mokuai .contents li').removeClass("actives");
		$('.mokuai .contents li').eq(count).addClass("actives");
	}
	// 业务范围
	var sum=null;
	var nowIndex = 0;
	$(".yincang").click(function(){
		nowIndex = $('.yewu').find(".yincang").index($(this));
		slide()
	})
	$(".simple img").click(function(){
		nowIndex = $('.yewu').find(".simple img").index($(this));
		slide()
	})
	     // delay()设置延迟  stop()停止动画    hasClass()找到匹配指定类名  slideUp()上卷
	function slide(){
		if ($(".yincang").eq(nowIndex).hasClass("zhankai")){
			$(".ditail").slideUp(300);
			$(".yincang").removeClass("zhankai")
		}else {
			$(".ditail").eq(nowIndex).slideDown(300);
		    $(".yincang").eq(nowIndex).addClass("zhankai");
		}
	}
// 团队介绍
   // 团队轮播
var num2=null;
$(".team-change .left").click(function(){
	$(".team-move>ul>li:last").prependTo($(".team-move>ul"));
	$(".team-move>ul").css("left","-1100px");
	$(".team-move>ul").animate({
		"left":"0px"
	});
	num2--;
	if(num2<0){
		num2=$(".team-change .middle span").length-1
	}
	$('.team-change .middle span').removeClass("nows");
	$('.team-change .middle span').eq(num2).addClass("nows");
})
$(".team-change .right").click(function(){
	$(".team-move>ul").animate({
		"left":"-1100px"
	},function(){
		$(".team-move>ul>li").eq(0).appendTo($(".team-move>ul")),
		$(".team-move>ul").css("left","0px")
	});
	num2++;
	if(num2>$(".team-change .middle span").length-1){
		num2=0;
	}
	$('.team-change .middle span').removeClass("nows");
	$('.team-change .middle span').eq(num2).addClass("nows");
})
var timer=setInterval(function(){
	$(".team-change .right").click()
},3000)
$(".team-content").mouseover(function(){
	clearInterval(timer)
})
$(".team-content").mouseout(function(){
	timer=setInterval(function(){
		$(".team-change .right").click()
	},3000)
})