import {prisma} from "@repo/db/prisma";

export default async function Home(){
  const users = await prisma.user.findMany({});
  return <div>
    {JSON.stringify(users)}
  </div>
}

// export const revalidate = 60;  // revalidate after 60s <--- Better
// or
export const dynamic = 'force-dynamic' // To Make site dynamic after build revalidate after 0s