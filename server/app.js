import express from 'express';
import dotenv from 'dotenv';


dotenv.config();

const app = express();


app.get('/', (req, res) => {
  res.send('<h1>Server has Started</h1>');
});


export default app;
