const express = require('express');

const app = express();

function checkAgeMiddleWare(req,res,next){
  let age = Number(req.query.age);

  if(age >= 14){
    next();
  }
  else{
    res.statusCode = 403;
    res.send("Age is less than 14");
  }
}


app.get("/ride",checkAgeMiddleWare,(req,res)=>{
  res.send("You can ride the ride");
})

app.listen(3000);