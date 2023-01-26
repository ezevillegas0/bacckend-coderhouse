const express = require('express');
const handlebars = require('express-handlebars');
const http = require('http');
const { Server } = require('socket.io');
/*  */
const app = express();
const httpServer = http.createServer(app)
const io = new Server(httpServer);
/*  */
const cartsRouter = require('./routes/cartsRouter');
const productsRouter = require('./routes/productsRouter');
const viewsRouter = require('./routes/viewsRouter');
/*  */
const PORT = 8080;
//=========== MIDDLEWARES ===========//
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);
app.use('/', viewsRouter);
/*  */
io.listen('connection', (socket) => {
    console.log('a user connected');
    socket.on("disconnect", () => {
        console.log("user disconnected")
    });
});
/*  */
httpServer.listen(PORT, () => {
    console.log("Listening on 8080")
});