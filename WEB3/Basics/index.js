import crypto from 'crypto'

// let hashed = crypto.createHash('Sha256').update('I am Ronak').digest('hex');

// console.log(hashed);

// let i=0;

// while(true){
//   const hash = crypto.createHash('sha256').update(i+"").digest('hex');

//   if(hash.startsWith('00000')) break;

//   i++;
// }

// console.log(i);

// Given string s find nonce 
// nonce is the val that we have to concat to get the output  reuired



let transaction = "Ronak =>  Ram | Rs 1000"

let x = 0;

while(true){
  if(crypto.createHash('sha256').update(transaction+x).digest('hex').startsWith('000000')){
    break;
  }

  x++;
}

console.log(x);
