function Heading({children,className}){
  return <div className={`text-white text-xl font-bold text-center ${className}`}>
    {children}
  </div>
}

export default Heading;