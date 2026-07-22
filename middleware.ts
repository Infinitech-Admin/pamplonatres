import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;
  const { pathname } = request.nextUrl;

  // Public paths that don't require authentication
  const publicPaths = [
    "/",
    "/login",
    "/register",
    "/announcements",
    "/news",
    "/services",
    "/about",
    "/contact",
    "/cookies",
    "/terms",
    "/privacy",
  ];

  // Path PREFIXES that don't require authentication either.
  // These are pages where the user should be able to browse and fill out
  // a form freely — login is only enforced later, at submit time (inside
  // the page itself / the API route), not by the middleware.
  const publicPathPrefixes = [
    "/dashboard/citizen/report-issue",
    "/dashboard/citizen/services", // covers /services/barangay-clearance, etc.
  ];

  const isPublicPath =
    publicPaths.includes(pathname) ||
    publicPathPrefixes.some((prefix) => pathname.startsWith(prefix));

  // API routes should be handled separately
  const isApiRoute = pathname.startsWith("/api/");

  // PWA files - CRITICAL for PWA to work
  const isPWAFile =
    pathname === "/manifest.json" ||
    pathname === "/sw.js" ||
    pathname === "/workbox-" ||
    pathname.startsWith("/workbox-") ||
    pathname === "/swe-worker-" ||
    pathname.startsWith("/swe-worker-");

  // Static and public assets — includes /videos so hero background clips
  // (and any other media dropped in public/videos) never hit the auth check
  const isPublicAsset =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/videos") ||
    pathname.startsWith("/images") ||
    pathname.match(
      /\.(svg|png|jpg|jpeg|gif|webp|ico|json|js|mp4|webm|mov|m4v)$/,
    );

  // Don't process API routes, public assets, or PWA files
  if (isApiRoute || isPublicAsset || isPWAFile) {
    return NextResponse.next();
  }

  // If accessing protected route without token, redirect to login
  if (!token && !isPublicPath) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // If has token and on login/register page, get user role to redirect properly
  if (token && (pathname === "/login" || pathname === "/register")) {
    try {
      // Fetch user data to determine role
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const response = await fetch(`${apiUrl}/api/auth/me`, {
        headers: {
          Cookie: `auth_token=${token}`,
          Accept: "application/json",
        },
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        const userRole = data.user?.role;

        // Redirect based on role
        if (userRole === "admin") {
          return NextResponse.redirect(
            new URL("/dashboard/admin/news", request.url),
          );
        } else if (userRole === "citizen") {
          return NextResponse.redirect(
            new URL("/dashboard/citizen", request.url),
          );
        }
      }
    } catch (error) {
      console.error("Middleware: Error fetching user role:", error);
    }

    // Default redirect if role check fails
    return NextResponse.redirect(new URL("/dashboard/citizen", request.url));
  }

  // Allow access to public paths
  if (isPublicPath) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - videos/* and images/* (public media folders)
     * - common static asset extensions, including video formats
     * - PWA files (manifest.json, sw.js, workbox files)
     */
    "/((?!_next/static|_next/image|favicon.ico|manifest.json|sw.js|workbox-.*|swe-worker-.*|videos/.*|images/.*|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4|webm|mov|m4v)$).*)",
  ],
};
