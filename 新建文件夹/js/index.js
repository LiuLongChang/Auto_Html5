/***返回顶部***/
$(document).ready(function(){
	//首先将#ding隐藏
	$("#ding").hide();
	//当滚动条的位置处于距顶部50像素以下时，跳转链接出现，否则消失
	$(function () {
		$(window).scroll(function(){
			if ($(window).scrollTop()>500){
				$("#ding").fadeIn(200);
			}
		else{
			$("#ding").fadeOut(500);
		}
	});
	//当点击跳转链接后，回到页面顶部位置
	$("#ding").click(function(){
		$('body,html').animate({scrollTop:0},1000);
			return false;
		});
	});
});

/***购物车动态选择商品***/
$(function (){
	var shiJian = 1;
	$("#gou_con .jiaGe .jiaGe_ImgY").click(function (){
		if (shiJian == 1) {
			$(this).removeClass("jiaGe_Img2");
			$(this).addClass("jiaGe_Img");
			shiJian = 2;
		}else{
			$(this).addClass("jiaGe_Img2");
			$(this).removeClass("jiaGe_Img");
			shiJian = 1;
		};
	});
	$("#gou .guo_Qu .guo_Qu_H").click(function (){
		$(this).addClass("guo_Qu_HH").siblings().removeClass("guo_Qu_HH");
		$("#gou_con .jiaGe .jiaGe_ImgY").each(function(){
		    $(this).removeClass("jiaGe_Img2");
			$(this).addClass("jiaGe_Img");
		});
	});
	$("#gou .guo_Qu .guo_Qu_S").click(function (){
		$(this).addClass("guo_Qu_HH").siblings().removeClass("guo_Qu_HH");
		$("#gou_con .jiaGe .jiaGe_ImgY").each(function(){
		    $(this).addClass("jiaGe_Img2");
			$(this).removeClass("jiaGe_Img");
		});
	});
});

/***收货地址修改***/
	$(function (){
		var shiJian = 1;
		$("#con li span.Right").click(function (){
			if (shiJian == 1) {
				$(this).removeClass("Right");
				$(this).addClass("Right1");
				shiJian = 2;
			}else{
				$(this).addClass("Right");
				$(this).removeClass("Right1");
				shiJian = 1;
			};
		});
	});



//移动端position定位兼容问题
/*$(function (){
	alert(23);
	if (/ipad|iphone|mac/i.test(navigator.userAgent)){
		$(".fot_bottom").css("position", "static"); 
	} 
})*/


