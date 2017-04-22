jQuery(document).ready(function($) {

	$("#skyblue").click(function(){
		$("body").css("background-color", "skyblue");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": 'skyblue'
		});
		$("#gif img").css("src=", "../static/images/wow.gif");
	});

	$("#blue").click(function(){
		$("body").css("background-color", "blue");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": 'blue'
		});
	});

	$("#emo").click(function(){
		$("body").css("background-color", "#000");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": '#000'
		});
	});

	$("#red").click(function(){
		$("body").css("background-color", "red");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": 'red'
		});
	});
});
