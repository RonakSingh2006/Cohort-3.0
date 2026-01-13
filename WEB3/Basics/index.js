import crypto from 'crypto'

// let hashed = crypto.createHash('Sha256').update('I am Ronak').digest('hex');

// console.log(hashed);



let i=0;


while(true){
  const hash = crypto.createHash('sha256').update(i+"").digest('hex');

  if(hash.startsWith('00000')) break;

  i++;
}
console.log(i);