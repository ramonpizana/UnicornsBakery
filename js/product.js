function submitProduct() {
  var allowedExtension = ['jpeg', 'jpg', 'png'];
  var fileExtension = document.getElementById('validateProductImage').value.split('.').pop().toLowerCase();
  var isValidFile = false;

  for (var index in allowedExtension) {

    if (fileExtension === allowedExtension[index]) {
      isValidFile = true;
      var productName = document.getElementById("productName").value;
      var productDescription = document.getElementById("productDescription").value;
      var productImage = document.getElementById("productImage").value;

      var newProduct = {
        productName: productName,
        productDescription: productDescription,
        productImage: productImage
      };
      var prodcutJson = JSON.stringify(newProduct);
      console.log(prodcutJson);
      break;
    }
  }

  if (!isValidFile) {
    alert('Solo permite extensiones de tipo : *.' + allowedExtension.join(', *.'));
  }

  return isValidFile;

}











/* function submitProduct(){
  var C = document.getElementById("productImage").value
  if(!(C.contains(".png") || C.contains(".jpg") || C.contains(".jpeg"))){
    console.log("Formato no permitido")
  } */







/* var C = document.getElementById("validateProductImage").value;
console.log(validateProductImage);
if ( !(validateProductImage.contains(".png") || validateProductImage.contains(".jpg") || validateProductImage.contains(".jpeg"))){
  console.log("Formato no permitido")
  return;
} */




// Creacion de objeto - formato JSO
/* var productName = document.getElementById("productName").value;
var productDescription = document.getElementById("productDescription").value;
var productImage = document.getElementById("productImage").value;

var newProduct = {
  productName:productName,
  productDescription:productDescription,
  productImage:productImage
};
var prodcutJson = JSON.stringify(newProduct);
console.log(prodcutJson); */

