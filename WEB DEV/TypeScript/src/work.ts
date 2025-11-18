type User = {
  name : string,
  password : string
}

type Admin = {
  name : string,
  password : string,
  role : string
}

function hello(user : User | Admin){
  console.log('Hello'+user.name);
}


let ronak :User = {
  name : "Ronak",
  password : "temp%%$$@123"
}


hello(ronak);