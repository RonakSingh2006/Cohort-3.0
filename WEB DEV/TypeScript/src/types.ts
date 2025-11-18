// It is same as interface but we can also perform 
// intersection and union

type GoodUser = {
  name : string,
  gift : string
}

type BadUser = {
  name : string,
  ip : string
}


// Intersection 
// The user will have all the property

// But we know that internstion means the value that are common in both should contain
// But in type script the type gooduser does not limit that it must contain only name and gift it may contain other values
// similarly in baduser also it may contain other values
// now the intersion will the name , gift and ip 


type User = GoodUser | BadUser;


let ronak:User = {
  name : "Ronak",
  gift : "Nice Gift",
  ip : "127.0.0.1"
}

let dhoni:User = {
  name : "Ronak",
  gift : "Nice Gift"
}

console.log(ronak,dhoni);



// Union
// It is simple wwe just take the union of both varaibles

type Hacker = GoodUser & BadUser;

let rohit:Hacker = {
  name : "Ronak",
  gift : "Nice Gift",
  ip : "127.0.0.1"
}


console.log(rohit);

