import { pool } from '../db.js';

export const getAllDispositivos = async () => {
  const res = await pool.query('SELECT * FROM dispositivo ORDER BY dispositivoid');
  return res.rows;
};

export const getDispositivoById = async (id) => {
  const res = await pool.query('SELECT * FROM dispositivo WHERE dispositivoid = $1', [id]);
  return res.rows[0];
};

export const createDispositivo = async (data) => {
  const {
    dispositivotemp,
    dispositivoumi,
    dispositivoco,
    dispositivoc02,
    dispositivopart,
    dispositivoilum,
    dispositivoruid,
    dispositivodata,
    dispositivohora,
    dispositivoambiente,
  } = data;

  const res = await pool.query(`
    INSERT INTO dispositivo (
      dispositivotemp, dispositivoumi, dispositivoco, dispositivoc02,
      dispositivopart, dispositivoilum, dispositivoruid,
      dispositivodata, dispositivohora, dispositivoambiente
    ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *`,
    [dispositivotemp, dispositivoumi, dispositivoco, dispositivoc02, dispositivopart,
     dispositivoilum, dispositivoruid, dispositivodata, dispositivohora, dispositivoambiente]);

  return res.rows[0];
};

export const updateDispositivo = async (id, data) => {
  const res = await pool.query(`
    UPDATE dispositivo SET
      dispositivotemp=$1,
      dispositivoumi=$2,
      dispositivoco=$3,
      dispositivoc02=$4,
      dispositivopart=$5,
      dispositivoilum=$6,
      dispositivoruid=$7,
      dispositivodata=$8,
      dispositivohora=$9,
      dispositivoambiente=$10
    WHERE dispositivoid=$11 RETURNING *`,
    [data.dispositivotemp, data.dispositivoumi, data.dispositivoco, data.dispositivoc02,
     data.dispositivopart, data.dispositivoilum, data.dispositivoruid,
     data.dispositivodata, data.dispositivohora, data.dispositivoambiente, id]);

  return res.rows[0];
};

export const deleteDispositivo = async (id) => {
  await pool.query('DELETE FROM dispositivo WHERE dispositivoid = $1', [id]);
};
