import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './Routes/ClientesRoute.js';
import { getConnection } from './Config/Connection.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.get('/clientes', router);
app.listen(process.env.PORT, ()=>{
    getConnection();
    console.log(`Conectados a traves del puerto ${process.env.PORT}`)
})