const express = require('express');
const routerCompras = express.Router();
let { compras } = require('./database');
const middleware = require('./middleware')
/* multer */
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

/* middleware a nivel router */
routerCompras.use(middleware.compras);

/* middleware a nivel endpoint */
routerCompras.get('/menu', (req, res) => {
    res.send('milanesa napolitana')
});

routerCompras.post("", (req, res) => {
    const _compras = req.body;
    if (_compras.length) {
      compras = _compras;
      return res.send("ok");
    }
    res.status(400).send("Bad request");
});

routerCompras.get('/compras', (req, res) => {
    res.send(compras)
});

routerCompras.put("/:id", (req, res) => {
    compraId = compras.findIndex((c) => c.id === +req.params.id);
    compras[compraId] = {
      id: req.params.id,
      nombre: req.body.nombre,
    };
    res.send("producto actualizado!");
});

routerCompras.delete("/:id", (req, res) => {
    compras = compras.filter((c) => c.id !== +req.params.id);
    res.send("Producto eliminado");
});

/* multer */
routerCompras.post('/nueva', upload.single('foto'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.log(req.body);
    res.status(200).send('compra agregada');
});


module.exports = {
    routerCompras,
};
