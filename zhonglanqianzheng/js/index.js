// 轮播图
$("#myCarousel").carousel({
	interval:2500
})

// 我们的成绩
var options= {
	useEasing: true,
	useGrouping: true,
	separator: ','
};
var arr=new Array(
    new CountUp('sum-apply', 0, 26517, 0, 3, options),
    new CountUp('sum-rate', 0, 98.6, 1, 3, options),
    new CountUp('sum-urget', 0, 7368, 0, 3, options),
    new CountUp('urget-rate', 0, 100, 0, 3, options),
)
var fn=function(){
	$(".ren-number").each(function(){
		var index=$(this).index(".ren-number");
		arr[index].start();
	})
}
fn()

// 首页-我们的服务
$('.card-item').mouseover(function () {
	$(this).addClass('card-active');
	$(this).siblings().removeClass('card-active');
})

// 返回顶部滑动
$(window).scroll(function(){
	// 窗口滚动距离顶部的距离
	var oscrollTop=$(window).scrollTop();
	// 顶部导航的高度
	var oHeight=$('#header').height()+$("#myCarousel").height()/6;
	if (oscrollTop <= oHeight) {
		$('#clan-slider li:last-child').fadeOut(300);
	}else {
		$('#clan-slider li:last-child').fadeIn(300);
	}
})
// 点击回到顶部
$("#slider-goTop").click(function(){
	$("body,html").animate({
		"scrollTop":0
	},2000)
})
// 请您留言
var imgs=document.getElementById("imgs");
$("#nb-head-close").click(function(){
	if ($("#nb-nodeboard").height()<=35) {
		$("#nb-nodeboard").css("height","420px");
		imgs.src="img/nodeMin.png"
	}else {
		$("#nb-nodeboard").css("height","35px");
		imgs.src="img/nodeMax.png"
	}	
})