import { useRef, useState } from "react";

function Clock(){

  const [count , setCount] = useState(0);

  let timerRef = useRef();

  function startHandler(){
    let timer = setInterval(()=>{
      setCount(c => c + 1);
    },1000);

    timerRef.current = timer;
  }

  function stopHandler(){
    clearInterval(timerRef.current);
  }

  return <>
    <div>
      {count}
    </div>

    <button onClick={startHandler}>Start</button>
    <button onClick={stopHandler}>Stop</button>
  </>


}
export default Clock;