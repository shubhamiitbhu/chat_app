
var socket = io.connect('http://localhost:3000');
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var join = document.getElementById('join');



// ES6

//emit


btn.addEventListener('click', function(){

	if(handle.value && message.value)
	{
	socket.emit('chat', {
		handle: handle.value,
		message: message.value,
		
	});}

else
{
	if(handle.value)
	{alert("Please enter the message");}
    else 
    {
    	alert("Please enter your Username")
    }
   
}

});


join.addEventListener('click', function(){

	socket.emit('user', {
		handle: handle.value,
	});
});



socket.on('user', function(data){



	joinNotification.innerHTML += '<p>'+ data.handle + ' joined the chat' + '</p>';
    

});


socket.on('chat', function(data){

	

	output.innerHTML += '<div id="bubble"> <p>' + '</strong>'  + '<div id="textmessage" >'+ '<strong>'+ data.handle +'</strong><hr />'+ data.message + '</div>' + '</p><br /></div>';
    

});



