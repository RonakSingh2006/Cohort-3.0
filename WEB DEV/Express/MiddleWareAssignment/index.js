const express = require('express');

const app = express();

let requestCount = 0;

app.use((req,res,next)=>{
  console.log(req.method,req.url,new Date().toISOString());
  next();
})


app.use((req,res,next)=>{
  requestCount++;
  next();
})


app.get("/count",(req,res)=>{
  res.json({
    requestCount : requestCount
  })
});


app.listen(3000);

