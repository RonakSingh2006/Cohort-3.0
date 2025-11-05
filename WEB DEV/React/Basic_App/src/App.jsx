import { useState } from "react"

function App() {

  const [count,setCount] = useState(0);
  const [color , setColor] = useState('red');

  const random = ()=>{
    return Math.random()*255 + 1;
  }

  const Clicked = ()=>{
    setCount(count + 1);
    setColor(`rgb(${random()},${random()},${random()})`);
  }
  
  return (
    
    <>
      <button onClick={Clicked} style={{backgroundColor : color}} >count {count}</button>
    </>
  )
}

export default App
