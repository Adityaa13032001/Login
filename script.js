

var btnLogin = document.getElementById('do-login');
var idLogin = document.getElementById('login');
var username = document.getElementById('username');
var pass = document.getElementById('pass');

btnLogin.onclick = function(){
  if(username.value===''|| pass.value==''){
    window.alert("Please Enter User Credentials");
  }else{
    idLogin.innerHTML = '<p>We\'re happy to see you again, </p><h1>' +'Welcome '+username.value+ '</h1>';
  }


  
}