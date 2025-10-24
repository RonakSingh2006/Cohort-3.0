const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();


// read the files directory

app.get("/files",(req,res)=>{

  let filePath = path.join(__dirname,"files");

  fs.readdir(filePath,(err,files)=>{
    if(err){
      res.statusCode = 404;
      res.send("Folder Not Found",err);
    }
    else{
      res.send(files);
    }
  })
})

// Read the spefic file

app.get("/files/:fileName",(req,res)=>{
  let fileName = req.params.fileName;

  let filePath = path.join(__dirname,"files",fileName);

  fs.readFile(filePath,(err,data)=>{
    if(err){
      res.statusCode = 404;
      res.send("File Not Found",err);
    }
    else{
      res.send(data);
    }
  })
})

app.listen(3000);