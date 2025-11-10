import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import { countAtom, evenSelector } from "./store/atoms/countAtom"

function App() {

  return <>
    <RecoilRoot>
      <Buttons/>
      <Counter />
      <Even />
    </RecoilRoot>
  </>
}


function Buttons(){

  const setCount = useSetRecoilState(countAtom);

  return <div>
    <button onClick={()=>setCount(prev => prev+2)}>Increase</button>
    <button onClick={()=>setCount(prev => prev-1)}>Decrease</button>
  </div>
}

function Counter(){
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>
}

function  Even(){
  const even = useRecoilValue(evenSelector);
  return <div>
    {even ? "Even" : "Odd"}
  </div>
}

export default App
