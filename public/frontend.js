function readonly() {


  var hand = document.getElementById("handle");
  if(hand.value)
  {
  	hand.readOnly = true;
  }
  else
  {
  	alert("Please enter username before clicking on Join button")
  }
  
}

