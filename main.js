function go() {

var gonumber1 = document.getElementById("number1").value;
var gonumber2 = parseInt(document.getElementById("number2").value);


  


  if ( gonumber2 < 0 ){
  alert("-1");
  }   
  
  else if(gonumber1.length < gonumber2){
    alert("0");

  }  else {
    alert (gonumber1[gonumber1.length-gonumber2]);
  }
  }
