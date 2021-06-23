function addItem(item){
  const itemHTML =   '<div class="producto">\n'+
 ' <img class="imgProducto" src="'+item.img+'" alt="">\n'+
 ' <h5>'+item.name+'</h5>\n'+
 ' <p>'+item.description+'</p>\n'+
 '   </div>\n';
  const itemsContainer = document.getElementById("list-items");
  itemsContainer.innerHTML += itemHTML;
}

  addItem({'name':'Macarron',
  'img':'/rsrcs/productos/maca.jpg',
  'description':'chacarron macarron'});

  /*Suave pastelillo conformado de dos dulces galletas con una deliciosa crema casera en medio*/

  addItem({'name':'Tarta',
  'img':'/rsrcs/productos/tarta.jpg',
  'description':'pos una tarta :3'});

  /*Fina corteza de masa horneada rellena con crema pastelera y fresas orgánicas, ligeramente glaseadas*/

  addItem({'name':'Donas',
  'img':'/rsrcs/productos/dona.jpg',
  'description':'el que rellena las donas del centro ta bien rico'});

  /*Masa para bizcocho horneada con glaseado especial y sprinkles decorativos.*/

  addItem({'name':'Pay',
  'img':'/rsrcs/productos/pay.jpg',
  'description':'no c jaja'});

  /*Fina base de galleta molida, con relleno de queso crema y un ligero toque de limon cubierta con frutos de temporada*/

  addItem({'name':'Cake pops',
  'img':'/rsrcs/productos/cakepops.jpg',
  'description':'no confundir con kpop'});
  /*Esferas de pan de vainilla cubiertas con topping de queso crema y recubiertas de cocholate dulce o semiamargo.*/


  addItem({'name':'Mil hojas',
  'img':'/rsrcs/productos/milhojas.jpg',
  'description':'mil hojaaas, como un perro'});

  /* típico pan frances el cual esta conformado de una rica crema pastelera y una suave capa de merengue*/

  addItem({'name':'Mousse',
  'img':'/rsrcs/productos/mousse2.jpg',
  'description':'como el postre, no la banda'});
  /* Suave y espumosa crema bañada en una ligera cubierta de chocolate, acompañada de frutos de temporada*/

  addItem({'name':'Roles',
  'img':'/rsrcs/productos/roles.jpg',
  'description':'como los de Ivonne'});

  /*Pan horneado en forma de espiral con relleno de pasas, nuez y canela, bañado de un glaseado especial de azúcar glass.
 */

  addItem({'name':'Pastel',
  'img':'/rsrcs/productos/pblanco.jpg',
  'description':'noooooo donde te sentaste'});

  /*Rico bizcocho bañado de una suave crema de café con un ligero toque de chocolate amargo*/








/* 
'<div class="card" style="width: 18rem;">\n' +
      '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
      '    <div class="card-body">\n' +
      '        <h5 class="card-title">'+item.name+'</h5>\n' +
      '        <p class="card-text">'+item.description+'</p>\n' +
      '        <a href="#" class="btn btn-primary">Add</a>\n' +   
      '    </div>\n' +
      '</div>\n' +
      '<br/>'; */