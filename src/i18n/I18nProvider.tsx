import { useState, useEffect, ReactNode } from 'react';
import fr from './fr.json';
import en from './en.json';
import { I18nContext } from './I18nContext';

type Locale = 'fr' | 'en';

const translations = { fr, en } as const;

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
