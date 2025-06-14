import express from 'express';
import { getNotas, createNota, updateNota, deleteNota } from '../controllers/nota.controller.js';

const notasRouter = express.Router();
// api/notas
notasRouter.get('/', getNotas);
// api/notas
notasRouter.post('/', createNota);
// api/notas/:id
notasRouter.put('/:id', updateNota);
// api/notas/:id
notasRouter.delete('/:id', deleteNota);

export default notasRouter;