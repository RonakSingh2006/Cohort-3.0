import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port : 8080});

wss.on('connection',(socket)=>{
  console.log('User Connected');

  socket.on('message',(e)=>{

    const messageString = e.toString();;

    const words = messageString.split(" ");

    const newWords = words.map((e)=>reverse(e));

    socket.send(JSON.stringify({
      data : newWords.join(" "),
      type : 'server'
    }));


  })

})


function reverse(s : String) :String{
  let charArr = s.split("").reverse();

  return charArr.join("");
}