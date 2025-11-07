import { BrowserRouter , Routes , Route  } from "react-router-dom"
import Home from "./components/Home"
import Language from "./components/Language"
import Layout from "./components/Layout"
import Error from "./components/Error"
import Clock from "./components/Clock"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/program" element={<Layout/>}>

          <Route path = "/program/" element = {<Home/>} />
          <Route path = "/program/java" element = {<Language lang={"Java"}/>} />
          <Route path = "/program/java-script" element = {<Language lang={"Java Script"}/>} />
          <Route path = "*" element = {<Error/>} />

        </Route>
        <Route path = "/clock" element = {<Clock/>}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App
