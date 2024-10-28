import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ACCESS_TOKEN_NAME } from 'constants/api';
import { jwtDecode } from 'jwt-decode';

export async function middleware(request: NextRequest) {
  let cookie = await request.cookies.get(ACCESS_TOKEN_NAME);

  const token = await cookie?.value;

  if (!token || !cookie) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  const user = await jwtDecode(token);

  if (!user) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/', '/categories']
};
