import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { ScrollToTopOnRouteChange } from "@/components/providers/ScrollToTopOnRouteChange";
import { defaultLocale, locales, type AppLocale } from "@/src/i18n/routing";

const SITE_URL = "https://thedinonetwork.com";

const OG_LOCALE_MAP: Record<AppLocale, string> = {
  en: "en_US",
  fil: "fil_PH",
};

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
  const pathname = `/${locale}`;

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: pathname,
      languages: {
        en: "/en",
        fil: "/fil",
        "x-default": `/${defaultLocale}`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: pathname,
      siteName: "Dino Network",
      locale: OG_LOCALE_MAP[locale],
      type: "website",
      images: ["/hero.webp"],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/hero.webp"],
    },
    metadataBase: new URL(SITE_URL),
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

