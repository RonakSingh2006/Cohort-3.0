let express = require('express');

const app = express();

function calculateSum(n){
  return (n*(n+1))/2;
}

app.get("/",(req,res)=>{
  let n = Number(req.query.n);
  res.statusCode = 500;
  res.send(calculateSum(n));
})


app.listen(3000);