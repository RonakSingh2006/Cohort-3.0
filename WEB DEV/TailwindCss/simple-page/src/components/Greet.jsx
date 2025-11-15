function Greet({name}){
  return <div className="w-full h-1/6 text-lg">
    <div className="p-2">Monday, 14 October</div>
    <div className="text-2xl text-blue-950 font-bold p-2">Good Morning, {name}! 👋</div>
  </div>
}

export default Greet;