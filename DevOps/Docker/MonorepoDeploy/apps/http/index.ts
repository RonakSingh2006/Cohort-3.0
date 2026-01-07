import express from "express"
import {prisma} from "db/client"

const app = express();

app.get("/",async (req,res)=>{

  const users = await prisma.user.findMany();

  res.send({users});
});

app.post("/",async (req,res)=>{
  await prisma.user.create({
    data : {
      username : Math.random().toString(),
      password : Math.random().toString()
    }
  })
})

app.listen(3000);