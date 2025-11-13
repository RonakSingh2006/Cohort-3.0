function Input({type,placeholder,className}){
  return <>
    <input type={type} className={`bg-blue-420 py-2 rounded-md pr-8 pl-2 text-white outline-none ${className}`} placeholder={placeholder}/>
  </>
}
export default Input;