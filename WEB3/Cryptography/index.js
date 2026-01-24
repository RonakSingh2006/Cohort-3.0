import { ArrayToHex } from "./helper.js";
import bs58 from 'bs58'

// To reprsent byte array
const bytes = new Uint8Array([65,66,97,105,107,116,75,79,100,80])

// encoding convert to Unit8 array
const key = "GFHJKLDRTFYUIOKJHVGBNMagfhjknmbhgtr5678976rtyfghvbnmk+-vbjkhbn";
const encoded = new TextEncoder().encode(key);

console.log(encoded);

const decodedKey = new TextDecoder().decode(encoded);
console.log(decodedKey);


// decode the Unit8 Array
let bytesToAsciii = (bytes)=>{
  return new TextDecoder().decode(bytes);
}

console.log(bytesToAsciii(bytes));

// goroup of 4 bits
// hex 16 bit encoded

// const hexCode = Buffer.from(bytes).toString('hex');

const hexCode = ArrayToHex(bytes);
console.log(hexCode);

// group of 6 bits
// 64 bit encoded

const base64Encoded = Buffer.from(bytes).toString('base64');
console.log(base64Encoded);


// base 58 encoding remove the simliar char like 0lO from base64

const base58Encoded = bs58.encode(bytes);
console.log(base58Encoded);