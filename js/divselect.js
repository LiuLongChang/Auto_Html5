jQuery.divselect = function(divselectid,inputselectid) {
	var inputselect = $(inputselectid);
	$(divselectid+" cite").click(function(){
		var ul = $(divselectid+" ul");
		if(ul.css("display")=="none"){
			ul.slideDown("fast");
		}else{
			ul.slideUp("fast");
		}
	});
	$(divselectid+" ul li").click(function(){
		var txt = $(this).text();
		$(divselectid+" cite").html(txt);
		var value = $(this).attr("selectid");
		inputselect.val(value);
		$(divselectid+" ul").hide();
		
	});
	$(document).click(function(){
		$(divselectid+" ul").hide();
	});
};

jQuery.divselect1 = function(divselectid1,inputselectid1) {
	var inputselect = $(inputselectid1);
	$(divselectid1+" cite").click(function(){
		var ul = $(divselectid1+" ul");
		if(ul.css("display")=="none"){
			ul.slideDown("fast");
		}else{
			ul.slideUp("fast");
		}
	});
	$(divselectid1+" ul li").click(function(){
		var txt = $(this).text();
		$(divselectid1+" cite").html(txt);
		var value = $(this).attr("selectid");
		inputselect.val(value);
		$(divselectid1+" ul").hide();
		
	});
	$(document).click(function(){
		$(divselectid1+" ul").hide();
	});
};