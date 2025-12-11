'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function SignUp(){

  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  async function SignUp(){
    const username = userNameRef.current?.value;
    const password = passwordRef.current?.value;

    await axios.post("http://localhost:3000/api/v1/signup",{
      username,
      password
    })


    if(userNameRef.current){
      userNameRef.current.value = "";
    }

    if(passwordRef.current){
      passwordRef.current.value = "";
    }

    router.push("/signin");
  }

  return <div className="flex justify-center items-center mt-20">

    <div className="bg-gray-600 h-96 w-96 rounded-md">
      <div className="text-center text-4xl font-bold my-10">Sign Up</div>

      <div className="flex flex-col items-center gap-5 justify-center mt-20">
        <input type="text" placeholder="Username" className="px-5 py-2 bg-gray-100 rounded w-56 text-black outline-none" ref={userNameRef}/>
        <input type="text" placeholder="Password" className="px-5 py-2 bg-gray-100 rounded w-56 text-black outline-none" ref={passwordRef}/>
      </div>

      <div className="flex justify-center mt-10">
        <button onClick={SignUp} className="bg-blue-600 px-5 py-2 rounded cursor-pointer">Sign Up</button>
      </div>
    </div>
    
  </div>
}