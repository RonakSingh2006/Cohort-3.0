import { useRef } from "react";
function useDebounce(fn , debounceTime ){
  
  const ref = useRef();
  
  return function(){
    clearTimeout(ref.current);

    ref.current = setTimeout(fn,debounceTime);
  }
}

export default useDebounce;