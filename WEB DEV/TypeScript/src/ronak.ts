interface Person {
  name : string,
  age : number,
  addres? : Address
}

interface Address {
  city : string,
  state : string,
  pincode : number
}

function complexGreet(person : Person){
  console.log(`${person.name}   ${person.age}  ${JSON.stringify(person.addres)}`);
}


let ronak: Person = {
  name : "Ronak",
  age : 19,
  addres : {
    city : "Vadodara",
    state : "Gujarat",
    pincode : 39130
  }
}

let aaditya : Person = {
  name : "Aaditya",
  age : 13
}

complexGreet(ronak);
complexGreet(aaditya);


interface People {
  name : string,
  age : number,
  greet: ()=>string
}



let harkirat :People = {
  name : "Harkirat",
  age : 32,
  greet : ()=>{return "Hello"}
}

console.log(harkirat.greet());


// Same java interface

class Human implements People{
  name:string;
  age:number
  constructor(name: string , age: number){
    this.name = name;
    this.age = age;
  }

  greet = () => {
    return `hello ${this.name}`
  } 

  help = ()=>{
    return 5
  }

}


let nh:Human = new Human("Ronak",19);

console.log(nh.greet())