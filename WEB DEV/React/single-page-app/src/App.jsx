import { BrowserRouter , Routes , Route , Link } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Link to="/">Home | </Link>
      <Link to="java">Java | </Link>
      <Link to="java-script">JS</Link>

      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/java" element = {<Language lang={"Java"}/>} />
        <Route path = "/java-script" element = {<Language lang={"Java Script"}/>} />
      </Routes>
    </BrowserRouter>
  )
}


function Home(){
  return <div>
    Home
  </div>
}

function Language({lang}){
  return <div>
    {lang}
  </div>
}

export default App
