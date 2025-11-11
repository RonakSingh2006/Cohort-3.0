const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());


function RadomNum(){
  return Math.floor(Math.random()*1000) + 1; 
}


app.get("/",(req,res)=>{  
  res.json({
      network: RadomNum(), 
      jobs: RadomNum(), 
      messaging: RadomNum(), 
      notifications: RadomNum()
  })
})

app.listen(3000);