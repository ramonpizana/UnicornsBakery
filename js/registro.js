document.getElementById("crear").addEventListener("click", crear);

function crear(){
    let email =   document.getElementById("email").value;
    let user =   document.getElementById("user").value;  
    let password =   document.getElementById("password").value;  
    let confirmPassword =   document.getElementById("confirmPassword").value;
    if(password != confirmPassword){
     alert('tus constraseñas no coinciden') 
     return false;
    }
   
    localStorage.setItem("email",email);
    localStorage.setItem("user",user);
    localStorage.setItem("password",btoa(password));
}

function cancelar(){
    document.getElementById("email").value="";
    document.getElementById("user").value="";  
    document.getElementById("password").value="";  
    document.getElementById("confirmPassword").value="";
    

}