import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Language({lang}){
  // I have to make it redirect after 10s

  const navigate = useNavigate();

  useEffect(()=>{
    let timeout = setTimeout(()=>{navigate("/program")},10000);

    return function(){
      clearTimeout(timeout);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return <div>
    {lang}
  </div>
}

export default Language;