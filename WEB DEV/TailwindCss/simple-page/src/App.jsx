import SideBar from "./components/SideBar"
import Main from "./components/Main"
const url = "https://wallpapers.com/images/hd/funny-discord-profile-pictures-hu79xvfemqiojlhd.jpg";

function App() {
  return <div className="flex">
    <SideBar/>
    <Main url = {url}/>
  </div>
}

export default App
