import useCounter from "./hooks/useCounter"

function App() {
  const [count,incCount] = useCounter();

  return <>
    <div>{count}</div>

    <button onClick={incCount}>Click</button>
  </>
}

export default App
