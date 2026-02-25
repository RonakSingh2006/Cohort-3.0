// Sum of 1 to large num using full cpu capacity

import os from 'os'
import cluster from 'cluster'


const CPU_COUNT = os.cpus().length;

const n = 5e10;

if(cluster.isPrimary){
  let totalSum = 0;
  let cnt = 0;

  let chunk = n/CPU_COUNT;
  let prev = 0;

  for(let i=0 ; i<CPU_COUNT ; i++){
    const worker = cluster.fork();

    if(i==CPU_COUNT-1){
      worker.send({start : prev+1,end : n});
    }
    else{
      worker.send({start : prev+1,end : prev + chunk});
    }
    
    prev += chunk;
    
    worker.on('message',(sum)=>{
      totalSum += sum;
      cnt++;
      if(cnt == CPU_COUNT){
        console.log(`total sum is ${totalSum}`);
      }
    })


  }

}
else{
  process.on('message',({start,end})=>{
    let sum = 0;
    for(let i=start ; i<=end ; i++) sum += i;

    console.log(`Process id : ${process.pid} sum : ${sum}`)
    process.send(sum);
    process.exit(0);
  })
}