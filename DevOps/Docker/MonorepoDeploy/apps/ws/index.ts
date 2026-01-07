import {WebSocketServer} from "ws"
import {prisma} from "db/client"

const wss = new WebSocketServer({port : 8080});

wss.on("connection",async (socket)=>{
  console.log("Connected");

  const user = await prisma.user.create({
    data : {
      username : Math.random().toString(),
      password : Math.random().toString()
    }
  })

  socket.on("message",(data)=>{
    console.log(data);

    prisma.todo.create({
      data : {
        task : data.toString(),
        done : false,
        userId : user.id
      }
    })
  })

  socket.send("Hello");
})