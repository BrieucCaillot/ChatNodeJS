var express = require('express'); 
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = 1337;

io.on('connection', function(socket){
	console.log('new socket');

	socket.on('message', function(message){
		console.log('received', message);
		io.emit('newmessage', message);
	});
});

app.use('/static/css', express.static(__dirname + '/assets/css'));
app.use('/static/js', express.static(__dirname + '/assets/js'));
app.use('/static/fonts', express.static(__dirname + '/assets/fonts'));
app.use('/static/images', express.static(__dirname + '/assets/images'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

server.listen(1337);
	console.log('Server listening on port 1337');