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

export const I18nProvider = ({
  children,
  locale: initialLocale,
}: {
  children: ReactNode;
  // Only the build-time prerender passes this. navigator.language on the build
  // machine is en-US, so without it dist/index.html would ship English text
  // under <html lang="fr">, and that is the copy search engines index.
  locale?: Locale;
}) => {
  const [locale, setLocale] = useState<Locale>(initialLocale ?? detectLocale);

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
