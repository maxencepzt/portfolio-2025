import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import fr from './fr.json';
import en from './en.json';

type Locale = 'fr' | 'en';

const translations = { fr, en } as const;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Translations = typeof fr;

interface I18nContextValue {
  t: Translations;
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function detectLocale(): Locale {
  const lang = navigator.language || navigator.languages?.[0] || 'en';
  return lang.startsWith('fr') ? 'fr' : 'en';
}

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(detectLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = translations[locale];

  return (
    <I18nContext.Provider value={{ t, locale, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): I18nContextValue => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
};
