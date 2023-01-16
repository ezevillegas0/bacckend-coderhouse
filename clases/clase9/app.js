const express = require("express");
const handlebars = require("express-handlebars");

const app = express();

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

app.get("/saludar/:nombre", (req, res) => {
    const nombre = req.params.nombre;
    res.render('saludar', { nombre, stylesheet: 'nombre' } );
});

app.get("/", (req, res) => {
    const random = Number(Math.random().toFixed());
    res.render('datosPersonales', users[random]);
});



const users = [
    {
        nombre: "Elba",
        apellido: "Surero",
        correo: "elba_surero@gmail.com",
        telefonos: [{
            numero:"08009990271"
        },
        {
            numero: "999999"
        }],
        esMayor: true
    }, 
    {
        nombre: "Aitor",
        apellido: "Tilla",
        correo: "Aitor_tilla@gmail.com",
        telefonos: "080012334",
        esMayor: false
    }
]


const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));