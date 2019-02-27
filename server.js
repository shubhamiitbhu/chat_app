var express = require('express');
var socket = require('socket.io');
var app = express();
var http = require('http');
var server = app.listen(3000, function() {console.log('Server is running on PORT 3000');});
const mongo=require('mongodb').MongoClient;
const client = socket(server);
var mongoose = require('mongoose');
//express
app.use(express.static('public'));

connections= [];


//mongodb connection

mongoose.connect('mongodb://127.0.0.1/chatapp', function(err, db){
    if(err){
        throw err;
    }

    console.log('MongoDB connected...');

    // Connect to Socket.io
    client.on('connection', function(socket){
        let chat = db.collection('chats');

        
        // Get chats from mongo collection
        chat.find().limit(100).sort({_id:1}).toArray(function(err, res){
            if(err){
                throw err;
            }

            // Emit the messages
            socket.emit('output', res);
        });

        // Handle input events
        socket.on('chat', function(data){
            let handle = data.handle;
            let message = data.message;

            
                chat.insert({handle: handle, message: message}, function(){
                    client.emit('output', [data]);

                    
                });
            });

         socket.on('user', function(data){
            
            

                    client.emit('user', data);

                    
                });
            

        });
});