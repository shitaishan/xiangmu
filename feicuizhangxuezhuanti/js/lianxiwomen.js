// 文章详情
$('.like-btn-wrap').click(function(){
	$('.like-btn').addClass('like-btn-clicked');
	$('.like-nomber').html('喜欢(21)');
	$('.like-tips').css({
		"opacity":"1",
		"top":"0",
		"background-color":"white"
	})
})
$(".content h3 span:last-child").click(function(){
	$(".content h3").css({
		"width": "100px", 
		"background-position-x": "-680px",
		"overflow": "hidden"
	})
})