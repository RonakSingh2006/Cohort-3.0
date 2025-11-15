import ProfilePhoto from "./ProfilePhoto"

function Profile({url}){
  return <div className="flex flex-col bg-gray-600 h-96 w-5/6 items-center justify-center gap-5 rounded-xl z-10 absolute left-[9%] -top-10">
    <ProfilePhoto url={url} size={"120px"}/>

    <Data name={"Turtle Topi"} email={"hybridtutle565623@turt.tom"} mobile={565623569845} location={"TurtleCity,Pluto"}></Data>

  </div>
}

function Data({name,email,mobile,location}){
  return <div>
    <div className="font-bold text-lg text-center my-3">{name}</div>
    <div className="text-xs text-center my-1">{email}</div>
    <div className="text-xs text-center my-1">{mobile}</div>
    <div className="text-center my-3">{location}</div>
  </div>

}

export default Profile;