import { useContext } from "react";
import BulbContext from "../store/BulbStore";

function Toggle(){

  let {toggle} = useContext(BulbContext)

  return <>
    <button onClick={()=>{
      toggle(prev => !prev)
    }}>Tooggle</button>
  </>

}

export default Toggle;