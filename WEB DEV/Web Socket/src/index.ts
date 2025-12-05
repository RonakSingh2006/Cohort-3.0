import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port : 8080});

wss.on('connection',(socket)=>{
  console.log("user connectd");

  setInterval(()=>{socket.send(`Current Price of Solana is ${Math.floor(Math.random()*1000)}$`);},5000);


  socket.on('message',(e)=>{
    console.log(e.toString());

    socket.send(e.toString());
  })
})