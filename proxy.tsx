import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function proxy(request: NextRequest) {
  //get pathname
  const pathname = request.nextUrl.pathname;

  //check if the user is trying to access a protected route
  if (pathname.startsWith("/app")) {
    //validate
    const token = await getToken({ req: request });

    if (!token) return NextResponse.redirect(new URL("/login", request.url));
  }

  // Add pathname to headers for later use in the login/register layout
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);
  // Continue with the request and include the modified headers
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
