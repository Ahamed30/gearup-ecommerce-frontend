import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const options = {
    name: "session_user",
    value: "",
    maxAge: -1,
  };

  cookies().delete(options);
  return NextResponse.json({}, { status: 200 });
}
