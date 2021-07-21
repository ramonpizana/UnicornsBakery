async function login() {
  // verifyUsers();
//   fetch('http://localhost:8080/product/all')
//   .then(response => response.json())
//   .then(data => viewCard(data));
  

  let emailLogin = document.getElementById("emailLogin").value;
  let passwordLogin = document.getElementById("passwordLogin").value;

  if (emailLogin == "") {
    M.toast({ html: "Debes introducir un usuario", classes: "rounded" });
    return;
  }

  if (passwordLogin == "") {
    M.toast({ html: "Debes introducir una contraseña", classes: "rounded" });
    return;
  }


  var newSession ={
    "email": emailLogin,
    "password":passwordLogin
  }

  var data = JSON.stringify(newSession);
  // console.log(newProducts);
  // console.log(data);
  const request = await fetch("http://127.0.0.1:8080/user/login", {
    method: "POST",
    mode: "cors",
    body: data,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }) 
  // request
  //     .status(request.Status.OK)
  //     .entity(message)
  //     .build();

  request.text().then(function (text) {
    if(text === "Logged")  return (location.href = "/html/home.html");
    else return M.toast({ html: "Usuario o Contraseña incorrecto", classes: "rounded" });;
    // do something with the text response 
  })
  




//   var traerLogin = JSON.parse(localStorage.getItem("users"));
//   var keysLogin = Object.keys(traerLogin);

//   for (let i = 0; i < keysLogin.length; i++) {
//     if (
//       emailLogin == traerLogin[i].email &&
//       passwordLogin == traerLogin[i].password
//     ) {
//       return (location.href = "/html/home.html");
//     }
//   }
//   M.toast({ html: "Usuario o Contraseña incorrecto", classes: "rounded" });
// }

// function verifyUsers() {
//   if (!localStorage.getItem("users")) {
//     localStorage.setItem(
//       "users",
//       JSON.stringify({
//         0: { email: "admin@root.com", user: "root", password: "admin" },
//       })
//     );
//   }
}
