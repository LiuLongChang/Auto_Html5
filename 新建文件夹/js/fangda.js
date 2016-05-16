/***在线客服显示隐藏动态控制***/
$("#kefu").click(function (event){
	$("#zaiX").fadeIn();
	event.stopPropagation();
});
$(document).click(function (){
	$("#zaiX").fadeOut();
});

$(".shigu_con>ul li input").click(function(){
	$(this).fadeOut();
});

//动态设置div的高度与line-height高度
var Din = $(".shigu_con div.FnfDa").width();
$(".shigu_con div.FnfDa").height(Din);
$(".shigu_con div.FnfDa").css({"lineHeight":Din+"px"});

//点击放大图片
$(".shigu_con div.FnfDa").click(function(){
	$(".datuShow").fadeIn();
	var Dimg = $(this).html();
	$(".datuShow>div").html(Dimg);
});


//点击返回页面
$(".datuShow .left").click(function (){
	$(".datuShow").fadeOut();
});

//点击删除图片
$(".datuShow .right").click(function (){
	$(".datuShow").fadeOut();
});