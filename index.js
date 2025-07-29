import express from 'express';
import dispositivoRoutes from './routes/dispositivo.js';
import notificacaoRoutes from './routes/notificacao.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/dispositivos', dispositivoRoutes);
app.use('/notificacao', notificacaoRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
