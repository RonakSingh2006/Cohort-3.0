import { useState } from "react";

function Theme(){
  const [dark,setDark] = useState(true);
  return <>
    <button className="rounded m-5 p-2 dark:bg-white  bg-black dark:text-black text-white" onClick={
      ()=>{
        if(document.querySelector("html").classList.contains("dark")){
          document.querySelector("html").classList.remove("dark");
          setDark(false)
        }
        else{
          document.querySelector("html").classList.add("dark");
          setDark(true)
        }
      }
    }>{dark ? "White" : "Dark"}</button>
  </>
}
export default Theme;