var express = require('express'); 
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = 1337;

io.on('connection', function(socket){
	console.log('new socket');

	/*socket.on('message', function(data){
		console.log('Server : new event \'test\' received with value');
		console.log(data);

		socket.emit('response', {
			success : true,
			message : data.msg,
			timestamp_received : data.timestamp,
			timestamp_sent : new Date().getTime(),
			response : 'hello'
		});
	});*/

	socket.on('message', function(message){
		console.log('received', message);
		io.emit('newmessage', message);
	});
});

app.use('/static/css', express.static(__dirname + '/assets/css'));
app.use('/static/js', express.static(__dirname + '/assets/js'));
app.use('/static/fonts', express.static(__dirname + '/assets/fonts'));
app.use('/static/images', express.static(__dirname + '/assets/images'));

app.get('/index', function(req, res){
	res.sendFile(__dirname + '/html/index.html');
});

app.get('/contact', function(req, res){
	res.sendFile(__dirname + '/html/contact.html');
});

app.get('/', function(req, res){
	res.sendFile(__dirname + '/html/socket.html');
});

server.listen(1337);
	console.log('Server listening on port 1337');








