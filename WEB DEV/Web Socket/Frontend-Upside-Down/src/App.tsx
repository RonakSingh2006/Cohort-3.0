import { useEffect, useRef, useState } from "react";

interface Message{
  data : string,
  type : 'user' | 'server'
}


function App(){
  
  const socketRef = useRef<WebSocket>(null);

  const messageRef = useRef<HTMLInputElement>(null);

  const [messages,setMessages] = useState<Message[]>([]);


  useEffect(()=>{
    const ws = new WebSocket('ws://localhost:8080');

    socketRef.current = ws;

    ws.onmessage = (e)=>{

      const chat = JSON.parse(e.data);

      setMessages(prev => [...prev,chat]);
    }

  },[])


  function send(){
    const message = messageRef.current?.value;

    if(socketRef.current && message){
      
      const chat :Message = {
        data : message,
        type : "user"
      }

      setMessages([...messages,chat]);

      socketRef.current.send(message);

      if(messageRef.current) messageRef.current.value = "";
    }
    
  }

  return <>
    <div className="w-screen min-h-screen bg-gray-400">

      {messages.map(e=><Chat data={e.data} type={e.type} />)}

      <div className="h-20">

      </div>

    </div>

    <div className="h-14 w-screen fixed bottom-2 left-0 flex justify-center items-center">
      <div className="w-1/2 h-12 flex items-center gap-32 justify-center">
        <input type="text" placeholder="Enter Your Message ...." className="bg-gray-300 text-xl w-1/2 p-2 rounded-md outline-none"  ref={messageRef}/>
        <button className="bg-cyan-600 px-5 py-1 text-2xl rounded-md cursor-pointer" onClick={send}>Send</button>
      </div>
    </div>
  </>
}


function Chat({data,type}: Message){

  return <div className={`w-screen min-h-16 flex ${type === 'user' ? "justify-end" : "justify-start"}`}>
    <div className={`min-w-48 max-w-1/2 p-2 ${type === "user" ? "bg-green-500" : "bg-blue-500" } my-2 mx-5 text-center rounded-md`}>
      {data}
    </div>
  </div>


}

export default App;