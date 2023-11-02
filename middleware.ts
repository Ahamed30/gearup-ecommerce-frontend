import { NextRequest, NextResponse } from "next/server";
import { getSession } from "next-auth/react";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const { nextUrl } = request;

  const requestForNextAuth = {
    headers: {
      cookie: request.headers.get("cookie") ?? undefined,
    },
  };

  const session = await getSession({ req: requestForNextAuth });

  if (nextUrl.pathname === "/checkout" && !session) {
    const origPathName = nextUrl.pathname;

    nextUrl.pathname = "/auth/login";

    nextUrl.searchParams.set("returnTo", origPathName);

    return NextResponse.redirect(nextUrl);
  }

  if (nextUrl.pathname.startsWith("/auth") && session) {
    nextUrl.pathname = "/";
    return NextResponse.redirect(nextUrl);
  }

  return response;
}

export const config = {};
