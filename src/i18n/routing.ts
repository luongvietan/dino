export const locales = ["en", "fil"] as const;
export type AppLocale = (typeof locales)[number];

export const defaultLocale: AppLocale = "en";

