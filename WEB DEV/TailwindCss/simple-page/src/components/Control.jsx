import { RiCalendarScheduleFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { FaDoorOpen } from "react-icons/fa";


function Control(){
  return <div className="flex flex-wrap gap-3 justify-evenly w-5/6 md:h-3/6 h-5/6 bg-gray-700 rounded-md">
    <Icon title={"Schedule Webinar"}>
      <RiCalendarScheduleFill size={50}/>
    </Icon>
    <Icon title={"Join Webinar"}>
      <IoMdAdd  size={50}/>
    </Icon>
    <Icon title={"Open Webinar"}>
      <FaDoorOpen size={50}/>
    </Icon>
  </div>
}

function Icon({children , title}){
  return <div className=" w-32 h-32 flex flex-col items-center justify-center gap-2">
    <div className="bg-cyan-700 w-16 h-16 flex justify-center items-center rounded-md">
      {children}
    </div>
    <div className="text-sm font-semibold">
      {title}
    </div>
  </div>
}

export default Control;