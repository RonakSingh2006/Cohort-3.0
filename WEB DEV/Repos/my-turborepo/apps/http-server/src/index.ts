import express from 'express';

const app = express();

app.post("/signup",(req,res)=>{
  res.send("Signed Up");
});

app.post("/signin",(req,res)=>{
  res.send("Signed In");
});

app.post("/chat",(req,res)=>{
  res.send("Chating .......");
});

app.listen(3001,()=>{
  console.log('running at http://localhost:3001');
});