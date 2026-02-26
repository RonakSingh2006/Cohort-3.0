import cluster from "cluster"
import os from 'os';
import app from "./index.ts"

const CPU_COUNT = os.cpus().length;

if(cluster.isPrimary){
  for(let i=0 ; i<CPU_COUNT ; i++){
    cluster.fork();
  }
}
else{
  app.listen(3000,()=>{
    console.log(`Worker ${process.pid} started on port 3000`);
  })
}