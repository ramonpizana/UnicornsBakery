//document.getElementById("crear").addEventListener('click', crear);

function crear(){
    let email =   document.getElementById("email").value;
    let user =   document.getElementById("user").value;  
    let password =   document.getElementById("password").value;  
    let confirmPassword =   document.getElementById("confirmPassword").value;
  
   var newRegis ={
       email:email,
       user:user,
       password:password,
   };

   if(password != confirmPassword){
    alert('tus constraseñas no coinciden') 
    return false;
   } else {
    var regisToJson =JSON.stringify(newRegis);
    console.log(regisToJson)
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
  