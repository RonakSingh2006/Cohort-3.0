import { useState } from "react";

function useCounter(start){
  const [count,setCount] = useState(start);

  function incCount(){
    setCount(prev => prev + 1);
  }


  return [count , incCount]

}

export default useCounter;