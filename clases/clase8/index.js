// CLASE 8, Router y Multer


             //Router y Multer


/* ----------------------------- */    

// 00:17:09 comienza la clase - Router en Express

//Un router en express nos permitirá separar los endpoints “comunes” en entidades separadas que fungirán como “mini aplicaciones”, las cuales tomarán peticiones que concuerden con dicho endpoint y así redireccionarse a esta mini aplicación.

const express = require('express');
const app = express();
const {routerCompras} = require('./routerCompras');
const {estubeAqui, erroresHandler} = require('./middleware')


/* middleware a nivel aplicacion */
app.use(erroresHandler);
app.use(estubeAqui);
/* middleware incorporados */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const staticFilesPath = __dirname + '/public';
app.use("/static", express.static(staticFilesPath));

app.use('/compras', routerCompras);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
});

// 00:48:22 middleware

//Cada vez que utilizamos un app.use estamos utilizando un middleware. Éstas son operaciones que se ejecutan de manera intermedia entre la petición del cliente, y el servicio de nuestro servidor. 
//siempre se ejecuta antes de llegar al endpoint que corresponde. 

/* 
Dar información sobre las consultas que se están haciendo (logs)
Autorizar o rechazar usuarios antes de que lleguen al endpoint (seguridad)
Agregar o alterar información al método req antes de que llegue al endpoint (formato)
Redireccionar según sea necesario (router)
En ciertos casos, finalizar la petición sin que llegue al endpoint (seguridad)
*/

// 01:15:05 Middleware de manejo de errores

// 01:18:57 archivos estaticos - dirrname

// 01:34:38 multer - formulario en html

// 01:48:21 desafio