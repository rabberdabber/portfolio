import { defineRouting } from "next-intl/routing";

export const locales = ["en", "ko"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
});
