//document.getElementById("crear").addEventListener('click', crear);

async function crear() {
//   verifyUsers();
  let email = document.getElementById("email").value;
  let user = document.getElementById("user").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  var newRegis = {
    "user_name": user,
    "email": email,
    "password": password,
    "id_type_user": 1,
  };

  if (user == "") {
    M.toast({ html: "Debes introducir un usuario", classes: "rounded" });
    return;
  }

  if (password == "") {
    M.toast({ html: "Debes introducir una contraseña", classes: "rounded" });
    return;
  }

  if (password.length < 8) {
    M.toast({
      html: "Tu contraseña debe ser mayor a 8 caracteres",
      classes: "rounded",
    });
    return;
  }

  if (password != confirmPassword) {
    M.toast({ html: "tus constraseñas no coinciden", classes: "rounded" });
    return;
  }

  //  var traer = JSON.parse(localStorage.getItem('users'));
  //  var keys = Object.keys(traer);

  //  for(let i = 0;i<keys.length;i++){
  //      if(newRegis.email==traer[i].email ||  newRegis.user==traer[i].user){
  //         M.toast({html: 'Ese usuario ya existe',classes: 'rounded'});
  //         return
  //     }
  //  }

  //      traer[keys.length]=newRegis;

  //  console.log(traer);
  // var regisToJson = JSON.stringify(traer);
  // localStorage.setItem('users',regisToJson);

  var data = JSON.stringify(newRegis);
  // console.log(newProducts);
  console.log(data);
  const request = await fetch("http://127.0.0.1:8080/user/register", {
    method: "POST",
    mode: "cors",
    body: data,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  request.text().then(function (text) {
    if(text === "Saved")  return M.toast({ html: "Ahora eres parte del Reino Unicornio :3", classes: "rounded" });
    else return M.toast({ html: "Haz sido rechazad@ del Reino Unicornio >:c", classes: "rounded" });
    // do something with the text response 
  })


  console.log(request.status);
}

// function verifyUsers() {
//   if (!localStorage.getItem("users")) {
//     localStorage.setItem(
//       "users",
//       JSON.stringify({
//         0: { email: "admin@root.com", user: "root", password: "admin" },
//       })
//     );
//   }
// }

function cancelar() {
  document.getElementById("email").value = "";
  document.getElementById("user").value = "";
  document.getElementById("password").value = "";
  document.getElementById("confirmPassword").value = "";
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
