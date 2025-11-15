import { IoCalendarNumberOutline } from "react-icons/io5";
import { FaAngleDown,FaArrowRight , FaArrowLeft , FaCaretSquareRight } from "react-icons/fa";

function Schedule(){
  return <div className="dark:bg-gray-700 bg-white w-full h-4/6 rounded-xl">
    <Head/>
    <Task time={"11:30 AM"} task={"UX Webinar"}></Task>
    <Task time={"12:30 PM"} task={"My First Webinar"}></Task>
    <Task time={"1:30 PM"} task={"Important Webinar"}></Task>
    <Task time={"3:30 PM"} task={"Webinar 1"}></Task>
    <Task time={"4:30 PM"} task={"DSA Webinar"}></Task>
  </div>
}

function Head(){
  return <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 m-2">
        <IoCalendarNumberOutline />
        Monday,14 October 2024 
        <FaAngleDown />
      </div>

      <div className="flex gap-3 m-2">
        <FaArrowLeft/>
        <FaArrowRight />
      </div>

  </div>
}

function Task({time,task}){
  return <div className="flex dark:bg-gray-800 bg-gray-400 rounded-md p-1 my-5 mx-2 gap-2 text-gray-300">
    <div className="w-1/6">
      <div className="text-xl">{time}</div>
      <div className="text-xs">{time}</div>
    </div>

    <div className ="w-5/6 mx-2">
      <div className="flex items-center gap-2 text-sm">Live <FaCaretSquareRight /></div>
      <div className="text-xl font-semibold">{task}</div>
    </div >
  </div>
}
export default Schedule;