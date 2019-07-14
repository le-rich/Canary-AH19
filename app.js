const express = require('express');
const app = express();
app.use(express.static(__dirname));
app.use(express.static(__dirname + 'css'));

const port = 8080;

app.get('/', function (req, res){
	res.sendFile(__dirname + 'index.html');
});


app.listen(port, function(){
	console.log("Listening on port " + port);
});