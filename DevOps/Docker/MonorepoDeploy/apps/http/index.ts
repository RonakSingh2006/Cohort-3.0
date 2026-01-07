import express from "express"
import {prisma} from "db/client"

const app = express();

app.get("/",(req,res)=>{
  res.send("Hello World");
});

app.listen(3000);