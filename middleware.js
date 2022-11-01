import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-resigned', 'true');
  requestHeaders.set('x-left-office', 'true');

  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });
}
