console.log("Hello via Bun!");

import {prisma} from "./lib/prisma"

await prisma.user.create({
  data : {
    username : "RonakSingh2006",
    password : "Ronak@2006"
  }
})