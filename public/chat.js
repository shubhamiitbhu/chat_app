
var socket = io.connect('http://localhost:3000');
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var join = document.getElementById('join');
var connects = document.getElementById('connects');


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
		handle: handle.value

	});
});



socket.on('user', function(data){



	output.innerHTML +=  '<p style="text-align:center; background-color: white; padding:10px; border: 1px solid white;">'+ '<strong>'+data.handle+'</strong>' + ' joined the chat' + '</p>';
    

});



socket.on('chat', function(data){

	

	output.innerHTML += ' <div id="bubble" > <p>' + '<div id="textmessage" >'+ '<strong>'+ data.handle  +'</strong><hr />'+ data.message + '</div>' + '</p><br /></div>';
   

});




