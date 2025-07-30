import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g. /, /messages, /login)
  const { pathname } = request.nextUrl;

  // Define protected routes
  const protectedRoutes = ['/messages'];
  
  // Check if the current route is protected
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  );

  if (isProtectedRoute) {
    // Check for authentication token in localStorage is handled on client-side
    // For middleware, we'll let the page handle authentication and redirect
    // This middleware could be extended to validate JWT tokens from cookies
    
    // For now, we'll let the pages handle their own authentication logic
    return NextResponse.next();
  }

  return NextResponse.next();
}

// Configure matcher for specific paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
