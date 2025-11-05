import { useState , useRef } from "react"
import Task from "./components/Task";

function App() {
  
  const [todo , setTodo] = useState([]);

  const inpTitle = useRef();
  const inpDesc = useRef();

  return (
    <>

      <input type="text" placeholder="Enter your title" ref={inpTitle}/>
       <input type="text" placeholder="Enter your task description" ref={inpDesc}/>

      <button onClick={()=>{

        setTodo([...todo,{
          title : inpTitle.current.value,
          description : inpDesc.current.value,
          done : false
        }])

        inpTitle.current.value = ""
        inpDesc.current.value = ""

      }}>Add</button>

      {todo.map((e) => <Task key={e.title} title={e.title} description={e.description} done={e.done} /> )}

    </>
  )
}

export default App
