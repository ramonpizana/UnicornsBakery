function login (){
  verifyUsers()
  let emailLogin =   document.getElementById("emailLogin").value;
  let passwordLogin =   document.getElementById("passwordLogin").value;  

 
 if(emailLogin == ""){
    M.toast({html: 'Debes introducir un usuario', classes: 'rounded'});
    return
   }

   if(passwordLogin == ""){
    M.toast({html: 'Debes introducir una contraseña', classes: 'rounded'});
    return
   }

  var traerLogin = JSON.parse(localStorage.getItem('users'));
 var keysLogin = Object.keys(traerLogin);


 for(let i = 0;i<keysLogin.length;i++){
if(emailLogin==traerLogin[i].email &&  passwordLogin==traerLogin[i].password){
        return location.href="/html/home.html"; 
        
}
 }
 M.toast({html: 'Usuario o Contraseña incorrecto', classes: 'rounded'});

}

function verifyUsers(){
  if (!localStorage.getItem('users')){
      localStorage.setItem('users',JSON.stringify({0:{email:'admin@root.com',user:'root',password:'admin'}}))
  }
}

