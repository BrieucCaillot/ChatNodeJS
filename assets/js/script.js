jQuery(document).ready(function($) {

	/* BACKGROUND COLOR */
    
    $('#stylizing ul li').click(function(){
        var previous = $("body").attr("class");
        var color = $(this).attr("id");
        $("body").removeClass(previous).addClass(color);
    })

//	$("#blue1").click(function(){
//		$("body").css("background-color", "#0053BF");
//		$("body").addClass('transition');
//		$("#zone_chat strong").css({
//			"color": '#fff',
//			"background-color": '#0053BF'
//		});
//	});

//	$("#blue2").click(function(){
//		$("body").css("background-color", "#00377F");
//		$("body").addClass('transition');
//		$("#zone_chat strong").css({
//			"color": '#fff',
//			"background-color": '#00377F'
//		});
//
//		$("#wow").css("display", "block");
//
//		var vid = document.getElementsByTagName('video')[1]; 
//		vid.play(); 
//
//		var videoend = function(){
//        	$("#wow").fadeOut();
//        	$("#wow").attr("muted", "true");
//    	};
//
//    	setTimeout(videoend, 4500);
//	});
//
//	$("#blue3").click(function(){
//		$("body").css("background-color", "#006EFF");
//		$("body").addClass('transition');
//		$("#zone_chat strong").css({
//			"color": '#fff',
//			"background-color": '#006EFF'
//		});
//	});
//
//	$("#blue4").click(function(){
//		$("body").css("background-color", "#001C40");
//		$("body").addClass('transition');
//		$("#zone_chat strong").css({
//			"color": '#fff',
//			"background-color": '#001C40'
//		});
//
//		$("#dorian").css("display", "block");
//		$("#dorian").fadeIn('slow');
//
//		var vid = document.getElementsByTagName('video')[3]; 
//		vid.play(); 
//
//		var videoend = function(){
//        	$("#dorian").fadeOut();
//        	$("#dorian").attr("muted", "true");
//    	};
//
//    	setTimeout(videoend, 10000);
//	});
//
//	$("#blue5").click(function(){
//		$("body").css("background-color", "#0063E5");
//		$("body").addClass('transition');
//		$("#zone_chat strong").css({
//			"color": '#fff',
//			"background-color": '#0063E5'
//		});
//	});
//
//	/* hommevert */
//	$("#orange1").click(function(){
//		$("body").css("background-color", "#BF7A00");
//		$("body").addClass('transition');
//		$("#zone_chat strong").css({
//			"color": '#fff',
//			"background-color": '#BF7A00'
//		});
//
//		$("#hommevert").css("display", "block");
//		$("#hommevert").fadeIn('fast');
//
//		var vid = document.getElementsByTagName('video')[0]; 
//		vid.play(); 
//
//		var videoend = function(){
//        	$("#hommevert").fadeOut();
//        	$("#hommevert").attr("muted", "true");
//    	};
//
//    	setTimeout(videoend, 4500);
//	});
//
//
//	$("#orange2").click(function(){
//		$("body").css("background-color", "#7F5100");
//		$("body").addClass('transition');
//		$("#zone_chat strong").css({
//			"color": '#fff',
//			"background-color": '#7F5100'
//		});
//	});
//
//	/* okay */
//	$("#orange3").click(function(){
//		$("body").css("background-color", "#FFA300");
//		$("body").addClass('transition');
//		$("#zone_chat strong").css({
//			"color": '#fff',
//			"background-color": '#FFA300'
//		});
//
//		$("#okay").css("display", "block");
//
//		var vid = document.getElementsByTagName('video')[2]; 
//		vid.play(); 
//
//		var videoend = function(){
//        	$("#okay").fadeOut();
//        	$("#okay").attr("muted", "true");
//    	};
//
//    	setTimeout(videoend, 5000);
//
//   
//		
//	});
//
//	$("#orange4").click(function(){
//		$("body").css("background-color", "#402900");
//		$("body").addClass('transition');
//		$("#zone_chat strong").css({
//			"color": '#fff',
//			"background-color": '#7F5100'
//		});
//	});
//
//	/* misterv2 */
//	$("#orange5").click(function(){
//		$("body").css("background-color", "#E59200");
//		$("body").addClass('transition');
//		$("#zone_chat strong").css({
//			"color": '#fff',
//			"background-color": '#E59200'
//		});
//
//		$("#mv2").css("display", "block");
//
//		var vid = document.getElementsByTagName('video')[5]; 
//		vid.play(); 
//
//		var videoend = function(){
//        	$("#mv2").fadeOut();
//        	$("#mv2").attr("muted", "true");
//    	};
//
//    	setTimeout(videoend, 8000);
//	});
//
//	$("#red1").click(function(){
//		$("body").css("background-color", "#BF0004");
//		$("body").addClass('transition');
//		$("#zone_chat strong").css({
//			"color": '#fff',
//			"background-color": '#E59200'
//		});
//	});
//
//	/* misterv3 */
//	$("#red2").click(function(){
//		$("body").css("background-color", "#7F0002");
//		$("body").addClass('transition');
//		$("#zone_chat strong").css({
//			"color": '#fff',
//			"background-color": '#E59200'
//		});
//
//		$("#mv3").css("display", "block");
//
//		var vid = document.getElementsByTagName('video')[6]; 
//		vid.play(); 
//
//		var videoend = function(){
//        	$("#mv3").fadeOut();
//        	$("#mv3").attr("muted", "true");
//    	};
//
//    	setTimeout(videoend, 10000);
//	});
//
//	$("#red3").click(function(){
//		$("body").css("background-color", "#FF0005");
//		$("body").addClass('transition');
//		$("#zone_chat strong").css({
//			"color": '#fff',
//			"background-color": '#FF0005'
//		});
//	});
//
//	/* misterv 4 */
//	$("#red4").click(function(){
//		$("body").css("background-color", "#400001");
//		$("body").addClass('transition');
//		$("#zone_chat strong").css({
//			"color": '#fff',
//			"background-color": '#400001'
//		});
//
//		$("#mv4").css("display", "block");
//
//		var vid = document.getElementsByTagName('video')[7]; 
//		vid.play(); 
//
//		var videoend = function(){
//        	$("#mv4").fadeOut();
//        	$("#mv4").attr("muted", "true");
//    	};
//
//    	setTimeout(videoend, 28000);
//	});
//
//	$("#red5").click(function(){
//		$("body").css("background-color", "#E50004");
//		$("body").addClass('transition');
//		$("#zone_chat strong").css({
//			"color": '#fff',
//			"background-color": '#E50004'
//		});
//	});
//
//	/* misterv 5 */ 
//	$("#green1").click(function(){
//		$("body").css("background-color", "#00BF6C");
//		$("body").addClass('transition');
//		$("#zone_chat strong").css({
//			"color": '#fff',
//			"background-color": '#00BF6C'
//		});
//
//		$("#mv5").css("display", "block");
//
//		var vid = document.getElementsByTagName('video')[8]; 
//		vid.play(); 
//
//		var videoend = function(){
//        	$("#mv5").fadeOut();
//        	$("#mv5").attr("muted", "true");
//    	};
//
//    	setTimeout(videoend, 10000);
//	});
//
//	$("#green2").click(function(){
//		$("body").css("background-color", "#007F48");
//		$("body").addClass('transition');
//		$("#zone_chat strong").css({
//			"color": '#fff',
//			"background-color": '#007F48'
//		});
//	});
//
//	/* misterv 1 */
//	$("#green3").click(function(){
//		$("body").css("background-color", "#00FF90");
//		$("body").addClass('transition');
//		$("#zone_chat strong").css({
//			"color": '#fff',
//			"background-color": '#00FF90'
//		});
//
//		$("#mv1").css("display", "block");
//
//		var vid = document.getElementsByTagName('video')[4]; 
//		vid.play(); 
//
//		var videoend = function(){
//        	$("#mv1").fadeOut();
//        	$("#mv1").attr("muted", "true");
//    	};
//
//    	setTimeout(videoend, 10000);
//	});
//
//	$("#green4").click(function(){
//		$("body").css("background-color", "#004024");
//		$("body").addClass('transition');
//		$("#zone_chat strong").css({
//			"color": '#fff',
//			"background-color": '#004024'
//		});
//	});
//
//	/* wow */
//	$("#green5").click(function(){
//		$("body").css("background-color", "#00E581");
//		$("body").addClass('transition');
//		$("#zone_chat strong").css({
//			"color": '#fff',
//			"background-color": '#004024'
//		});
//
//		$("#wow").css("display", "block");
//
//		var vid = document.getElementsByTagName('video')[1]; 
//		vid.play(); 
//
//		var videoend = function(){
//        	$("#wow").fadeOut();
//        	$("#wow").attr("muted", "true");
//    	};
//
//    	setTimeout(videoend, 4500);
//	});
//
//	$("#yellow1").click(function(){
//		$("body").css("background-color", "#BFBD00");
//		$("body").addClass('transition');
//		$("#zone_chat strong").css({
//			"color": '#fff',
//			"background-color": '#BFBD00'
//		});
//	});
//
//	/* wow */
//	$("#yellow2").click(function(){
//		$("body").css("background-color", "#7F7E00");
//		$("body").addClass('transition');
//		$("#zone_chat strong").css({
//			"color": '#fff',
//			"background-color": '#7F7E00'
//		});
//
//		$("#wow").css("display", "block");
//
//		var vid = document.getElementsByTagName('video')[1]; 
//		vid.play(); 
//
//		var videoend = function(){
//        	$("#wow").fadeOut();
//        	$("#wow").attr("muted", "true");
//    	};
//
//    	setTimeout(videoend, 4500);
//	});
//
//	$("#yellow3").click(function(){
//		$("body").css("background-color", "#FFFD00");
//		$("body").addClass('transition');
//		$("#zone_chat strong").css({
//			"color": '#fff',
//			"background-color": '#FFFD00'
//		});
//	});
//
//	/* wow */
//	$("#yellow4").click(function(){
//		$("body").css("background-color", "#403F00");
//		$("body").addClass('transition');
//		$("#zone_chat strong").css({
//			"color": '#fff',
//			"background-color": '#403F00'
//		});
//
//		$("#wow").css("display", "block");
//
//		var vid = document.getElementsByTagName('video')[1]; 
//		vid.play(); 
//
//		var videoend = function(){
//        	$("#wow").fadeOut();
//        	$("#wow").attr("muted", "true");
//    	};
//
//    	setTimeout(videoend, 4500);
//	});
//
//	$("#yellow5").click(function(){
//		$("body").css("background-color", "#E5E300");
//		$("body").addClass('transition');
//		$("#zone_chat strong").css({
//			"color": '#fff',
//			"background-color": '#E5E300'
//		});
//	});


	/* SHOW EMOJIS */

    $("#addemojis img").click(function() {

    	if ($("#emojis").hasClass("unclicked")) {
    		$("#emojis").show(300);
    		$("#emojis").removeClass("unclicked").addClass("clicked");
    	} else if ($("#emojis").hasClass('clicked')) {
			$("#emojis").hide(300);
			$("#emojis").removeClass('clicked').addClass('unclicked');
    	}
    });

    /* SEND IMAGE */

    var image = function() {
    	var chat = document.getElementById('#zone_chat');
    	var image = document.getElementById('#file-input');
    	var input = document.getElementById('#message');

    };

    /* SEND EMOJIS */

    $(".emoji-list li").click(function () {
        var message = $('#message').val();
        $('#message').val(message + ' ' + $(this).text() + ' ').focus();
        
    });

});
