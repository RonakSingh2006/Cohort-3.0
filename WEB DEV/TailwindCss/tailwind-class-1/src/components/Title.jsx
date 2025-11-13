function Title({title,className}){
  let sp = title.split(".");
  return <div className={`flex justify-center ${className}`}>
    <span className="text-green-120 text-2xl">{sp[0]}</span>
    <span className="text-white text-2xl">.{sp[1]}</span>
  </div>
}

export default Title;