import express from 'express';
import cors from "cors";
import { db } from './connect.js';
import path from 'path';

const __dirname = path.resolve();

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/', (req, res) => {
  res.send('Só vamos trabalhar com os endpoints "/artists" e "/ songs"');
});

app.get('/api/artists', async (req, res) => {
  res.send(await db.collection('artists').find({}).toArray());
});

app.get('/api/songs', async (req, res) => {
  res.send(await db.collection('songs').find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get('*', async (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
