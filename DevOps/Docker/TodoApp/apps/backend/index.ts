import express from "express";
import {prisma} from "@repo/db/prisma"

const app = express();

app.use(express.json());


app.post("/addUser",async (req,res)=>{
  const {username,password} = req.body;

  await prisma.user.create({
    data : {
      username,
      password
    }
  })
  res.send("Aded User");
})

app.post("/addTodo",async (req,res)=>{

  const {task} = req.body;

  await prisma.todo.create({
    data : {
      task,
      userId : "c150cf2a-f2b8-47cc-b856-22dec73b84c2"
    }
  })

  res.send("Addded Todo");
})

app.get("/users",async (req,res)=>{
  const users = await prisma.user.findMany({});

  res.json({
    users
  })
})

app.get("/todos",async (req,res)=>{
  const todos = await prisma.todo.findMany({});

  res.json({
    todos
  })
})

app.listen(3001);