import { create } from "zustand";

type Course  = {
  id : string,
  title : string
}

type CourseStore = {
  courses : Course[],
  addCourse : (course : Course) => void,
  removeCourse : (course : Course) => void
}

const useCourseStore = create<CourseStore>((set)=>({
  courses : [],
  addCourse : (course)=>{
    set((state)=>({
      courses : [course , ...state.courses]
    }))
  },
  removeCourse : (course) => {
    set((state)=>({
      courses : state.courses.filter((e)=> e.id !== course.id)
    }))
  }
}))

export {useCourseStore}