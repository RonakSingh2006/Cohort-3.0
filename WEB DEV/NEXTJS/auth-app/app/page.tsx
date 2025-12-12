"use client"
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
export default function Home() {
  return <SessionProvider>
    <Dashboard/>
  </SessionProvider>
}



function Dashboard(){
  const session = useSession();
  return <div>
    {session.status === "authenticated" ? <button onClick={()=>{signOut()}}>Logout</button> : <button onClick={()=>{signIn()}}>Sign In</button>}
  </div>
}