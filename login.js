function login(){
  let getEmail = document.getElementById('email');
document.getElementById("credentials").innerHTML = ' EmailId: ' + getEmail.value;
return false;
}