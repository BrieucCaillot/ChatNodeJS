jQuery(document).ready(function($) {

	/* BACKGROUND COLOR */
    
    $('#stylizing ul li').click(function(){
        var previous = $("body").attr("class");
        var color = $(this).attr("id");
        $("body").removeClass(previous).addClass(color);
    });

	$("#blue2").click(function(){
		$("#wow").css("display", "block");

		var vid = document.getElementsByTagName('video')[1]; 
		vid.play(); 

		var videoend = function(){
       	$("#wow").fadeOut();
       	$("#wow").attr("muted", "true");
   	};

   	setTimeout(videoend, 4500);
	});

	$("#blue4").click(function(){
		$("#dorian").css("display", "block");
		$("#dorian").fadeIn('slow');

		var vid = document.getElementsByTagName('video')[3]; 
		vid.play(); 

		var videoend = function(){
       	$("#dorian").fadeOut();
       	$("#dorian").attr("muted", "true");
   	};

   	setTimeout(videoend, 10000);
	});

	/* hommevert */
	$("#orange1").click(function(){
		$("#hommevert").css("display", "block");
		$("#hommevert").fadeIn('fast');

		var vid = document.getElementsByTagName('video')[0]; 
		vid.play(); 

		var videoend = function(){
       	$("#hommevert").fadeOut();
       	$("#hommevert").attr("muted", "true");
   	};

   	setTimeout(videoend, 4500);
	});

	/* okay */
	$("#orange3").click(function(){
		$("#okay").css("display", "block");

		var vid = document.getElementsByTagName('video')[2]; 
		vid.play(); 

		var videoend = function(){
       	$("#okay").fadeOut();
       	$("#okay").attr("muted", "true");
   	};

   	setTimeout(videoend, 5000);
	});

	/* misterv2 */
	$("#orange5").click(function(){
		$("#mv2").css("display", "block");

		var vid = document.getElementsByTagName('video')[5]; 
		vid.play(); 

		var videoend = function(){
       	$("#mv2").fadeOut();
       	$("#mv2").attr("muted", "true");
   	};

   	setTimeout(videoend, 8000);
	});

	/* misterv3 */
	$("#red2").click(function(){
		$("#mv3").css("display", "block");

		var vid = document.getElementsByTagName('video')[6]; 
		vid.play(); 

		var videoend = function(){
       	$("#mv3").fadeOut();
       	$("#mv3").attr("muted", "true");
   	};

   	setTimeout(videoend, 10000);
	});

	/* misterv 4 */
	$("#red4").click(function(){

		$("#mv4").css("display", "block");

		var vid = document.getElementsByTagName('video')[7]; 
		vid.play(); 

		var videoend = function(){
       	$("#mv4").fadeOut();
       	$("#mv4").attr("muted", "true");
   	};

   	setTimeout(videoend, 28000);
	});


	/* misterv 5 */ 
	$("#green1").click(function(){
		$("#mv5").css("display", "block");

		var vid = document.getElementsByTagName('video')[8]; 
		vid.play(); 

		var videoend = function(){
       	$("#mv5").fadeOut();
       	$("#mv5").attr("muted", "true");
   	};

   	setTimeout(videoend, 10000);
	});


	/* misterv 1 */
	$("#green3").click(function(){
		$("#mv1").css("display", "block");

		var vid = document.getElementsByTagName('video')[4]; 
		vid.play(); 

		var videoend = function(){
       	$("#mv1").fadeOut();
       	$("#mv1").attr("muted", "true");
   	};

   	setTimeout(videoend, 10000);
	});

	/* wow */
	$("#green5").click(function(){
		$("#wow").css("display", "block");

		var vid = document.getElementsByTagName('video')[1]; 
		vid.play(); 

		var videoend = function(){
       	$("#wow").fadeOut();
       	$("#wow").attr("muted", "true");
   	};

   	setTimeout(videoend, 4500);
	});

	/* wow */
	$("#yellow2").click(function(){
		$("#wow").css("display", "block");

		var vid = document.getElementsByTagName('video')[1]; 
		vid.play(); 

		var videoend = function(){
       	$("#wow").fadeOut();
       	$("#wow").attr("muted", "true");
   	};

   	setTimeout(videoend, 4500);
	});

	/* wow */
	$("#yellow4").click(function(){
		$("#wow").css("display", "block");

		var vid = document.getElementsByTagName('video')[1]; 
		vid.play(); 

		var videoend = function(){
       	$("#wow").fadeOut();
       	$("#wow").attr("muted", "true");
   	};

   	setTimeout(videoend, 4500);
	});

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
