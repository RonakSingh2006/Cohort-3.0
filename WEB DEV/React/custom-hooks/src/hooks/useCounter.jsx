import { useState } from "react";

function useCounter(){
  const [count,setCount] = useState(0);

  function incCount(){
    setCount(prev => prev + 1);
  }


  return [count , incCount]

}

export default useCounter;