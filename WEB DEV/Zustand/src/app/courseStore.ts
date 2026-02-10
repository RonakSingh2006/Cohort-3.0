import { create } from "zustand";

type Course  = {
  id : string,
  title : string
}

type CourseStore = {
  courses : Course[],
  addCourse : (course : Course) => void,
  removeCourse : (course : Course) => void,
  contains : (id : string) => boolean
}

const useCourseStore = create<CourseStore>((set,get)=>({
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
  },
  contains: (id) => {
    const state = get();
    return state.courses.some((c) => c.id === id);
  }
}))

export {useCourseStore}