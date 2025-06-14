import express from 'express';
import dotenv from 'dotenv';
import notasRouter from './routes/notas.route.js';
import connectDB from './database/mongodb.js';

const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/notas', notasRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});