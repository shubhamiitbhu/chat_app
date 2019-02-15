var express = require('express');
var socket = require('socket.io');
var app = express();
var http = require('http');
var server = app.listen(3000, function() {console.log('Server is running on PORT 3000');});


app.use(express.static('public'));

var io = socket(server);

io.on('connection', function(socket){
	console.log('Made socket connection ', socket.id);
});
