import { BrowserRouter , Routes , Route  } from "react-router-dom"
import Home from "./components/Home"
import Language from "./components/Language"
import Layout from "./components/Layout"
import Error from "./components/Error"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>

          <Route path = "/" element = {<Home/>} />
          <Route path = "/java" element = {<Language lang={"Java"}/>} />
          <Route path = "/java-script" element = {<Language lang={"Java Script"}/>} />
          <Route path = "*" element = {<Error/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App
