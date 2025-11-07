import { useState } from "react"
import Circuit from "./Components/Circuit";

function App() {

  const [on , toggle] = useState(false);

 return <>
  <Circuit on={on} toggle={toggle}/>
 </>
}

export default App
