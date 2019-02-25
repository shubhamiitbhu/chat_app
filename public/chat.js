var socket = io.connect('http://localhost:3000');
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');


//emit
handle.addEventListener('keyup',function(e){
	if(e.keyCode===13)
	{if(message.value && handle.value)
	{
	socket.emit('chat', {
		message: message.value,
		handle: handle.value
	});}

else
{
	noti.innerHTML = '<p>' + 'ERROR! : ' + 'No message or Handle found' + '</p>';
}}

});


message.addEventListener('keyup',function(e){
	if(e.keyCode===13)
	{if(message.value && handle.value)
	{
	socket.emit('chat', {
		message: message.value,
		handle: handle.value
	});}

else
{
	noti.innerHTML = '<p>' + 'ERROR! : ' + 'No message or Handle found' + '</p>';
}}

});



btn.addEventListener('click', function(){

	if(message.value && handle.value)
	{
	socket.emit('chat', {
		message: message.value,
		handle: handle.value
	});}

else
{
	noti.innerHTML = '<p>' + 'ERROR! : ' + 'No message or Handle found' + '</p>';
}

});


socket.on('chat', function(data){

	noti.innerHTML = '<p>' + '</p>';

	output.innerHTML += '<p>' + '<strong>' + '<span id="sb">'+ data.handle+ '</span>'  + '</strong>' + ': ' + '<span id="ssb">' + data.message + '</span>' + '</p>';
    message.value="";
    handle.value="";

});

 



