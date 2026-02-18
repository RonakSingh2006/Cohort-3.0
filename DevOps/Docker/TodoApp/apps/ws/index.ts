import {WebSocketServer} from "ws"
import {prisma} from "@repo/db/prisma"

const wss = new WebSocketServer({port : 8080});


wss.on("connection",(socket)=>{
  console.log("User Connected");

  socket.on("message",async (data)=>{

    const parsedData = data.toString();

    console.log(parsedData);
    
    if(parsedData == "users"){
      const users = await prisma.user.findMany({});

      socket.send(JSON.stringify(users));

    }
    else socket.send("hello");
  })

  socket.send("Connected");
})