import express from 'express';
import { midleware } from './middleware';

const app = express();

app.use(midleware);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/cpu', (req, res) => {

  for (let i = 0; i < 1e7; i++) {
    Math.random();
  }

  res.send('Hello from the CPU-intensive endpoint!');

});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});