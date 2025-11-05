import "./task.css";

function Task({title,description,done}){  
  return <div id="task-box" className={done ? "done" : ""}>
    <h3>{title}</h3>
    <div>{description}</div>
    <button>Done</button>
    <button>Delete</button>
  </div>
}

export default Task;