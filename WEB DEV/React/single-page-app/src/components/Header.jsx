import { Link } from "react-router-dom"

function Header(){
  return <>
    <Link to="/">Home | </Link>
    <Link to="java">Java | </Link>
    <Link to="java-script">JS</Link>
  </>
}

export default Header;