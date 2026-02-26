import express from 'express';
import os from 'os';

const app = express();

app.get("/",(req,res)=>{
  res.send("Learning Auto Scalling Groups");
})

app.get("/cpu",(req,res)=>{
  for(let i=0 ; i<10000000000 ; i++){
    Math.random();
  }

  res.send("CPU Intensive task done");
})

app.get("/host",(req,res)=>{
  res.send(`Host ${os.hostname()}`);  
})

export default app;