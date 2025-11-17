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