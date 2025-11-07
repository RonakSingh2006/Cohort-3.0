import Bulb from "./Bulb"
import Toggle from "./Toggle"

function Circuit({on,toggle}){
  return <>
    <Bulb on={on}/>
    <Toggle toggle={toggle}/>
  </>
}

export default Circuit;