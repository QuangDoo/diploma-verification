import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const origin =
    req.headers.get('origin') ||
    req.headers.get('referer') ||
    'http://localhost:3000';

  // Lưu giá trị origin vào cookie để sử dụng sau này
  const response = NextResponse.next();
  response.cookies.set('origin', origin);

  return response;
}

export const config = {
  matcher: ['/api/:path*'], // Áp dụng middleware cho tất cả các API routes
};
