// With out recoil also we can use the memo in react to prevent it frrom re render

import { useEffect, useState , memo } from "react";

function App2(){
  const [count,setCount] = useState(0);

  useEffect(()=>{
    const timer = setInterval(()=>{
      setCount(prev=>prev+1);
  },5000);

  return function(){
    clearInterval(timer);
  }

  },[]);

  return <div>
    <div>{count}</div>
    <MemoizedName/>
    <MemoizedAge/>
  </div>
}

const MemoizedName = memo(Name);

function Name(){
  return <h1>Ronak Singh</h1>
}



const MemoizedAge = memo(function Age(){

  return <div>Age : 20</div>
});

export default App2;

// When the parent rerender its child rerender to prevent this we sue memo