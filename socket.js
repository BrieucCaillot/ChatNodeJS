var express = require('express'); 
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var ent = require('ent');
var port = 1337;
var fs = require('fs');

app.use('/static/css', express.static(__dirname + '/assets/css'));
app.use('/static/js', express.static(__dirname + '/assets/js'));
app.use('/static/fonts', express.static(__dirname + '/assets/fonts'));
app.use('/static/images', express.static(__dirname + '/assets/images'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket, pseudo) {
    
    socket.on('nouveau_client', function(pseudo) {
        pseudo = ent.encode(pseudo);
        socket.pseudo = pseudo;
        socket.broadcast.emit('nouveau_client', pseudo);
    });

    socket.on('message', function (message) {
        message = ent.encode(message);
        socket.broadcast.emit('message', {pseudo: socket.pseudo, message: message});
    }); 
});

server.listen(port);
	console.log('Server listening on port' + port);








