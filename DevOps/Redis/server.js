import express from "express";
import axios from "axios";
import {Client} from "./client.js"

const app = express();

app.get("/",async (req,res)=>{

  const cache = await Client.get("quotes");

  if(cache){
    return res.send(JSON.parse(cache));
  }

  const {data} = await axios.get("https://dummyjson.com/quotes");

  Client.set("quotes",JSON.stringify(data));

  res.send(data);
})

app.get("/expire",async (req,res)=>{
  Client.expire("quotes",10);
  res.send("Done");
});

app.listen(3000);