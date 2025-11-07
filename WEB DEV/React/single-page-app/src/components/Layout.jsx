import { Outlet , Link } from "react-router-dom";

function Layout(){
  return <>
    {/* header  */}
    
    <Link to="/">Home | </Link>
    <Link to="java">Java | </Link>
    <Link to="java-script">JS</Link>

    <Outlet/>


    {/* here we can add footer  */}

  </>
}

export default Layout;