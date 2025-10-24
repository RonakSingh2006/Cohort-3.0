const express = require('express');

const app = express();

const users = [{
  name : "Jhon",
  kidneys : [{
    healthy : false
  },{
    healthy : true
  }]
}]

// get all count of kidnesys with healthy and unhealthy

app.get("/",(req,res)=>{

  let kidneysArr = users[0].kidneys;

  let healthyKidneysLen = kidneysArr.filter((e)=>e.healthy).length;

  let result = {
    totalKidneys : kidneysArr.length,
    healthyKidneys : healthyKidneysLen,
    unhealthyKidneys : kidneysArr.length - healthyKidneysLen
  }

  res.send(result);
})

app.use(express.json())


// add a kidney
app.post("/",(req,res)=>{
  let currhealth = req.body.healthy;

  users[0].kidneys.push({healthy : currhealth});

  res.send("Done")
})


// update all kidneys to healthy

app.put("/",(req,res)=>{
  let changeDone = false;
  for(let i=0 ; i<users[0].kidneys.length ; i++){
    if(!users[0].kidneys[i].healthy){
      changeDone = true;
      users[0].kidneys[i].healthy = true
    }
  }

  if(changeDone){
    res.send("Update Done");
  }
  else{
    res.statusCode = 411;
    res.send("All Kidneys are already healthy");
  }

})


// delete all unhealthy kidneys

app.delete("/",(req,res)=>{

  let healthyArr = users[0].kidneys.filter((e)=>e.healthy);

  if(healthyArr.length == users[0].kidneys.length){
    res.statusCode = 411;
    res.send("No Unhealthy Kidneys present");
  }
  else{
    users[0].kidneys = users[0].kidneys.filter((e)=>e.healthy);
    res.send("Deleted Sucessfully")
  }
  
})

app.listen(3000);