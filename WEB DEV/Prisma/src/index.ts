import { prisma } from './lib/prisma.js'

async function main() {
  await prisma.user.create({
    data : {
      usename : "RandomAccount",
      password : "Random@3214",
      age : 19
    }
  })
}

main();