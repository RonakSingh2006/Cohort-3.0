// To reprsent byte array
const bytes = new Uint8Array([65,66,97,105,107,116,75,79,100,80])


let bytesToAsciii = (bytes)=>{
  return new TextDecoder().decode(bytes);
}

console.log(bytesToAsciii(bytes));