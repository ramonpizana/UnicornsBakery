const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post("/contactanos/send_email",(req, res) =>{
    const {nombre, telefono, email, mensaje} = req.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'unicornscakes919@gmail.com',
            pass: 'jbbsvzpwkzerhldn'
        },
    });

    const mailOptions = {
        from: email,
        to: "unicornscakes919@gmail.com",
        subject: "Contacto",
        text: mensaje,
        html: `<ol>
                    <il><p>Nombre: ${nombre}</p></il>
                    <il><p>Telefono: ${telefono}</p></il>
                    <il><p>Email: ${email}</p></il>
               </ol>
               <p>Mensaje: ${mensaje}</p>`,
    }

    transporter.sendMail(mailOptions, (error,info) =>{
        if(error){
            req.status(500).send(error.message);
        } else{
            console.log("Email enviado correctamente");
            req.status(200).jsonp(req.body);
        }
    });
    res.redirect("http://localhost:5500/html/contactanos.html");
});

app.listen(3000, () => {
    console.log("Servidor en: http://localhost:3000");
});