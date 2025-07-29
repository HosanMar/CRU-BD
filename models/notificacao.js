import { pool } from '../db.js';

export const getAllNotificacao = async () => {
  const res = await pool.query('SELECT * FROM notificacao ORDER BY id');
  return res.rows;
};

export const getNotificacaoById = async (id) => {
  const res = await pool.query('SELECT * FROM notificacao WHERE id = $1', [id]);
  return res.rows[0];
};

export const getNotificacaoByDispositivo = async (dispositivoId) => {
  const res = await pool.query(
    'SELECT * FROM notificacao WHERE dispositivo_id = $1 ORDER BY id',
    [dispositivoId]
  );
  return res.rows;
};


export const deleteNotificacao = async (id) => {
  await pool.query('DELETE FROM notificacao WHERE id = $1', [id]);
};
