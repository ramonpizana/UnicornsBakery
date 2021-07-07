function login (){
  
  let emailLogin =   document.getElementById("emailLogin").value;
  let passwordLogin =   document.getElementById("passwordLogin").value;  

   var usersLogin={
    emailLogin:emailLogin,
    passwordLogin:passwordLogin
  } 
  /*if(emailLogin == ""){
    M.toast({html: 'Debes introducir un usuario', classes: 'rounded'});
    return
   }

   if(passwordLogin == ""){
    M.toast({html: 'Debes introducir una contraseña', classes: 'rounded'});
    return
   }*/

   localStorage.setItem('userLogin',JSON.stringify({0:{emailLogin:'',passwordLogin:''}))

  var traerLogin = JSON.parse(localStorage.getItem('usersLogin'));
 var keysLogin = Object.keys(traerLogin);


 for(let i = 0;i<keysLogin.length;i++){
if(usersLogin.emailLogin!=traerLogin[i] ||  usersLogin.passwordLogin==traerLogin[i]){
  alert("Hola")
}
 }






 /*for(let i = 0;i<keysLogin.length;i++){
     if(usersLogin.emailLogin!=traerLogin[i].email ||  usersLogin.passwordLogin!=traerLogin[i].password){
        M.toast({html: 'Ese usuario no existe',classes: 'rounded'});
        return
    }*/
    
 
 traerLogin[keysLogin.length]=usersLogin;

 var regisToJson = JSON.stringify(traerLogin);
 localStorage.setItem('users',regisToJson);
}