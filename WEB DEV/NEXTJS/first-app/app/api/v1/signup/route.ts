import { NextResponse } from "next/server";

import {prisma} from "../../../lib/prisma"

export async function POST(req : NextResponse){

  const {username,password} = await req.json();

  await prisma.user.create({
    data : {
      username,
      password
    }
  })

  return NextResponse.json({
    message : "Signed Up"
  })
}