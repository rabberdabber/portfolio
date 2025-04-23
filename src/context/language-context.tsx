"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

type LanguageContextType = {
  locale: string;
  setLocale: (locale: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const defaultLocale = useLocale();
  const [locale, setLocaleState] = useState(defaultLocale);

  const setLocale = (newLocale: string) => {
    setLocaleState(newLocale);
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  // Sync with URL changes
  useEffect(() => {
    const pathLocale = pathname.split("/")[1];
    if (pathLocale && pathLocale !== locale) {
      setLocaleState(pathLocale);
    }
  }, [pathname, locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
