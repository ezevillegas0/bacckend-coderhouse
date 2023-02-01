import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from "./routes/users.routes.js"

const app = express();
const port = 3000;
dotenv.config();
app.use(express.json());
app.get('/', (req, res) => {
    res.send("hola mundo")
});

const server = app.listen(port, () => {
    console.log("app iniciada en el puerto 3000")
});
server.on("eror", (error) => {
    console.log("error en el servidor", error);
});

console.log(process.env.USER_MONGO);
console.log(process.env.PASS_MONGO);
console.log(process.env.DB_MONGO);

mongoose.connect(
    `mongodb+srv://${process.env.USER_MONGO}:${process.env.PASS_MONGO}@codercluster.iyk9iht.mongodb.net/${process.env.DB_MONGO}usuarios37570?retryWrites=true&w=majority`,
    (error) => {
        if (error) {
            console.log("error al conectar a la base de datos");
        } else {
            console.log("conectado a la base de datos");
        }
    }
);

app.use('/users', userRouter);
