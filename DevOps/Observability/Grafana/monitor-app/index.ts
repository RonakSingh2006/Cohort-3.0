import express from 'express';
import { middleware } from './middleware';
import { register } from './metrics';

const app = express();

app.use(middleware);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/cpu', (req, res) => {

  for (let i = 0; i < 1e10; i++) {
    Math.random();
  }

  res.send('Hello from the CPU-intensive endpoint!');

});

// to track no of active requests
app.get("/slow", async (req, res) => {
  await new Promise(resolve => setTimeout(resolve, 10000));
  res.send("Done");
});


app.get('/metrics',async (req,res)=>{
  const metrics = await register.metrics();

  res.set('Content-Type',register.contentType);

  res.send(metrics);
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});