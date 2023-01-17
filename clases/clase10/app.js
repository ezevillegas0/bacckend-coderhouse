const express=require('express');
const handlebars=require('express-handlebars');
const {Server}=require('socket.io')
const app = express();

const PORT=8080;
const httpServer=app.listen(PORT,() => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
const socketServer=new Server(httpServer);

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');
app.use(express.static(__dirname+'/public'));

app.get('/',(req,res) => {
    res.render('index',{});
});

/* socketServer.on('connection', (socket) => {
    console.log('nuevo cliente conecatado!')
    socket.on('mensaje', (msj) => {
        console.log('recibi un mensaje que dice: '+ msj);
    });
    socket.emit('singlecast', 'este es un mensaje singlecast');
    socket.broadcast.emit ('broadcast', 'este es un mansaje broadcast');
    socketServer.emit('multicast', 'este es un mensaje multicast')
}); */

/* ejercicio en clase de websockets */

const mensajes = [];

socketServer.on('connection', (socket) => {
    socket.emit('mensajes', mensajes)/* cuando se conecete alguien se mandan los mensajes */
    socket.on('mensajes', (mensaje) => { /* cuando alguien emita un mensaje se agregara al arreglo*/
    mensajes.push({
        socketId: socket.id,
        mensaje
    });
    });
});