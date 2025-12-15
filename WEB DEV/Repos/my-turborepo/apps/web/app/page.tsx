"use client"

import {Button} from "@repo/ui/button"
import { Input } from "@repo/ui/Input"
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Home() {

  const inputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  return <div style={
    {backgroundColor : "black",
      width : "100vw" ,
      height : "100vh" ,
      display : "flex" ,
      justifyContent : "center" ,
      alignItems : "center"
    }}>

    <div style={{display : "flex", flexDirection : "column" , gap : "5px", alignItems : "center"}}>
      <Input placeholder="Room Id" ref={inputRef}/>
      <Button onClick={()=>{
        const roomId = inputRef.current?.value;
        router.push(`/rooms/${roomId}`);

      }}>Join</Button>
    </div>

  </div>
}
