import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(req) {
  const token = await getToken({ req });
  console.log(token);
  const isAdmin = token?.role === "admin";
  console.log(isAdmin)
  const adminRoute = req.nextUrl.pathname.startsWith("/dashboard");
  if (adminRoute && !isAdmin) {
    const callbackUrl = encodeURIComponent(req.nextUrl.pathname);
    return NextResponse.redirect(
      new URL(`/api/auth/signin?callbackUrl=${callbackUrl}`, req.url));
  }

  return NextResponse.next();
}
