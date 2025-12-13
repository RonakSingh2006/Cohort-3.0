"use client"

import {Button} from "@repo/ui/button"

export default function Home() {
  return <div style={{backgroundColor : "black",width : "100vw" , height : "100vh" , display : "flex" , justifyContent : "center" ,
    alignItems : "center"
  }}>

    <div>
      <input type="text" placeholder="Room Id" id="room" />
      <Button onClick={()=>{console.log("Joined Room")}}>Join</Button>
    </div>

  </div>
}
