import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales } from "./src/i18n/routing";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always",
});

export const config = {
  // Skip Next.js internals and all files in public/
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

