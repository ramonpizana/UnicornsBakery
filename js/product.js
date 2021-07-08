//const { json } = require("body-parser");

window.onload=addItem();
function addItem(){
  var items = JSON.parse(localStorage.getItem("newProduct"));
var keysProduct = Object.keys(items);
  for(let i = 0; i < keysProduct.length;i++){
  const itemHTML =   '<div class="producto">\n'+
 ' <img class="imgProducto" src="/rsrcs/productos/'+items[i].productImage+'" alt="">\n'+
 ' <h5>'+items[i].productName+'</h5>\n'+
 ' <p>'+items[i].productDescription+'</p>\n'+
 '   </div>\n';
  const itemsContainer = document.getElementById("newProducts");
  itemsContainer.innerHTML += itemHTML;
}
} 
function submitProduct() {
  verifyProducts();
  var allowedExtension = ['jpeg', 'jpg', 'png'];
  var fileExtension = document.getElementById('validateProductImage').value.split('.').pop().toLowerCase();
  var isValidFile = false;

  for (var index in allowedExtension) {

    if (fileExtension === allowedExtension[index]) {
      isValidFile = true;
      var productName = document.getElementById("productName").value;
      var productDescription = document.getElementById("productDescription").value;
      var productImage = document.getElementById("validateProductImage").value;

      /*var prodcutJson = JSON.stringify(newProduct);
      addItem({'productName':productName,
  'productImage':productImage,
  'productDescription':productDescription});
  
      console.log(prodcutJson);*/
    var newProducts = {
      productName:productName,
      productDescription:productDescription,
      productImage:productImage
    };
    
var traerProduct = JSON.parse(localStorage.getItem('newProduct'));
 var keysProduct = Object.keys(traerProduct);
 
 for(let i = 0; i < keysProduct.length;i++){
     if( newProducts.productName == traerProduct[i].productName){
        M.toast({html: 'Este producto ya existe',classes: 'rounded'});
        return
    }
 }

     traerProduct[keysProduct.length]=newProducts;

//  console.log(traer);
var productToJson = JSON.stringify(traerProduct);
localStorage.setItem('newProduct',productToJson);



      break;
    }
  }

  if (!isValidFile) {
    alert('Solo permite extensiones de tipo : *.' + allowedExtension.join(', *.'));
  }

  return isValidFile;

}
function verifyProducts(){
  if(!localStorage.getItem('newProduct')){
    localStorage.setItem('newProduct',JSON.stringify({}));
  }
}


//0:{productName:'Pay',productDescription:'un pay',productImage:'/rsrcs/productos/pay.jpg'}








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

