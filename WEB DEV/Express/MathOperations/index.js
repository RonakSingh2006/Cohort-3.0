const express = require('express');

const app = express();

function validate(req,res,next){
  let a = Number(req.query.a);
  let b = Number(req.query.b);

  if(isNaN(a) || isNaN(b)){
    res.statusCode = 400;
    res.send("In valid Input");
  }
  else{
    next();
  }
}

app.get("/add",validate,(req,res)=>{
  let a = Number(req.query.a);
  let b = Number(req.query.b);

  res.send(a+b);
})

app.get("/divide",validate,(req,res)=>{
  let a = Number(req.query.a);
  let b = Number(req.query.b);

  if(b == 0){
    res.statusCode = 400;
    res.send("Invalid Operation");
  }
  else{
    res.send(a/b);
  }

})

app.get("/multiply",validate,(req,res)=>{
  let a = Number(req.query.a);
  let b = Number(req.query.b);

  res.send(a*b);
})

app.get("/subtract",validate,(req,res)=>{
  let a = Number(req.query.a);
  let b = Number(req.query.b);

  res.send(a-b);
})



app.get("/add/:a/:b",(req,res)=>{
  let a = Number(req.params.a);
  let b = Number(req.params.b);

  res.send(a+b);
})

app.get("/divide/:a/:b",(req,res)=>{
  let a = Number(req.params.a);
  let b = Number(req.params.b);

  if(b == 0){
    res.statusCode = 400;
    res.send("Invalid Operation");
  }
  else{
    res.send(a/b);
  }

})

app.get("/multiply/:a/:b",(req,res)=>{
  let a = Number(req.params.a);
  let b = Number(req.params.b);

  res.send(a*b);
})

app.get("/subtract/:a/:b",(req,res)=>{
  let a = Number(req.params.a);
  let b = Number(req.params.b);

  res.send(a-b);
})


app.listen(3000);
