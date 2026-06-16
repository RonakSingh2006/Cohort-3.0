import express from 'express';

const app = express();

app.get('/',(req,res)=>{
  res.send('Hi');
})

app.get('/cpu',(req,res)=>{
  for(let i=0 ; i<1e9 ; i++){
    Math.random();
  }

  res.send('cpu intensive task');
})

app.listen(3000,()=>{
  console.log('server running on http://localhost:3000')
})