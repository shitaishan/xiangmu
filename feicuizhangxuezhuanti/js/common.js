// 头部区域
$('.nav-piece').mouseover(function(){
	$(this).addClass('now');
})
$('.nav-piece').mouseout(function(){
	$(this).removeClass('now');
	$('.nav-piece:first-child').addClass('now');
})
$('.nav-piece').click(function(){
	$(this).addClass('now');
})
// 返回顶部
$(".fixed .top").click(function(){
	$("body,html").animate({
		"scrollTop":0
	},1000)
})
   // 距离顶部多少时隐藏和显现
$(window).scroll(function(){
	var oScrolltop=$(window).scrollTop();
	var oHeight=$("#header").height()+$(".banner").height()*(2/3);
	// 隐藏
	if(oScrolltop<=oHeight){
		$(".fixed").fadeOut(300);
	}else {
		$(".fixed").fadeIn(300);
	}
	// 显现
})