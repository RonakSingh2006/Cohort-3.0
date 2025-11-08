import useCounter from "./hooks/useCounter"
import useFetch from "./hooks/useFetch";

function App() {
  const [count,incCount] = useCounter(1);
  const [data] = useFetch(`https://dummyjson.com/products/${count}`);

  return <>
    <button onClick={incCount}>Count : {count}</button>

    <div>
      fetched data is : {JSON.stringify(data)}
    </div>
  </>
}

export default App
