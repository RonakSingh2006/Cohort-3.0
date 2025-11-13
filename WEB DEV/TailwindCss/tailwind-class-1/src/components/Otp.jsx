import { useRef, useState } from "react";
function Otp({size , setEnabled}){
  
  const ref = useRef(Array(size).fill(0)); // make array of size and fill with 0

  return <div className="flex">
    {Array(size).fill(1).map((e,idx)=>
      <Box reference={e=>ref.current[idx] = e} key={idx} 
      goBack={()=>{

        if(idx-1 >= 0){
          if(idx == size-1){
            setEnabled(false);
          }
          ref.current[idx-1].focus();
        }
      }}
      goFront={()=>{
        if(idx + 1 == size){
          setEnabled(true);
        }
        else{
          ref.current[idx+1].focus();
        }
      }}
      />
    )}
  </div>
}


function Box({reference , goFront , goBack}){
  const [val,setVal] = useState("");
  return <input 
        type="text" 
        className="h-10 w-8 bg-blue-420 m-1 rounded-md outline-none text-white text-center"
        value = {val}
        onKeyDown={(e)=>{
          if(e.key === "Backspace"){
            setVal("");
            goBack()
          }
          else if(!isNaN(e.key) && e.key !== ' '){
            setVal(e.key);
            goFront();
          }
        }}
        ref = {reference}
        />
}

export default Otp;