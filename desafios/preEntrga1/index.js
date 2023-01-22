const express = require('express');
const app = express();
const {cartsRouter} = require('./routers/cartsRouter');
const {productsRouter} = require('./routers/productsRouter');

/*  */


/* app.use(productsRouter); */
//=========== MIDDLEWARES ===========//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);
app.use(express.static(__dirname+'/public'))
/*  */
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
});