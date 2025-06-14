import mongoose from 'mongoose';

const notaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

const Nota = mongoose.model('Nota', notaSchema);
export default Nota;