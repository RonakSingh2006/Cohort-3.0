const express = require('express');
const {UserModel , TodoModel} = require("./db");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const {z} = require('zod');

const app =  express();

const JWT_SECRET = "randomronaksingh";

app.use(express.json());

app.post("/signup", async (req,res)=>{

  let requiredBody = z.object({
    email : z.email().min(5).max(50),
    password : z.string().min(6).max(20),
    name : z.string().min(3).max(50)
  })

  let parsedData = requiredBody.safeParse(req.body);

  if(!parsedData.success){
    return res.status(400).send(JSON.parse(parsedData.error));
  }

  let {email,name,password} = parsedData.data;

  try{
    let hashedPassword = await bcrypt.hash(password,5);
  
    await UserModel.create({email,name,password : hashedPassword});

    res.send("Sucessfully Signed Up");
  }
  catch(e){
    res.status(400).send("User already exsits");
  }

})

app.post("/signin", async (req,res)=>{

  let requiredBody = z.object({
    email : z.email(),
    password : z.string()
  })

  let parsedData = requiredBody.safeParse(req.body);

  if(!parsedData.success){
    return res.status(400).send(JSON.parse(parsedData.error));
  }

  let {email,password} = parsedData.data;

  let user = await UserModel.findOne({email})
  
  if(user){

    const valid = await bcrypt.compare(password,user.password);

    if(valid){
      let token = jwt.sign({id : user._id},JWT_SECRET);
      res.send({
        token
      });
    }
    else{
      res.status(403).send("Incorrect Password");
    }
    
  }
  else{
    res.status(400).send("User Does not exsists");
  }

})

async function auth(req,res,next){
  let token = req.headers.token;

  try{
    let decoded = jwt.verify(token,JWT_SECRET);

    let user = await UserModel.findOne({_id : decoded.id});

    if(user){
      req.userId = decoded.id;
      next();
    }
    else{
      res.status(401).send("User Does not exsists");
    }

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