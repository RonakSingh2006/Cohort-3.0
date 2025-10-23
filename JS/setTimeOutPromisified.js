
let settimeoutPromisified = (time)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(resolve,time);
  })
}

settimeoutPromisified(5000).then(()=>{
  console.log("Resolved");
})