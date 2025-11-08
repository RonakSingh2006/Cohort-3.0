import useCounter from "./hooks/useCounter"
// import useFetch from "./hooks/useFetch";
import usePrev from "./hooks/usePrev";

function App() {
  const [count,incCount] = useCounter(1);
  // const [data,loading] = useFetch(`https://dummyjson.com/products/${count}`,10);
  const prev = usePrev(count);

  return <>
    <button onClick={incCount}>Count : {count}</button>

    {/* <div>
      {loading ? <h1>Loading....</h1> : <p>fetched data is : {JSON.stringify(data)}</p>}
    </div> */}

    <div>Prev value : {prev}</div>
    
  </>
}

export default App
