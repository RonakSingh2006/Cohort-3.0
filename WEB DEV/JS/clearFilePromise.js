import fs from 'fs';

let clearFile =  (filePath)=>{
  return new Promise((resolve,reject)=>{
    fs.readFile(filePath,"utf-8",(err,data)=>{
      if(err) return reject(err);
      else{
        data = data.trim();

        fs.writeFile(filePath,data,(err)=>{
          return reject(err);
        });

        resolve();
      }
    })
  })
}


clearFile("ronak.txt").then(()=>console.log("Cleared Sucessfull")).catch((e)=>console.log("Error occured",e));