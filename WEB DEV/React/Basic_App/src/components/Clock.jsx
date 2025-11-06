import {useEffect,useState} from "react";


function Clock(){

  const [visible , setVisible] = useState(true);

  useEffect(()=>{
    let interval = setInterval(()=>{
      setVisible(c=> !c);
    },5000)

    return function(){
      clearInterval(interval);
    }
  },[])

  return <>
    {visible && <ClockRender/>}
  </>

}


function ClockRender(){

  const [count,setCount] = useState(0);
  
  // Mount
  useEffect(()=>{

    console.log("mount");
    let clock = setInterval(()=>{
      setCount(c=>c+1);
    },1000);

    // unmount
    return function(){
      console.log("Unmount");
      clearInterval(clock);
    }

  },[]);

  return <>
    <h1>{count}</h1>
  </>
}

export default Clock;