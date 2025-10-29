const express = require('express');
const jwt = require('jsonwebtoken');
const path = require('path');
const cors = require('cors');

const app = express();

const JWT_SECRET = "randomronaksinghsecret";

let users = [];


app.use(express.json());
app.use(cors());


//  Sign Up

app.post("/signup",logger,(req,res)=>{
  let username = req.body.username;
  let password = req.body.password;

  let user = users.find((u)=>u.username === username);

  if(user){
    res.status(400).send("Username already exsists");
  }
  else{
    users.push({
      username : username,
      password : password
    })

    res.send("Registation Sucessfull");
  }
})

// Sign In

app.post("/signin",logger,(req,res)=>{
  let username = req.body.username;
  let password = req.body.password;

  let user = users.find((u)=>u.username === username);

  if(!user){
    res.status(400).send("Username does not exsists");
  }
  else{
    if(password === user.password){
      let token = jwt.sign({
        username : username
      },JWT_SECRET);

      res.send({
        token : token
      })
    }
    else{
      res.status(403).send("Incorrect Password");
    }
  }
})

// Logger Middle Ware

function logger(req,res,next){
  console.log(`${req.method} came to ${req.url}`);
  next();
}

// Auth Middle ware

function auth(req,res,next){
  let token = req.headers.token;

  if(!token){
    return res.status(400).send("You are not logged in");
  }

  try{
    let decoded = jwt.verify(token,JWT_SECRET);
    req.username = decoded.username;
    next();
  }
  catch(e){
    res.status(403).send("You are not logged in");
  }
}

// Me
app.get("/me",logger,auth,(req,res)=>{

  let username = req.username;

  let user = users.find((u)=>u.username === username);

  res.send(user);
})

app.listen(3000);