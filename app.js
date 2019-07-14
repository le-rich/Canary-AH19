const express = require('express');
const fs = require('fs');
const io = require('socket.io')(3000, {
	serveClient: true,
});
const app = express();
app.use(express.static(__dirname));
app.use(express.static(__dirname + 'css'));
app.use(express.static(__dirname + 'js'));


const port = 8080;

app.get('/', function (req, res){
	res.sendFile(__dirname + '\\index.html');
});
app.get('/login.html', function (req, res){
	res.sendFile(__dirname + '\\login.html');
});

io.sockets.on('connection', function(socket) {
    socket.on('send_message', function(data) {
    data.message = data.message + ' yo<br/>';
    socket.broadcast.emit('get_message',data);
    });
});

app.listen(port, function(){
	console.log("Listening on port " + port);
});
