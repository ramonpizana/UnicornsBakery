function validate_data(){
    let numero = parseInt(document.getElementById("icon_telephone").value);
    if(isNaN(numero)){
        alert("El telefono debe ser numerico");
        return;
    }
}