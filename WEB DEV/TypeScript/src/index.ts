// npm i typescript
// npx tsc --init
// npx tsc -b to compile
// node inde.jx to run

function greet(name :string){
  return `Hello ${name}`;
}

function add(a:number , b:number):number {
  return a+b;
}

function delay(fn : ()=>void){
  setTimeout(fn,1000);
}

interface Person {
  name : string,
  age : number,
  addres : string
}

function complexGreet(person : Person){
  console.log(person.name + person.age + person.addres);
}


let ronak: Person = {
  name : "Ronak",
  age : 19,
  addres : "29 nehrupark society"
}


complexGreet(ronak)