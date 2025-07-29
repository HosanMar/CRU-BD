import express from 'express';
import {
  getAllDispositivos,
  getDispositivoById,
  createDispositivo,
  updateDispositivo,
  deleteDispositivo
} from '../models/dispositivos.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const data = await getAllDispositivos();
  res.json(data);
});

router.get('/:id', async (req, res) => {
  const item = await getDispositivoById(req.params.id);
  item ? res.json(item) : res.status(404).send('Dispositivo não encontrado');
});

router.post('/', async (req, res) => {
  const novo = await createDispositivo(req.body);
  res.status(201).json(novo);
});

router.put('/:id', async (req, res) => {
  const atualizado = await updateDispositivo(req.params.id, req.body);
  atualizado ? res.json(atualizado) : res.status(404).send('Dispositivo não encontrado');
});

router.delete('/:id', async (req, res) => {
  await deleteDispositivo(req.params.id);
  res.status(204).send();
});

export default router;
