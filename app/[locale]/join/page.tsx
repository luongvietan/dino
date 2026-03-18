import Image from "next/image";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { FooterPrivilege } from "@/components/layout/FooterPrivilege";
import { getTranslations } from "next-intl/server";
import { Link } from "@/src/i18n/navigation";
import { locales, type AppLocale } from "@/src/i18n/routing";

const SITE_URL = "https://thedinonetwork.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: maybeLocale } = await params;
  const locale = locales.includes(maybeLocale as AppLocale)
    ? (maybeLocale as AppLocale)
    : ("en" as AppLocale);

  const tJoin = await getTranslations({ locale, namespace: "joinPage" });
  const tMeta = await getTranslations({ locale, namespace: "meta" });
  const pathname = `/${locale}/join`;

  return {
    title: tJoin("title"),
    description: tMeta("description"),
    alternates: {
      canonical: pathname,
      languages: {
        en: "/en/join",
        fil: "/fil/join",
        "x-default": "/en/join",
      },
    },
    openGraph: {
      title: tJoin("title"),
      description: tMeta("description"),
      url: pathname,
      images: ["/hero.webp"],
    },
    metadataBase: new URL(SITE_URL),
  };
}

const backgroundStyle = {
  backgroundImage:
    "radial-gradient(circle at 12% 18%, rgba(34,197,94,0.18), transparent 28%), radial-gradient(circle at 82% 12%, rgba(59,130,246,0.16), transparent 32%), radial-gradient(circle at 50% 88%, rgba(236,72,153,0.14), transparent 30%), linear-gradient(135deg, #0b1220 0%, #05070d 50%, #0b1220 100%)",
  backgroundColor: "#05070d",
};

export default async function JoinPage() {
  const t = await getTranslations();
  const labels = {
    comingSoon: t("joinPage.comingSoon"),
    applyHere: t("joinPage.applyHere"),
  };
  const REGIONS = [
    {
      id: "usa-canada",
      title: t("joinPage.regions.usaCanadaTitle"),
      href: "/apply?region=usa-canada",
      comingSoon: false,
      image: "/us-can.jpg",
      alt: t("joinPage.regions.usaCanadaAlt"),
    },
    {
      id: "australia",
      title: t("joinPage.regions.australiaTitle"),
      href: null,
      comingSoon: true,
      image: "/aus.jpg",
      alt: t("joinPage.regions.australiaAlt"),
    },
    {
      id: "philippines",
      title: t("joinPage.regions.philippinesTitle"),
      href: "/apply?region=philippines",
      comingSoon: false,
      image: "/phi.jpg",
      alt: t("joinPage.regions.philippinesAlt"),
    },
  ] as const;

  return (
    <>
      <Header />

      <main
        className="relative flex-1 bg-background-light dark:bg-background-dark overflow-hidden"
        style={backgroundStyle}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.07),transparent_30%),radial-gradient(circle_at_80%_40%,rgba(255,255,255,0.05),transparent_24%)]" />
        <section className="relative overflow-hidden px-4 sm:px-6 pt-10 pb-12 md:pt-14 md:pb-16">
          <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight text-center mb-12 sm:mb-16">
              {t("joinPage.title")}
            </h1>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {REGIONS.map((region) => (
                <RegionCard key={region.id} region={region} labels={labels} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterPrivilege />
    </>
  );
}

function RegionCard({
  region,
  labels,
}: {
  region: {
    id: string;
    title: string;
    href: string | null;
    comingSoon: boolean;
    image: string;
    alt: string;
  };
  labels: { comingSoon: string; applyHere: string };
}) {
  // Note: Join page is a Server Component; translations are precomputed.
  const content = (
    <div className="group relative flex flex-col rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={region.image}
          alt={region.alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {region.comingSoon && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="bg-amber-500 text-black px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
              {labels.comingSoon}
            </span>
          </div>
        )}
      </div>
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="text-white font-semibold text-center text-sm sm:text-base mb-4 flex-1">
          {region.title}
        </h3>
        {region.comingSoon ? (
          <div className="rounded-xl bg-white/10 text-white/70 text-center py-3.5 text-sm font-semibold cursor-not-allowed">
            {labels.applyHere}
          </div>
        ) : (
          <span className="inline-flex items-center justify-center rounded-xl bg-white text-black py-3.5 px-6 text-sm font-bold transition-all group-hover:bg-white/90 shadow-lg">
            {labels.applyHere}
          </span>
        )}
      </div>
    </div>
  );

  if (region.comingSoon) {
    return <div className="cursor-not-allowed">{content}</div>;
  }

  return (
    <Link
      href={region.href!}
      className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-2xl"
    >
      {content}
    </Link>
  );
}

