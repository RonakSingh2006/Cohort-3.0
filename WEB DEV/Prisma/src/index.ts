import { prisma } from './lib/prisma.js'

async function main() {
  // await prisma.user.create({
  //   data : {
  //     usename : "RandomAccount",
  //     password : "Random@3214",
  //     age : 19
  //   }
  // })


  const user = await prisma.user.findFirst({
    where : {
      id : 1
    },
    include : {
      todos : true
    } 
  })

  console.log(user);
}

main();