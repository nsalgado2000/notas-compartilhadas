import express from 'express';
import { getNotas, createNota, updateNota, deleteNota } from '../controllers/nota.controller.js';

const notasRouter = express.Router();

notasRouter.get('/', getNotas);
notasRouter.post('/', createNota);
notasRouter.put('/:id', updateNota);
notasRouter.delete('/:id', deleteNota);

export default notasRouter;