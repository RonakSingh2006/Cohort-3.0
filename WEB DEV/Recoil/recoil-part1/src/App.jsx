import { createContext, useContext, useState } from "react"

const CountContext  = createContext();

function App() {
  const [count , setCount] = useState(0);

  return <>
    <CountContext.Provider value={{count,setCount}}>
      <Count/>
      <Increase/>
      <Decrease/>
    </CountContext.Provider>
  </>
}


function Increase(){
  const {setCount} = useContext(CountContext);
  return <>
    <button onClick={()=>setCount(prev=>prev+1)}>Increase</button>
  </>
}

function Decrease(){
  const {setCount} = useContext(CountContext);
  return <>
    <button onClick={()=>setCount(prev=>prev-1)}>Decrease</button>
  </>
}

function Count(){
  const {count} = useContext(CountContext);
  return <div>{count}</div>
}

export default App
