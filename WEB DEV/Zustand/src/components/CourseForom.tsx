import { useRef, useState } from "react";
import { useCourseStore } from "../app/courseStore";

function CourseForm() {
  const courses = useCourseStore((state)=>state.courses);
  const addCourse = useCourseStore((state)=>state.addCourse);
  const removeCourse = useCourseStore((state)=>state.removeCourse);
  const contains = useCourseStore((state)=>state.contains);

  const titleRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);

  const [err,setErr] = useState("");

  return <div>

    <div>
      <input type="text" placeholder="Enter Id" ref={idRef}/>

      <input type="text" placeholder="Enter Title" ref={titleRef}/>
    </div>

    <div>
      {courses.map((c)=><div key={c.id}>{c.title}</div>)}
    </div>

    <div>
      <button onClick={()=>{

        if(!titleRef.current || !idRef.current || titleRef.current.value === "" || idRef.current.value === ""){
          setErr("Please Enter Correct Data");
        }
        else if(contains(idRef.current.value)){
          setErr("Id Already Exsists");
        }
        else{
          addCourse({title : titleRef.current.value , id : idRef.current.value})
          setErr("");
        }
        
      }}>AddCourse</button>

      <button onClick={()=>{

        if(!titleRef.current || !idRef.current || titleRef.current.value === "" || idRef.current.value === ""){
          setErr("Please Enter Correct Data");
        }
        else{
          removeCourse({title : titleRef.current.value , id : idRef.current.value})
          setErr("");
        }
        
      }}>RemoveCourse</button>
    </div>

    <div>{err}</div>
  </div>
}

export default CourseForm;