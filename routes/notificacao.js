import express from 'express';
import {
  getAllNotificacao,
  getNotificacaoByDispositivo,
  getNotificacaoById,
  deleteNotificacao

} from '../models/notificacao.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const data = await getAllNotificacao();
  res.json(data);
});

router.get('/dispositivo/:dispositivoId', async (req, res) => {
  const notificacao = await getNotificacaoByDispositivo(req.params.dispositivoId);
  res.json(notificacao);
});

router.get('/:id', async (req, res) => {
  const item = await getNotificacaoById(req.params.id);
  item ? res.json(item) : res.status(404).send('Notificação não encontrado');
});

router.delete('/:id', async (req, res) => {
  await deleteNotificacao(req.params.id);
  res.status(204).send();
});

export default router;