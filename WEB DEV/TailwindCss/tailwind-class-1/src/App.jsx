import { useState } from "react"
import Button from "./components/Button"
import Input from "./components/Input"
import Title from "./components/Title"
import Heading from "./components/Heading";
import Description from "./components/Description";
import Otp from "./components/Otp";
function App() {
  const [enabled,setEnabled] = useState(false);
  return <div className="bg-blue-120 h-screen flex justify-center">
    <div className="flex flex-col items-center">

      <Title title={"Webinar.gg"} className="m-20"/>
      <Heading className={"mb-16"}>Verify Your Age</Heading>

      <Description>Please confirm your birth year this data will not be stored</Description>
      
      <Input placeholder={"Your Birth Year"} type={"text"} className={"m-5"}/>

      <Otp setEnabled={setEnabled} size={5}/>
    
      <Button enabled={enabled} onClick={()=>setEnabled(prev => !prev)} className={"m-5"}>Continue</Button>
    </div>
  </div>
}

export default App
