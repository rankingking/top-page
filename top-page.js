$(function(){
	var i = 1;
	setInterval(function(){
		if(i > 5) i = 5
		$("body").css("background-image", "url('IMAGE/image"+i+".jpeg')")
		i++;
	}, 800);
	
	$(".main-menu").hide().each(function(){
		$(this).delay(5000).fadeIn("slow");
	});
});
