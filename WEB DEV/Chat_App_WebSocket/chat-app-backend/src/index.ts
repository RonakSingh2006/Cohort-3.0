import { WebSocketServer , WebSocket } from "ws";


const wss = new WebSocketServer({port : 8080});

const socketsMap = new Map<WebSocket,string>();

const rooms = new Map<string,WebSocket[]>();


wss.on('connection',(socket)=>{
  
  socket.on('message',(e)=>{
    const request = JSON.parse(e.toString());

    if(request.type === 'join'){
      const roomId = request.payload.roomId;
      socketsMap.set(socket,roomId);
      
      if(!rooms.has(roomId)){rooms.set(roomId,[])};

      rooms.get(roomId)?.push(socket);
    }

    if(request.type === 'chat'){
      const message = request.payload.message;

      const roomId = socketsMap.get(socket);

      if(roomId){
        rooms.get(roomId)?.forEach(s=>s.send(message));
      }
    }

  })

})