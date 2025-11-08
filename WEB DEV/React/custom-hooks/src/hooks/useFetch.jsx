import { useEffect, useState } from "react";

function useFetch(url){
  const [data,setData] = useState({});

  async function getData(){
    const respone = await fetch(url);
    const jsonData = await respone.json();

    setData(jsonData);
  }
  
  useEffect(()=>{
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[url]);

  return [data];
}

export default useFetch;