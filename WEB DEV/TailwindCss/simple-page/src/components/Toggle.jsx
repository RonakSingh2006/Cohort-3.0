import { useState } from "react";
import { HiOutlineSun } from "react-icons/hi";
import { FaMoon } from "react-icons/fa";

function Toggle(){
  const [dark,setDark] = useState(true);
  return <div className="cursor-pointer m-2" onClick={()=>{
    if(document.querySelector("html").classList.contains("dark")){
      setDark(false);
      document.querySelector("html").classList.remove("dark");
    }
    else{
      document.querySelector("html").classList.add("dark");
      setDark(true);
    }
  }}>
    {dark ? <HiOutlineSun className="text-yellow-400" size={50}/> : <FaMoon className="text-white" size={45}/>}
  </div>
}

export default Toggle;