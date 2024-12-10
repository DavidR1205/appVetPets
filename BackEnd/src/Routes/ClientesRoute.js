import express from 'express';
import { getAllC } from '../Controller/ClientesController.js';

const router = express.Router();

router.get('/clientes', getAllC);

export default router;