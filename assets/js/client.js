var socket = io('http://localhost:1337');

socket.on('connect', function(){
	console.log(socket.id);
});

socket.on('response', function(data){
	console.log('Client: Response received:');
	console.log(data);
});

/* INPUT NAME */ 

/*socket.on('newname', function(newname){
    console.log('name', newname);  

    var p = document.createElement('p');
    p.innerHTML = newname;
 
    document.getElementById('chat').appendChild(p);
});

function sendname(){
   var input = document.getElementById('name');
   
   console.log(input.value);
   
   if (input.value.length <= 0){
       return alert('Please write something');
   }

   socket.emit('name', input.value);
   input.value = ' ';
}

document.addEventListener('keydown', function(alt){
   if (alt.keyCode == 18){
       sendname();
   }
});

document.getElementsByTagName('button')[0].addEventListener('click', sendname);*/



/* SEND MESSAGE */

socket.on('newmessage', function(newmessage){
	console.log('newmessage', newmessage);

	var li = document.createElement('li');
	li.innerHTML = newmessage;

    var firstname = document.getElementById('name');

	document.getElementsByTagName('ul')[0].appendChild(li);
});

function sendmessage(){
   var input = document.getElementById('message');
   
   console.log(input.value);
   
   if (input.value.length <= 0){
       return alert('Please write something');
   }

   socket.emit('message', firstname.value + input.value);
   input.value = ' ';
}

document.addEventListener('keydown', function(enter){
   if (enter.keyCode == 13){
       sendmessage();
   }
});

document.getElementsByTagName('button')[0].addEventListener('click', sendmessage);


