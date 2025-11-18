function getMax(arr : number[]){
  let max:number = -1;
  for(let x of arr){
    max = Math.max(max,x);
  }

  return max;
}

let arr: number[] = [5,9,5,6,8,19,18,17,15,14,23,26,52,12,14,96,32,58,45,68,75,85];

// console.log(getMax(arr));


interface User{
  firstName : string,
  lastName : string,
  age : number
}


function getValid(users : User[]) :User[]{
  let ans:User[] = [];
  for(let user of users){
    if(user.age >= 18){
      ans.push(user);
    }
  }

  return ans;
}



const users: User[] = [
  { firstName: "Ronak", lastName: "Singh", age: 19 },
  { firstName: "Aman", lastName: "Sharma", age: 22 },
  { firstName: "Neha", lastName: "Verma", age: 20 },
  { firstName: "Karan", lastName: "Patel", age: 24 },
  { firstName: "Riya", lastName: "Mehta", age: 21 },
  { firstName: "Sagar", lastName: "Yadav", age: 12 },
  { firstName: "Priya", lastName: "Gupta", age: 18 },
  { firstName: "Harsh", lastName: "Kumar", age: 25 },
  { firstName: "Anjali", lastName: "Chopra", age: 10 },
  { firstName: "Vikram", lastName: "Thakur", age: 16 }
];

console.log(getValid(users));