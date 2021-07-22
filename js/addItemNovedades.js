function addItem(item){
  const itemHTML =   '<div class="producto">\n'+
 ' <img class="imgProducto" src="'+item.img+'" alt="">\n'+
 ' <h5>'+item.name+'</h5>\n'+
 ' <p>'+item.description+'</p>\n'+
 '   </div>\n';
  const itemsContainer = document.getElementById("list-itemsN");
  itemsContainer.innerHTML += itemHTML;
}

  addItem({'name':'Macarron',
  'img':'/rsrcs/productos/maca.jpg',
  'description':'Suave pastelillo conformado de dos dulces galletas con una deliciosa crema casera en medio.'});

  addItem({'name':'Tarta',
  'img':'/rsrcs/productos/tarta.jpg',
  'description':'Fina corteza de masa horneada rellena con crema pastelera y fresas orgánicas, ligeramente glaseadas.'});

  addItem({'name':'Pay',
  'img':'/rsrcs/productos/pay.jpg',
  'description':'Fina base de galleta molida, con relleno de queso crema y un ligero toque de limon cubierta con frutos de temporada.'});

  a