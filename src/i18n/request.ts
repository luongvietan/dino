import { getRequestConfig } from "next-intl/server";
import { defaultLocale, locales, type AppLocale } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const maybeLocale = await requestLocale;
  const locale: AppLocale =
    locales.includes(maybeLocale as AppLocale) ? (maybeLocale as AppLocale) : defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});

