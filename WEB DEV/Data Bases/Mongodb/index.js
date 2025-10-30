const express = require('express');
const {UserModel , TodoModel} = require("./db");
const jwt = require("jsonwebtoken");

const app =  express();

const JWT_SECRET = "randomronaksingh";

app.use(express.json());

app.post("/signup", async (req,res)=>{

  let {email,name,password} = req.body;

  let user = await UserModel.findOne({email})

  if(user){
    return res.status(400).send("User already exsists");
  }
  
  await UserModel.create({email,name,password});
  res.send("Sucessfully Signed Up");

})

app.post("/signin", async (req,res)=>{

  let {email,password} = req.body;

  let user = await UserModel.findOne({
    email,password
  })

  if(user){
    let token = jwt.sign({id : user._id},JWT_SECRET);
    res.send({
      token
    });
  }
  else{
    res.status(403).send("Incorrect Credential");
  }

})

function auth(req,res,next){
  let token = req.headers.token;


  try{
    let decoded = jwt.verify(token,JWT_SECRET);

    req.userId = decoded.id;

    next();

  }
  catch(e){
    res.status(403).send("Not Logged In");
  }
}

app.post("/todo", auth , async (req,res)=>{
  let userId = req.userId;
  let task = req.body.task;

  await TodoModel.create({
    title : task,
    userId : userId,
    done : false
  })

  res.send("Tasks Updated");
})

app.get("/todos", auth , async (req,res)=>{
  let userId = req.userId;

  let todos = await TodoModel.find({userId});

  res.send(todos);
})

app.listen(3000);