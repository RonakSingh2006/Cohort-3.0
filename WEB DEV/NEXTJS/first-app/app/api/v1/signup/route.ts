import { NextResponse } from "next/server";

export async function POST(req : NextResponse){

  const {username,password} = await req.json();

  console.log(username,password);

  return NextResponse.json({
    message : "Signed Up"
  })
}