const express = require('express');
const app = express();
app.use(express.static(__dirname));
app.use(express.static(__dirname + 'css'));
app.use(express.static(__dirname + 'js'));


const port = 8080;

app.get('/', function (req, res){
	res.sendFile(__dirname + '\\richardIndex.html');
});
app.get('/login.html', function (req, res){
	res.sendFile(__dirname + '\\login.html');
});


app.listen(port, function(){
	console.log("Listening on port " + port);
});
