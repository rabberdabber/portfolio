import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Skip all paths that should not be internationalized
  matcher: [
    // Skip all static files
    "/((?!api|_next|_vercel|.*\\..*).*)",
    // Skip all files in the public folder
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp3|pdf)$).*)",
  ],
};
