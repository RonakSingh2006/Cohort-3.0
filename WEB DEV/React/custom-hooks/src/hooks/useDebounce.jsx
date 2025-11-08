import { useRef } from "react";
function useDebounce(fn , debounceTime ){
  
  const ref = useRef();
  
  return function(){
    clearTimeout(ref.current);

     ref.current = setTimeout(
      ()=>{
        fn();
      },debounceTime*1000);
  }
}

export default useDebounce;