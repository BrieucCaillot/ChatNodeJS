var socket = io.connect('http://localhost:1337');

var pseudo = prompt('Quel est votre pseudo ?');
    while (pseudo == null) {
        var pseudo = prompt('Rentrez votre pseudo.');
}

socket.on('message', function(data) {
    insereMessage(data.pseudo, data.message);
})

socket.on('nouveau_client', function(pseudo) {
    $('#zone_chat').append('<p><em>' + pseudo + ' a rejoint le Chat !</em></p>');
})

$('#formulaire_chat').submit(function () {
    var message = $('#message').val();
    socket.emit('message', message); 
    insereMessage(pseudo, message); 
    $('#message').val('').focus(); 
    return false; 
});

function insereMessage(pseudo, message) {
    $('#zone_chat ul').append('<li><strong>' + pseudo + '</strong> ' + " : " + message + '</li>');
   
    $('#zone_chat').scrollTop($('#zone_chat')[0].scrollHeight);
}