import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import productsRouter from "./routes/products.routes.js"
import cartsRouter from "./routes/carts.routes.js"
/*  */
dotenv.config();
const app = express();
const PORT = process.env.SERVER_PORT || 8181;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
/*  */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/productos", productsRouter)
app.use("/api/carrito", cartsRouter)

const server = app.listen(PORT, () => {
    console.log("servidor corriendo en el puerto 3434");
});

server.on("error", (error) => console.log(`error en el servidor ${error}`));

const environment = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${DB_USER}:${DB_PASS}@codercluster.iyk9iht.mongodb.net/${DB_NAME}usuarios37570?retryWrites=true&w=majority`,
        );
        console.log("conectado a mongoDB");
    } catch (error) {
        console.log(`error al conecatarse a MongoDB ${error}`);
    }

};

/*         (error) => {
            if (error) {
               console.log("error al conectar a la base de datos");
            } else {
                console.log("conectado a la base de datos");
            }
        } */

const isValidStartData = () => {
    if (DB_PASS && DB_USER) return true;
    else return false;
};

console.log("isValidStartData", isValidStartData());
isValidStartData() && environment();