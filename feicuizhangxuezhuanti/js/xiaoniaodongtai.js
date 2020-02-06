// 列表
var listArr=[{
	id:1,
	img1:"img/list_img01.jpg",
	p1:"卓新思创重装出发",
	p2:"2016-1-11",
	p3:"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台",
	img2:"img/list_img_over_xiaojiantou.png"
},{
	id:2,
	img1:"img/list_img02.jpg",
	p1:"小鸟掌学开通国外渠道",
	p2:"2016-1-11",
	p3:"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台",
	img2:"img/list_img_over_xiaojiantou.png"
},{
	id:3,
	img1:"img/list_img03.jpg",
	p1:"卓新思创天气app上线",
	p2:"2016-1-11",
	p3:"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台",
	img2:"img/list_img_over_xiaojiantou.png"
},{
	id:4,
	img1:"img/list_img04.jpg",
	p1:"国外报道",
	p2:"2016-1-11",
	p3:"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台",
	img2:"img/list_img_over_xiaojiantou.png"
},{
	id:5,
	img1:"img/list_img04.jpg",
	p1:"国外报道",
	p2:"2016-1-11",
	p3:"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台",
	img2:"img/list_img_over_xiaojiantou.png"
},{
	id:6,
	img1:"img/list_img03.jpg",
	p1:"卓新思创天气app上线",
	p2:"2016-1-11",
	p3:"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台",
	img2:"img/list_img_over_xiaojiantou.png"
},{
	id:7,
	img1:"img/list_img01.jpg",
	p1:"卓新思创重装出发",
	p2:"2016-1-11",
	p3:"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台",
	img2:"img/list_img_over_xiaojiantou.png"
},{
	id:8,
	img1:"img/list_img02.jpg",
	p1:"小鸟掌学开通国外渠道",
	p2:"2016-1-11",
	p3:"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台",
	img2:"img/list_img_over_xiaojiantou.png"
},{
	id:9,
	img1:"img/list_img03.jpg",
	p1:"卓新思创天气app上线",
	p2:"2016-1-11",
	p3:"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台",
	img2:"img/list_img_over_xiaojiantou.png"
},{
	id:10,
	img1:"img/list_img04.jpg",
	p1:"国外报道",
	p2:"2016-1-11",
	p3:"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台",
	img2:"img/list_img_over_xiaojiantou.png"
},{
	id:11,
	img1:"img/list_img04.jpg",
	p1:"国外报道",
	p2:"2016-1-11",
	p3:"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台",
	img2:"img/list_img_over_xiaojiantou.png"
},{
	id:12,
	img1:"img/list_img03.jpg",
	p1:"卓新思创天气app上线",
	p2:"2016-1-11",
	p3:"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台",
	img2:"img/list_img_over_xiaojiantou.png"
},{
	id:13,
	img1:"img/list_img01.jpg",
	p1:"卓新思创重装出发",
	p2:"2016-1-11",
	p3:"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台",
	img2:"img/list_img_over_xiaojiantou.png"
},{
	id:14,
	img1:"img/list_img02.jpg",
	p1:"小鸟掌学开通国外渠道",
	p2:"2016-1-11",
	p3:"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台",
	img2:"img/list_img_over_xiaojiantou.png"
},{
	id:15,
	img1:"img/list_img03.jpg",
	p1:"卓新思创天气app上线",
	p2:"2016-1-11",
	p3:"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台",
	img2:"img/list_img_over_xiaojiantou.png"
}]
var oList=document.getElementById("list");
var oListnomore=document.getElementById("listnomore");
var oListmore=document.getElementById("listmore");
var newListArr=[];
function moreFn(){
	var str="";
	var newList=listArr.splice(0,6);
	newListArr=newListArr.concat(newList);
	for(var i=0;i<newListArr.length;i++){
		str+='<li>'+'<img class="img01" src="'+newListArr[i].img1+'"/>'+'<div class="text">'+
				'<p>'+newListArr[i].p1+'</p>'+'<p>'+newListArr[i].p2+'</p>'+		
				'<p>'+newListArr[i].p3+'</p>'+'</div>'+'<img class="img02" src="'+newListArr[i].img2+
				'"/>'+'</li>'
	}
	oList.innerHTML=str;
}
moreFn();
// 没有更多切换
oListmore.onclick=function(){
	moreFn();
	if(listArr.length==0){
		oListnomore.src="../img/list_gomore_bg_nomore.jpg";
		oListmore.style.opacity="0";
	}
}