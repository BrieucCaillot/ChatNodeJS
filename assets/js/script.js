jQuery(document).ready(function($) {

	/* BACKGROUND COLOR */

	$("#blue1").click(function(){
		$("body").css("background-color", "#0053BF");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": '#0053BF'
		});
	});

	/* wow*/
	$("#blue2").click(function(){
		$("body").css("background-color", "#00377F");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": '#00377F'
		});

		$("#wow").css("display", "block");

		var vid = document.getElementsByTagName('video')[1]; 
		vid.play(); 

		var videoend = function(){
        	$("#wow").fadeOut();
        	$("#wow").attr("muted", "true");
    	};

    	setTimeout(videoend, 4500);
	});

	$("#blue3").click(function(){
		$("body").css("background-color", "#006EFF");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": '#006EFF'
		});
	});

	/* dorian */
	$("#blue4").click(function(){
		$("body").css("background-color", "#001C40");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": '#001C40'
		});

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

	$("#blue5").click(function(){
		$("body").css("background-color", "#0063E5");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": '#0063E5'
		});
	});

	/* hommevert */
	$("#orange1").click(function(){
		$("body").css("background-color", "#BF7A00");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": '#BF7A00'
		});

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


	$("#orange2").click(function(){
		$("body").css("background-color", "#7F5100");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": '#7F5100'
		});
	});

	/* okay */
	$("#orange3").click(function(){
		$("body").css("background-color", "#FFA300");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": '#FFA300'
		});

		$("#okay").css("display", "block");

		var vid = document.getElementsByTagName('video')[2]; 
		vid.play(); 

		var videoend = function(){
        	$("#okay").fadeOut();
        	$("#okay").attr("muted", "true");
    	};

    	setTimeout(videoend, 5000);

   
		
	});

	$("#orange4").click(function(){
		$("body").css("background-color", "#402900");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": '#7F5100'
		});
	});

	/* misterv2 */
	$("#orange5").click(function(){
		$("body").css("background-color", "#E59200");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": '#E59200'
		});

		$("#mv2").css("display", "block");

		var vid = document.getElementsByTagName('video')[5]; 
		vid.play(); 

		var videoend = function(){
        	$("#mv2").fadeOut();
        	$("#mv2").attr("muted", "true");
    	};

    	setTimeout(videoend, 8000);
	});

	$("#red1").click(function(){
		$("body").css("background-color", "#BF0004");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": '#E59200'
		});
	});

	/* misterv3 */
	$("#red2").click(function(){
		$("body").css("background-color", "#7F0002");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": '#E59200'
		});

		$("#mv3").css("display", "block");

		var vid = document.getElementsByTagName('video')[6]; 
		vid.play(); 

		var videoend = function(){
        	$("#mv3").fadeOut();
        	$("#mv3").attr("muted", "true");
    	};

    	setTimeout(videoend, 10000);
	});

	$("#red3").click(function(){
		$("body").css("background-color", "#FF0005");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": '#FF0005'
		});
	});

	/* misterv 4 */
	$("#red4").click(function(){
		$("body").css("background-color", "#400001");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": '#400001'
		});

		$("#mv4").css("display", "block");

		var vid = document.getElementsByTagName('video')[7]; 
		vid.play(); 

		var videoend = function(){
        	$("#mv4").fadeOut();
        	$("#mv4").attr("muted", "true");
    	};

    	setTimeout(videoend, 28000);
	});

	$("#red5").click(function(){
		$("body").css("background-color", "#E50004");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": '#E50004'
		});
	});

	/* misterv 5 */ 
	$("#green1").click(function(){
		$("body").css("background-color", "#00BF6C");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": '#00BF6C'
		});

		$("#mv5").css("display", "block");

		var vid = document.getElementsByTagName('video')[8]; 
		vid.play(); 

		var videoend = function(){
        	$("#mv5").fadeOut();
        	$("#mv5").attr("muted", "true");
    	};

    	setTimeout(videoend, 10000);
	});

	$("#green2").click(function(){
		$("body").css("background-color", "#007F48");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": '#007F48'
		});
	});

	/* misterv 1 */
	$("#green3").click(function(){
		$("body").css("background-color", "#00FF90");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": '#00FF90'
		});

		$("#mv1").css("display", "block");

		var vid = document.getElementsByTagName('video')[4]; 
		vid.play(); 

		var videoend = function(){
        	$("#mv1").fadeOut();
        	$("#mv1").attr("muted", "true");
    	};

    	setTimeout(videoend, 10000);
	});

	$("#green4").click(function(){
		$("body").css("background-color", "#004024");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": '#004024'
		});
	});

	/* wow */
	$("#green5").click(function(){
		$("body").css("background-color", "#00E581");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": '#004024'
		});

		$("#wow").css("display", "block");

		var vid = document.getElementsByTagName('video')[1]; 
		vid.play(); 

		var videoend = function(){
        	$("#wow").fadeOut();
        	$("#wow").attr("muted", "true");
    	};

    	setTimeout(videoend, 4500);
	});

	$("#yellow1").click(function(){
		$("body").css("background-color", "#BFBD00");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": '#BFBD00'
		});
	});

	/* wow */
	$("#yellow2").click(function(){
		$("body").css("background-color", "#7F7E00");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": '#7F7E00'
		});

		$("#wow").css("display", "block");

		var vid = document.getElementsByTagName('video')[1]; 
		vid.play(); 

		var videoend = function(){
        	$("#wow").fadeOut();
        	$("#wow").attr("muted", "true");
    	};

    	setTimeout(videoend, 4500);
	});

	$("#yellow3").click(function(){
		$("body").css("background-color", "#FFFD00");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": '#FFFD00'
		});
	});

	/* wow */
	$("#yellow4").click(function(){
		$("body").css("background-color", "#403F00");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": '#403F00'
		});

		$("#wow").css("display", "block");

		var vid = document.getElementsByTagName('video')[1]; 
		vid.play(); 

		var videoend = function(){
        	$("#wow").fadeOut();
        	$("#wow").attr("muted", "true");
    	};

    	setTimeout(videoend, 4500);
	});

	$("#yellow5").click(function(){
		$("body").css("background-color", "#E5E300");
		$("body").addClass('transition');
		$("#zone_chat strong").css({
			"color": '#fff',
			"background-color": '#E5E300'
		});
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

    $("#emoji1").click(function () {
        var img = $('#emoji1').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji2").click(function () {
        var img = $('#emoji2').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji3").click(function () {
        var img = $('#emoji3').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji4").click(function () {
        var img = $('#emoji4').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji5").click(function () {
        var img = $('#emoji5').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji6").click(function () {
        var img = $('#emoji6').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji7").click(function () {
        var img = $('#emoji7').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();

    });

    $("#emoji8").click(function () {
        var img = $('#emoji8').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji9").click(function () {
        var img = $('#emoji9').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji10").click(function () {
        var img = $('#emoji10').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji11").click(function () {
        var img = $('#emoji11').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji12").click(function () {
        var img = $('#emoji12').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji13").click(function () {
        var img = $('#emoji13').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji14").click(function () {
        var img = $('#emoji14').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji15").click(function () {
        var img = $('#emoji15').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji16").click(function () {
        var img = $('#emoji16').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji17").click(function () {
        var img = $('#emoji17').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji18").click(function () {
        var img = $('#emoji18').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji19").click(function () {
        var img = $('#emoji19').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji20").click(function () {
        var img = $('#emoji20').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji21").click(function () {
        var img = $('#emoji21').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji22").click(function () {
        var img = $('#emoji22').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji23").click(function () {
        var img = $('#emoji23').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji24").click(function () {
        var img = $('#emoji24').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji25").click(function () {
        var img = $('#emoji25').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji26").click(function () {
        var img = $('#emoji26').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji27").click(function () {
        var img = $('#emoji27').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji28").click(function () {
        var img = $('#emoji28').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji29").click(function () {
        var img = $('#emoji29').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji30").click(function () {
        var img = $('#emoji30').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji31").click(function () {
        var img = $('#emoji31').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji32").click(function () {
        var img = $('#emoji32').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji33").click(function () {
        var img = $('#emoji33').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji34").click(function () {
        var img = $('#emoji34').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji35").click(function () {
        var img = $('#emoji35').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji36").click(function () {
        var img = $('#emoji36').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji37").click(function () {
        var img = $('#emoji37').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji38").click(function () {
        var img = $('#emoji38').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji39").click(function () {
        var img = $('#emoji39').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji40").click(function () {
        var img = $('#emoji40').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji41").click(function () {
        var img = $('#emoji41').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji42").click(function () {
        var img = $('#emoji42').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji43").click(function () {
        var img = $('#emoji26').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji44").click(function () {
        var img = $('#emoji44').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji45").click(function () {
        var img = $('#emoji45').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji46").click(function () {
        var img = $('#emoji46').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji47").click(function () {
        var img = $('#emoji47').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji48").click(function () {
        var img = $('#emoji48').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji49").click(function () {
        var img = $('#emoji49').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });

    $("#emoji50").click(function () {
        var img = $('#emoji50').find('img');
        var smiley = img[0].outerHTML;
        var message = $('#message').val();
        $('#message').val(message + ' ' + smiley + ' ').focus();
        $('#message').submit();
    });


});
