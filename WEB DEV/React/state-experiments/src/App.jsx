import { useState } from "react"
import Circuit from "./Components/Circuit";

import { BulbProvider } from "./store/BulbStore";

function App() {

  const [on , toggle] = useState(false);

  return <BulbProvider value = {{on,toggle}}>
    <Circuit/>
  </BulbProvider>

}
export default App
