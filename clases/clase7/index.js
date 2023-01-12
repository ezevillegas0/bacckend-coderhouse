const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 00:14:37
// para comunicarse con un backend tenemos los siguientes metodos : GET, POST, PUT, DELETE.
// metodo GET para obtener una respuesta.
app.get('/menu1', (req, res) => {
    /* console.dir(req) */
    res.send("milanesa napolitana")
});

let compras = [];
// metodo POST para obtener una respuesta con informacion. este metodo guarda la informacion.
app.post('/compras1', (req, res) => {
    const c = req.body;
    compras.push(c);
    res.status(200).send("OK!");
});

// metodo PUT modifica algo que ya estaba guardado antes.
app.put('/compras1/:id', (req, res) => {
    const productoCambiado = req.body;
    let productoACambiar = compras.findIndex( c => c.id === productoCambiado.id);
    productoACambiar = productoCambiado;
    res.status(200).send("compra actualizada!")
})

//metodo DELETE elimina informacion guardada. 
app.delete('compras1/:id', (req, res) => {
    //eliminar la compra del arreglo de compras.
});

/* ----------------------------- */    

// 00:24:07 estados

//Cuando realizamos alguna petición al servidor mediante el protocolo HTTP, el servidor debe respondernos no sólo con información, sino con un estado del proceso. Este es un código que nos permitirá saber cómo se encuentra el proceso, o cómo finalizó. 
//Cuando el servidor responde con un código de estado, esto permite saber qué ocurrió con la consulta que estábamos haciendo, y da información al cliente sobre qué ha ocurrido.

/* 
1xx: Status “informativo”
2xx : Status “ok”
3xx: Status de redirección.
4xx: Status de error de cliente.
5xx: Status de error en servidor.

-Algunos de los más importantes:

200: Indica que la petición se procesó correctamente. No hubo ningún tipo de inconveniente desde la consulta hasta la respuesta.
3xx: Hace referencia a redirecciones, cuando un recurso se ha movido o necesitamos apuntar a otro servicio.
400: Se utiliza cuando el cliente realiza alguna petición que no cumpla con las reglas de comunicación (una mala consulta, tal vez le faltó enviar un dato, o venía en un formato incorrecto).
401: Se utiliza cuando el cliente no se ha identificado con el servidor bajo alguna credencial, no puede acceder al recurso
403: Se utiliza cuando el cliente ya se identificó, pero sus credenciales no tienen el nivel de privilegios suficiente para acceder al recurso, es el equivalente a decir “Ya qué quién eres, pero ni así estás autorizado”
404: Se utiliza cuando el recurso no se ha encontrado, ya sea algún dato solicitado o incluso el endpoint mismo.
500: Se utiliza cuando algo ocurrió en el servidor, no necesariamente un error del cliente, sino un error o “detalle” que no haya considerado el servidor al tratar con algún caso.
*/

/* ----------------------------- */    

// 00:33:48 Comprendiendo una API REST

//Es un conjunto de definiciones y reglas que permiten que dos equipos puedan integrarse para trabajar juntos. La mejor analogía que hay para comprender ésto es que una API funge como un “contrato” entre el front y el back.

/* La API permite entonces que se respondan preguntas como:
¿A qué endpoint debo apuntar para la tarea que necesito?
¿Qué método debo utilizar para ese recurso?
¿Qué información debo enviar para realizar correctamente mi petición?
*/

// Cuando hacemos una petición o cuando recibimos una respuesta, ésta debe tener un formato. 
// REST permite definir la estructura que deben tener los datos para poder transferirse.

/* ----------------------------- */    

// 01:19:19 POSTMAN 

app.get('/menu', (req, res) => {
    res.send('milanesa napolitana')
});

app.post("/compras", (req, res) => {
    const _compras = req.body;
    if (_compras.length) {
      compras = _compras;
      return res.send("ok");
    }
    res.status(400).send("Bad request");
});

app.get('/compras', (req, res) => {
    res.send(compras)
});

app.put("/compras/:id", (req, res) => {
    compraId = compras.findIndex((c) => c.id === +req.params.id);
    compras[compraId] = {
      id: req.params.id,
      nombre: req.body.nombre,
    };
    res.send("producto actualizado!");
});

app.delete("/compras/:id", (req, res) => {
    compras = compras.filter((c) => c.id !== +req.params.id);
    res.send("Producto eliminado");
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
});
