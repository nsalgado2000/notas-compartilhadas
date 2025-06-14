const notasRouter = express.Router();

notasRouter.get('/', getNotas);
notasRouter.post('/', createNota);
notasRouter.put('/:id', updateNota);
notasRouter.delete('/:id', deleteNota);

export default notasRouter;