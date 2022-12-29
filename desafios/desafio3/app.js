/* DESAFIO 3, SERVIDOR CON EXPRES */
const productManger = require("./productManager");
const express = require('express');
/*  */
const app = express();
const port = 8080;
const prod = require("./prod.json")
/* endpoints */

app.get('/products',  (req,res)=>{
    const limite = req.query.limite;
    let respuesta = prod;
    if (limite && !isNaN(Number(limite))) {
        respuesta = respuesta.slice(0, limite);
    }
    res.send (respuesta)
})

app.get('/products/:pid', async (req, res)=>{
    console.log(req.params);
    const prodId = req.params.pid;
    const id = prod.find(prod => prod.id === +prodId);
    if (!id) {
      return res.status(404).send("Product not found");
    }
    res.send({id});
})

/*  port  */
app.listen(port, ()=> {
    console.log("servidor levantado en el puerto", port);
})