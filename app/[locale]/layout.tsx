import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { ScrollToTopOnRouteChange } from "@/components/providers/ScrollToTopOnRouteChange";
import { locales, type AppLocale } from "@/src/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: maybeLocale } = await params;
  const locale = locales.includes(maybeLocale as AppLocale)
    ? (maybeLocale as AppLocale)
    : ("en" as AppLocale);
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: [{ url: "/logo.jpeg", type: "image/jpeg" }],
      shortcut: ["/logo.jpeg"],
      apple: ["/logo.jpeg"],
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: maybeLocale } = await params;
  const locale = locales.includes(maybeLocale as AppLocale)
    ? (maybeLocale as AppLocale)
    : ("en" as AppLocale);
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <LenisProvider>
        <ScrollToTopOnRouteChange />
        <div className="relative flex min-h-screen w-full flex-col">{children}</div>
      </LenisProvider>
    </NextIntlClientProvider>
  );
}

