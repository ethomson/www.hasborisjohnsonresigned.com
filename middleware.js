import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request) {
  if (request.nextUrl.pathname === '/') {
    const resigned = false;

    return NextResponse.rewrite(new URL(resigned ? '/yes' : '/no', request.url))
  }
  else if (request.nextUrl.pathname === '/yes' || request.nextUrl.pathname === '/no') {
    return NextResponse.rewrite(new URL('/404', request.url))
  }
}
