import express from "express"
import os from "os"
import cluster from "cluster";



const CPU_COUNT = os.cpus().length;

if(cluster.isPrimary){
  console.log(`Total CPU's ${CPU_COUNT}`);
  console.log(`process ${process.pid} is running`)

  // fork process
  for(let i=0 ; i<CPU_COUNT ; i++){
    cluster.fork();
  }

}
else{
  const app = express();

  app.get("/",(req,res)=>{
    res.send(`Hello world ${process.pid}`);
  });

  app.listen(3000,console.log("Running localhost:3000"));
}