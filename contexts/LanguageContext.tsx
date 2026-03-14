"use client";

import en from "@/messages/en.json";
import ur from "@/messages/ur.json";
import { createContext, useContext, useEffect, useState } from "react";

type Locale = "en" | "ur";
type Messages = Record<string, unknown>;

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

function getNestedValue(obj: Messages, key: string): string {
  const result = key.split(".").reduce<unknown>((acc, k) => {
    if (acc && typeof acc === "object") return (acc as Messages)[k];
    return undefined;
  }, obj);
  return typeof result === "string" ? result : key;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Restore saved locale from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved === "en" || saved === "ur") {
      setLocaleState(saved);
    }
  }, []);

  // Apply dir + lang on the <html> element whenever locale changes
  useEffect(() => {
    document.documentElement.dir = locale === "ur" ? "rtl" : "ltr";
    document.documentElement.lang = locale === "ur" ? "ur" : "en";
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const messages = (locale === "ur" ? ur : en) as Messages;

  const t = (key: string): string => getNestedValue(messages, key);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
