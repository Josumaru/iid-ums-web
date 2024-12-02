import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/registration-innovation-talk')) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  if (request.nextUrl.pathname.startsWith('/registration-competition')) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}