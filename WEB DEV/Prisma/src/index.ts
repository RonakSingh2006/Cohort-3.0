import { prisma } from './lib/prisma.js'

import express from 'express'

const app = express();

app.get("/user", async (req,res)=>{
  const users = await prisma.user.findMany();

  res.send(users);
})

app.get("/user/:id" , async (req,res)=>{
  const user = await prisma.user.findFirst({
    where : {
      id : parseInt(req.params.id)
    },
    select : {
      todos : true,
      usename : true
    }
  })

  res.send(user);
})


app.listen(3000);