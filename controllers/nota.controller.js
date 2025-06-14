import Nota from "../models/nota.model.js";

export const getNotas = async (req, res) => {
  const notas = await Nota.find();
  res.json(notas);
}; // OK

export const createNota = async (req, res) => {
  try {
    const { title, description } = req.body;
    const nota = new Nota({ title, description });
    await nota.save();
    res.status(201).json(nota);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; // OK

export const updateNota = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const nota = await Nota.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
    res.json(nota);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; // OK

export const deleteNota = async (req, res) => {
  try {
    const { id } = req.params;
    await Nota.findByIdAndDelete(id);
    res.json({ message: "Nota deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; // OK
