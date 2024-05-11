import express from 'express';
import cors from 'cors';
import curentUserRouts from './routes/curentUser.routs.js';
import tweetsRouts from './routes/tweets.routes.js';


const PORT = 3000


const app = express();
app.use(express.json());
app.use(cors());

app.use('/', curentUserRouts);
app.use('/', tweetsRouts);


app.listen(PORT, () => {
  console.log(`Notre serveur est lancé avec succès au port ${PORT}`);
});

