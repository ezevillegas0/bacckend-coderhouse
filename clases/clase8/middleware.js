function estubeAqui  (req, res, next) {
    console.log('estuve aqui!');
    next();
}

function compras (req, res, next) {
    console.log('usted esta accediendo a las rutas de /compras')
    next();
}
/* middleware de manejo de errores */
function erroresHandler (err, req, res, next) {
    console.log(err);
    res.status(500).send('algo se rompio!');
}

module.exports = {
    estubeAqui,
    compras,
    erroresHandler
}