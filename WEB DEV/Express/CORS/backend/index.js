const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({
  domains : ["http://localhost:57285"]
}));

app.post("/sum",(req,res)=>{
  let a = Number(req.body.a);
  let b = Number(req.body.b);

  res.json({
    ans : a + b
  })
})


app.listen(3000);