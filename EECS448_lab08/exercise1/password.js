function validatePassword(){
  let firstPassword = document.getElementById("password").value;
  let secondPassword = document.getElementById("verifyPassword").value;

  if(firstPassword.length < 8){
    alert("your password has less than eight characters");
  } 
  else if(firstPassword.localeCompare(secondPassword) != 0){
    alert("your passwords don't match");
  }
}
