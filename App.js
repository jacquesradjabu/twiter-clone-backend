import express from 'express';
import cors from 'cors';
import data from './data.js';

const PORT = 5000

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send("<h1>Bonjour client moi c'est le seurveur</h1>");
});

app.get('/personne', (req, res) => {
  res.json(data);
});


app.listen(PORT, () => {
  console.log(`Notre serveur est lancé avec succès au port ${PORT}`);
});