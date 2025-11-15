import ProfilePhoto from "./ProfilePhoto";
import { IoIosHome } from "react-icons/io";
import { FcConferenceCall } from "react-icons/fc";
import { FaRegCreditCard , FaUsersCog } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";



function SideBar(){
  return <div className="md:w-96 w-12 h-screen dark:bg-gray-900 bg-gray-100 border-r border-gray-200 transition-all duration-500 delay-75 ease-in-out ">
    <Head/>
    <Items/>
  </div>
}

function Head(){
  return <div className="h-20 flex justify-around md:mx-7 my-10 items-center" >
    <button className="dark:bg-blue-800 bg-blue-600 text-white px-8 py-2 rounded-md  hidden md:block">Welcome</button>
    
    <ProfilePhoto url="https://wallpapers.com/images/hd/funny-discord-profile-pictures-hu79xvfemqiojlhd.jpg" size={"45px"}/>
  </div>
}


function Items(){
  return <div className="my-16 flex flex-col gap-5 items-center">
    <Item title={'Home'}>
      <IoIosHome />
    </Item>
    <Item title={'Webinar'}>
      <FcConferenceCall />
    </Item>
    <Item title={'Billing'}>
      <FaRegCreditCard />
    </Item>
    <Item title={'User Management'}>
      <FaUsersCog />
    </Item>
    <Item title={'Settings'}>
      <CiSettings />
    </Item>

  </div>
}

function Item({title,children}){
  return <div className="dark:bg-gray-500 text-gray-700 bg-gray-200 flex md:m-4 m-1 md:p-3 p-1 md:w-64 justify-between rounded-md items-center">
    <div className="hidden md:block">{title}</div>
    <div>{children}</div>
  </div>
}

export default SideBar;