// "use client"
import { getServerSession } from "next-auth";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
export default function Home() {
  return <SessionProvider>
    <Dashboard/>
  </SessionProvider>
}



async function Dashboard(){
  // const session = useSession();
  const session = await getServerSession();
  return <div>
    {/* {session.status === "authenticated" ? <button onClick={()=>{signOut()}}>Logout</button> : <button onClick={()=>{signIn()}}>Sign In</button>} */}

    {JSON.stringify(session)};

  </div>
}