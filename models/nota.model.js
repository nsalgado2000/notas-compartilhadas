const mongoose = require('mongoose');

const notaSchema = new mongoose.Schema({
    title: String,
    description: String,
});

const Nota = mongoose.model('Nota', notaSchema);

export default Nota;