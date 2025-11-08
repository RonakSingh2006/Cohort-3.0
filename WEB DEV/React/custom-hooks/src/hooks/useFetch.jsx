import { useEffect, useState } from "react";

function useFetch(url){
  const [data,setData] = useState({});
  const [loading , setLoading] = useState(false);

  async function getData(){
    setLoading(true);
    const respone = await fetch(url);
    const jsonData = await respone.json();

    setData(jsonData);
    setLoading(false);
  }
  
  useEffect(()=>{
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[url]);

  return [data,loading];
}

export default useFetch;