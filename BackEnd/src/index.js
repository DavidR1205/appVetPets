import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routerClientes from './Routes/ClientesRoute.js';
import routerLogin from './Routes/LoginRoute.js';


const app = express();

app.use(cors());
app.use(express.json());

app.get('/clientes', routerClientes);
app.use('/login', routerLogin)

app.listen(process.env.PORT, ()=>{
    console.log(`Conectados a traves del puerto ${process.env.PORT}`)
})