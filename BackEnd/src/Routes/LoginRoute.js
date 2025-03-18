import { getCredenciales } from "../Controller/UsuarioController.js";
import express from 'express';

const router = express.Router();
router.get('/', getCredenciales);

export default router;