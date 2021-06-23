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

  addItem({'name':'Tarta',
  'img':'/rsrcs/productos/tarta.jpg',
  'description':'pos una tarta :3'});

  addItem({'name':'Donas',
  'img':'/rsrcs/productos/dona.jpg',
  'description':'el que rellena las donas del centro ta bien rico'});

  addItem({'name':'Pay',
  'img':'/rsrcs/productos/pay.jpg',
  'description':'no c jaja'});

  addItem({'name':'Cake pops',
  'img':'/rsrcs/productos/cakepops.jpg',
  'description':'no confundir con kpop'});

  addItem({'name':'Mil hojas',
  'img':'/rsrcs/productos/milhojas.jpg',
  'description':'mil hojaaas, como un perro'});

  addItem({'name':'Mousse',
  'img':'/rsrcs/productos/mousse2.jpg',
  'description':'como el postre, no la banda'});

  addItem({'name':'roles',
  'img':'/rsrcs/productos/roles.jpg',
  'description':'como los de Ivonne'});

  addItem({'name':'Pastel',
  'img':'/rsrcs/productos/pblanco.jpg',
  'description':'noooooo donde te sentaste'});








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