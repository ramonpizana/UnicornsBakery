function login (){
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

   var traer = JSON.parse(localStorage.getItem('users'));
 var keys = Object.keys(traer);
 
 for(let i = 0;i<keys.length;i++){
     if(newRegis.email==traer[i].email ||  newRegis.user==traer[i].user){
        M.toast({html: 'Ese usuario ya existe',classes: 'rounded'});
        return
    }
 }










 
}

