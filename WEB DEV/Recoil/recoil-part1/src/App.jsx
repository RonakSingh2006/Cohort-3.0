import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import counterAtom from "./store/atoms/counterAtom";

function App() {
  return <>
    <RecoilRoot>
      <Count/>
      <Increase/>
      <Decrease/>
    </RecoilRoot>
  </>
}


function Increase(){
  const setCount = useSetRecoilState(counterAtom)
  return <>
    <button onClick={()=>setCount(prev=>prev+1)}>Increase</button>
  </>
}

function Decrease(){
  const setCount = useSetRecoilState(counterAtom)
  return <>
    <button onClick={()=>setCount(prev=>prev-1)}>Decrease</button>
  </>
}

function Count(){
  const count = useRecoilValue(counterAtom);
  return <div>{count}</div>
}

export default App