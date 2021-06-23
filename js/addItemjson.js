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
  'description':'Delicioso macarron de manzana con fresa'});

  addItem({'name':'Pastel',
  'img':'/rsrcs/productos/pastel.jpg',
  'description':'Pastel 3 leches ultra delicioso'});

  addItem({'name':'Pay',
  'img':'/rsrcs/productos/pay.jpg',
  'description':'Super mega pay ultra barato y rico'});




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