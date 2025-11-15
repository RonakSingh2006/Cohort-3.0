import Greet from "./Greet";
import Profile from "./Profile";
import Schedule from "./Schedule";
import Control from "./Control";
import Toggle from "./Toggle";

function Main({url}){  
  return <div className="w-full h-screen flex flex-col">
    {/* Banner  */}
    <div className="bg-[url('https://static.vecteezy.com/system/resources/previews/003/083/664/large_2x/dark-widescreen-banner-with-hexagons-vector.jpg')] w-full h-40">
    
    <Toggle/>
    
    </div>

    {/* Content  */}

    <div className="grid grid-cols-10 flex-1">

      <div className="col-span-2 md:block hidden dark:bg-gray-400 bg-gray-50 relative">
        <Profile url={url}/>
      </div>

      <div className="md:col-span-5 col-span-10 dark:bg-gray-400 bg-white">
        <Greet name={"Turtle"}/>
        <Schedule/>
      </div>

      <div className="md:col-span-3 col-span-10 dark:bg-gray-400 bg-gray-50 flex justify-center items-center">
        <Control/>
      </div>

    </div>

  </div>
}

export default Main;