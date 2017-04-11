var socket = io('http://localhost:1337');

socket.on('connect', function(){
	console.log(socket.id);
});

socket.on('response', function(data){
	console.log('Client: Response received:');
	console.log(data);
});

socket.on('newmessage', function(newmessage){
	console.log('New message :', newmessage);

	var li = document.createElement('li');
	li.innerHTML = newmessage;

	document.getElementsByTagName('ul')[0].appendChild(li);
});

function sendmessage(){
   var input = document.getElementsByTagName('input')[0];
   
   if (input.value.length <= 0){
       return alert('Please write something');
   }

   socket.emit('message', input.value);
   input.value = '';
}

/*$(document).ready(function chatAccess() {
    $("body").css("overflow-y", "hidden");
    
    var hideLogInput = function(){
        $("#logInput").fadeOut();
        $("body").css("overflow-y", "visible");
    };

    setTimeout(hideLogInput, 1000);

    var hidelog = function(){
        $("#log").fadeOut();
    };

    setTimeout(hidelog, 1000);
    
    
    
});*/

document.addEventListener('keydown', function(e){
   if (e.keyCode == 13){
       sendmessage();
   }
});

document.getElementsByTagName('button')[0].addEventListener('click', sendmessage);


