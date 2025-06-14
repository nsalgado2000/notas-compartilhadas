import Nota from '../models/nota.model.js';

export const getNotas = async (req, res) => {
    const notas = await Nota.find();
    res.json(notas);
};  

export const createNota = async (req, res) => {
    const { title, description } = req.body;
    const nota = new Nota({ title, description });
    await nota.save();
    res.json(nota);
};

  export const updateNota = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const nota = await Nota.findByIdAndUpdate(id, { title, description }, { new: true });
    res.json(nota);
};

export const deleteNota = async (req, res) => {
    const { id } = req.params;
    await Nota.findByIdAndDelete(id);
    res.json({ message: 'Nota deleted' });
};  