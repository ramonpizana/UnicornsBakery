//document.getElementById("crear").addEventListener('click', crear);

function crear(){
    verifyUsers();
    let email =   document.getElementById("email").value;
    let user =   document.getElementById("user").value;  
    let password =   document.getElementById("password").value;  
    let confirmPassword =   document.getElementById("confirmPassword").value;
  
   var newRegis ={
       email:email,
       user:user,
       password:password,
   };


   if(user == ""){
    M.toast({html: 'Debes introducir un usuario', classes: 'rounded'});
    return
   }

   if(password == ""){
        M.toast({html: 'Debes introducir una contraseña', classes: 'rounded'});
        return
       }

    if(password.length < 8){
        M.toast({html: 'Tu contraseña debe ser mayor a 8 caracteres', classes: 'rounded'});
        return
    } 


   if(password != confirmPassword){
    M.toast({html: 'tus constraseñas no coinciden', classes: 'rounded'});
     return  
    } 


    var regisToJson =JSON.stringify(newRegis);
    console.log(regisToJson)

    localStorage.setItem('user',JSON.stringify(newRegis))
  
}

function verifyUsers(){
    if (!localStorage.getItem('users')){
        localStorage.setItem('users','{0:{email:admin@root.com,user:root,password:admin}}')
    }
}

function cancelar(){
    document.getElementById("email").value="";
    document.getElementById("user").value="";  
    document.getElementById("password").value="";  
    document.getElementById("confirmPassword").value="";
    

}


  /*localStorage.setItem("email",email);
    localStorage.setItem("user",user);
    localStorage.setItem("password",btoa(password));*/


/*var newProduct = {
    productName: productName,
    productDescription: productDescription,
    productImage: productImage
  };
  var prodcutJson = JSON.stringify(newProduct);
  console.log(prodcutJson);*/
  