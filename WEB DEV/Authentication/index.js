const express = require('express');

const app = express();


let users = [];

app.use(express.json());

function generateToken(){
  // return any random value

  let token = "";

  const letters = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
    '0','1','2','3','4','5','6','7','8','9'
  ];


  for(let i=0 ; i<32 ; i++){
    let x = Math.floor(Math.random()*61) + 1;

    token += letters[x];
  }

  return token;
}

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
      user.token = generateToken();

      res.send({
        token : user.token
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

  let user = users.find((u)=> u.token === token);

  if(!user){
    res.statusCode = 403;
    res.send("Invalid Token");
  }
  else{
    res.send(user);
  }

})


app.listen(3000);