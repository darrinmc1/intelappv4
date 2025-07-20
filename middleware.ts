import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Redirect requests to /(main) to /main
  if (request.nextUrl.pathname === '/(main)') {
    return NextResponse.redirect(new URL('/main', request.url));
  }
  
  // Redirect root to /main
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/main', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/(main)'],
};