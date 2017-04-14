var socket = io('http://localhost:1337');

socket.on('connect', function(){
	console.log(socket.id);
});

socket.on('response', function(data){
	console.log('Client: Response received:');
	console.log(data);
});




/* INPUT NAME */ 

socket.on('newname', function(newname){
    console.log('newname', newname);

    var li = document.createElement('li');
    li.innerHTML = newname;

    document.getElementsByTagName('ul')[0].appendChild(li);
});

function sendname(){
   var inputname = document.getElementById('name');
   
   console.log(inputname.value);
   
   if (inputname.value.length <= 0){
       return alert('Please write your name');
   }

   socket.emit('newname', inputname.value);
   inputname.value = ' ';
}

document.addEventListener('keydownname', function(enter){
   if (enter.keyCode == 13){
       sendname();
   }
});

document.getElementsByTagName('button')[0].addEventListener('click', sendname);


/* SEND MESSAGE */

socket.on('newmessage', function(newmessage){
	console.log('newmessage', newmessage);

	var li = document.createElement('li');
	li.innerHTML = newmessage;

	document.getElementsByTagName('ul')[0].appendChild(li);
});

function sendmessage(){
   var inputmessage = document.getElementById('message');
   
   console.log(inputmessage.value);
   
   if (inputmessage.value.length <= 0){
       return alert('Please write your message');
   }

   socket.emit('newmessage', inputmessage.value);
   inputmessage.value = ' ';
}

document.addEventListener('keydownmessage', function(enter){
   if (enter.keyCode == 13){
       sendmessage();
   }
});

document.getElementsByTagName('button')[1].addEventListener('click', sendmessage);


