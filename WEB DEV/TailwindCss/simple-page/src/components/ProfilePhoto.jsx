function ProfilePhoto({url,size}){
  return <div>
    <img src={url} alt="Profile Image" width={size} className="rounded-md"/>
  </div>
}

export default ProfilePhoto;