import type { MetadataRoute } from "next";

const SITE_URL = "https://thedinonetwork.com";
const LOCALES = ["en", "fil"] as const;
const ROUTES = ["", "/join", "/invite", "/accept"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return ROUTES.flatMap((route) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}${route}`,
      lastModified: now,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8,
    })),
  );
}
