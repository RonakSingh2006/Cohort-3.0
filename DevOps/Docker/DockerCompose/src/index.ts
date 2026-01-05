import express from "express";
import {prisma} from "./lib/prisma.js"

const app = express();

app.get("/",async (req,res)=>{

  const data = await prisma.user.findMany();
  res.send({data});
})

app.post("/",async (req,res)=>{

  await prisma.user.create({
    data : {
      username : Math.random().toString(),
      password : "secret"
    }
  })

  res.send("created");
})

app.listen(3000);