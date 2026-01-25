export function ArrayToHex(arr : Uint8Array<ArrayBuffer>){
  let output = '';
  arr.forEach(x => {
    output += x.toString(16).padStart(2,'0');
  })

  return output;
}