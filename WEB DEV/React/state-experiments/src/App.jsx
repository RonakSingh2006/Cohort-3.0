import Circuit from "./Components/Circuit";

import BulbProvider from "./store/BulbStore/BulbProvider";

function App() {

  return <>
    <BulbProvider>
      <Circuit/>
    </BulbProvider>
  </>

}
export default App
