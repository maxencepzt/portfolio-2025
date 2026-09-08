import { renderToString } from 'react-dom/server';
import { StrictMode } from 'react';
import App from './App';
import { I18nProvider } from './i18n';

export async function prerender() {
  const html = renderToString(
    <StrictMode>
      <I18nProvider locale="fr">
        <App />
      </I18nProvider>
    </StrictMode>
  );

  return { html };
}
