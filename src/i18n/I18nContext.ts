import { createContext } from 'react';
import fr from './fr.json';

type Locale = 'fr' | 'en';
type Translations = typeof fr;

export interface I18nContextValue {
  t: Translations;
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export const I18nContext = createContext<I18nContextValue | null>(null);
