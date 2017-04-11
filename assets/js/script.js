var socket = io('https://chatnodejs-betournator.c9users.io/');

socket.on('connect', function(){
	console.log(socket.id);
});

socket.on('response', function(data){
	console.log('Client: Response received:');
	console.log(data);
});

socket.on('newmessage', function(newmessage){
	console.log('newmessage', newmessage);

	var li = document.createElement('li');
	li.innerHTML = newmessage;

	document.getElementsByTagName('ul')[0].appendChild(li);
});

function sendmessage(){
   var input = document.getElementsByTagName('input')[0];
   
   console.log(input.value);
   
   if (input.value.length <= 0){
       return alert('Please write something');
   }

   socket.emit('message', input.value);
   input.value = ' ';
}

document.addEventListener('keydown', function(e){
   if (e.keyCode == 13){
       sendmessage();
   }
});

document.getElementsByTagName('button')[0].addEventListener('click', sendmessage);

