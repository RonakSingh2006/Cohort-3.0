interface User{
  id: string,
  name : string,
  age: string,
  email: string,
  password: string
}

// Pick used to get crop the interface/type
type UpdateProp = Pick<User,"name"|"age">

function display(data :UpdateProp){
  console.log(data.age,data.name);
}


// Exclued use to remove a specific val

type Event = "scroll" | "click" | "dbclick";

type UpdateEvent = Exclude<Event,"dbclick">

function call(event :UpdateEvent){
  console.log(event);
}

// call("dbclick");


// Partial use to make all attributes optional

type UpdatePropOptional = Partial<UpdateProp>

// readonly is used to make attribute readonly


interface Admin {
  readonly username : string,
  readonly password : string
}

// Or

type UserReadOnly = Readonly<User>



// To give type to object

// Hard way
interface Person {
  [key : string] :number
}

// Easy way

type Ages = Record<string,number>

let obj :Person= {
  "ronak" : 19,
  "aaditya" : 12
}

let obj2 :Ages= {
  "ronak" : 19,
  "aaditya" : 12
}

// In zod we can infer the type of it using 

// type Schema = z.infer(typeof Schema);