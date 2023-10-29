import createIntlMiddleware from "next-intl/middleware";
import { locales } from "./navigation";
import { NextRequest } from "next/server";

const publicPages = [
  "/",
  "/login",
  // (/secret requires auth)
];

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale: "en",
});

export function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${publicPages.join("|")})?/?$`,
    "i"
  );

  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage) {
    return intlMiddleware(req);
  } else {
    return (intlMiddleware as any)(req);
  }
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
