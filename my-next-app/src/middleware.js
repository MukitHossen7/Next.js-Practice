import { NextResponse } from "next/server";

const isLoggedIn = true;
export function middleware(request) {
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/home", request.url));
  }
}
export const config = {
  matcher: "/about",
};
