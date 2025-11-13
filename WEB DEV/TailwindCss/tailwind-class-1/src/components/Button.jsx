function Button({enabled,onClick,children,className}){

  return <span className={`cursor-pointer ${enabled ? 'bg-green-400' : 'bg-blue-320'} text-white px-20 py-2 rounded-md ${className}`} onClick={onClick}>
    {children}
  </span>
}
export default Button;