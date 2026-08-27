import { NextResponse } from "next/server";

// next.config redirects match case-insensitively, so a /Saint -> /saint rule
// there also catches /saint and loops. Middleware sees the exact pathname.
export function middleware(request) {
  if (request.nextUrl.pathname === "/Saint") {
    return NextResponse.redirect(new URL("/saint", request.url), 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/Saint"
};
