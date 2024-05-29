import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const { nextUrl } = request;

  const sessionUser = request.cookies.get("session_user");

  if (sessionUser) {
    response.cookies.set("session_user", String(sessionUser.value));
  } else {
    response.cookies.delete("session_user");
  }

  if (nextUrl.pathname === "/checkout" && !sessionUser) {
    nextUrl.pathname = "/auth/login";

    return NextResponse.redirect(nextUrl);
  }

  if (sessionUser && nextUrl.pathname.startsWith("/auth")) {
    nextUrl.pathname = "/";
    return NextResponse.redirect(nextUrl);
  }

  return response;
}
