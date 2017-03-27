var express = require('express'); 
var app = express();
var port = 1337;

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

app.listen(port, function(){
	console.log('lol');
});






