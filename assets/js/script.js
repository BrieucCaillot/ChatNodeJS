jQuery(document).ready(function($) {

	$("#skyblue").click(function(){
		$("body").css("background-color", "skyblue");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": 'skyblue'
		});
		
		$("video").css("display", "block");

		var vid = document.getElementsByTagName('video')[0]; 
		vid.play(); 

		var videoend = function(){
        	$("video").fadeOut();
        	$("video").attr("muted", "true");
    	};

    	setTimeout(videoend, 4500);
		/*$("#gif img").css("src=", "../static/images/wow.gif");*/
	});

	$("#blue").click(function(){
		$("body").css("background-color", "blue");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": 'blue'
		});

		$("video").css("display", "block");

		var vid = document.getElementsByTagName('video')[0]; 
		vid.play(); 

		var videoend = function(){
        	$("video").fadeOut();
        	$("video").attr("muted", "true");
    	};

    	setTimeout(videoend, 4500);
	});

	$("#emo").click(function(){
		$("body").css("background-color", "#000");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": '#000'
		});

		$("video").css("display", "block");

		var vid = document.getElementsByTagName('video')[0]; 
		vid.play(); 

		var videoend = function(){
        	$("video").fadeOut();
        	$("video").attr("muted", "true");
    	};

    	setTimeout(videoend, 4500);
	});

	$("#red").click(function(){
		$("body").css("background-color", "red");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": 'red'
		});

		$("video").css("display", "block");

		var vid = document.getElementsByTagName('video')[0]; 
		vid.play(); 

		var videoend = function(){
        	$("video").fadeOut();
        	$("video").attr("muted", "true");
    	};

    	setTimeout(videoend, 4500);
	});
});
