import {prisma} from "db/client"
export default async function Home(){
  const users = prisma.user.findMany();

  return <div>
    {JSON.stringify(users)}
  </div>
}