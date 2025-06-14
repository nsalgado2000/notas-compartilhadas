import express from 'express';
import { getNotas, createNota, updateNota, deleteNota } from '../controllers/nota.controller.js';

const notasRouter = express.Router();
// api/notas
notasRouter.get('/notas', getNotas);
// api/notas
notasRouter.post('/notas', createNota);
// api/notas/:id
notasRouter.put('/notas/:id', updateNota);
// api/notas/:id
notasRouter.delete('/notas/:id', deleteNota);

export default notasRouter;