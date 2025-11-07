import { useContext } from "react";
import BulbContext from "../store/BulbStore";

function Bulb(){

  const onUrl = "https://media.istockphoto.com/photos/isolated-shot-of-illuminated-light-bulb-on-white-background-picture-id480003160?k=6&m=480003160&s=170667a&w=0&h=xQQvhPkNOjUyMOHmM2_eDfW6WIFiCfhEb1wH68m4oEA=";
  const offUrl = "https://tse4.mm.bing.net/th/id/OIP.dTmDdvOWEO-0s7t0Z3Yr4gAAAA?rs=1&pid=ImgDetMain&o=7&rm=3";

  const bulbStyle = {
    height : "100px"
  }

  let {on} = useContext(BulbContext)

  return <>
    {on ? <img src={onUrl}  style={bulbStyle}></img> : <img src={offUrl} style={bulbStyle} ></img>}
  </>


}

export default Bulb;