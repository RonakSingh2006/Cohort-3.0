// import useCounter from "./hooks/useCounter"
// import useFetch from "./hooks/useFetch";
// import usePrev from "./hooks/usePrev";

import { useRef } from "react"
import useDebounce from "./hooks/useDebounce";

function App() {

  // const [count,incCount] = useCounter(1);

  // const [data,loading] = useFetch(`https://dummyjson.com/products/${count}`,10);

  // const prev = usePrev(count);


  const ref = useRef();

  function backend(){
    console.log(ref.current.value);
  }

  const debounceBackend = useDebounce(backend,3);
  

  return <>

    {/* Code for useCounter Test  */}
    {/* <button onClick={incCount}>Count : {count}</button> */}

    {/* Code for useFetch*/}
    {/* <div>
      {loading ? <h1>Loading....</h1> : <p>fetched data is : {JSON.stringify(data)}</p>}
    </div> */}

    {/* Code for usePrev  */}
    {/* <div>Prev value : {prev}</div> */}


    {/* Code for useDebounceTest  */}
    <input type="text"  ref = {ref} onChange={debounceBackend}/>
    
  </>
}

export default App
