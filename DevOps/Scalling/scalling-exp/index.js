import express from "express"

const app = express();

app.get("/:n",(req,res)=>{
  const n = req.params.n;
  let cnt = 0;
  for(let i=0 ; i<n ; i++){
    cnt += i;
  }

  res.send(`${cnt} Hello world ${process.pid}`);
});

export default app;