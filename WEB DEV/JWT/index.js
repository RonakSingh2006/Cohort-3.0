const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "somerandomstring";

const app = express();


let users = [];

app.use(express.json());


app.post("/signup",(req,res)=>{

  let username =  req.body.username;
  let password = req.body.password;

  let user = users.find((u)=>u.username === username);

  if(user){
    res.status(400).send("username already taken");
  }
  else{
    users.push({
      username : username,
      password : password
    })

    res.send("You have been registered");
  }

})

app.post("/signin",(req,res)=>{
  let username = req.body.username;
  let password = req.body.password;

  let user = users.find((u)=>u.username === username);

  if(!user){
    res.statusCode = 400;
    res.send("User Does not exsist");
  }
  else{
    if(user.password === password){
      let token = jwt.sign({
        username : username
      },JWT_SECRET);

      res.send({
        token : token
      });
    }
    else{
      res.statusCode = 403;
      res.send("Incorrect Password");
    }
  }
})


app.get("/me",(req,res)=>{
  let token = req.headers.token;

  const decodedInfo = jwt.verify(token,JWT_SECRET);

  const username = decodedInfo.username;

  const user = users.find((u)=>u.username === username);

  if(!user){
    res.statusCode = 403;
    res.send("Invalid Token");
  }
  else{
    res.send(user);
  }

})


app.listen(3000);