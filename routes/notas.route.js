const notasRouter = express.Router();

notasRouter.get('/', (req, res) => {
    res.send('Hello World');
});

export default notasRouter;