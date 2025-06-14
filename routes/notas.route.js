import express from "express";
import {
  getNotas,
  createNota,
  updateNota,
  deleteNota,
} from "../controllers/nota.controller.js";

const notasRouter = express.Router();

notasRouter.get("/notas", getNotas);
notasRouter.post("/notas", createNota);
notasRouter.put("/notas/:id", updateNota);
notasRouter.delete("/notas/:id", deleteNota);

export default notasRouter;
