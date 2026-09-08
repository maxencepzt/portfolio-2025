import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { I18nProvider } from './i18n';
import posthog from 'posthog-js';

// Ingestion goes through a first-party path that vercel.json rewrites to
// eu.i.posthog.com. Sending straight to eu.i.posthog.com loses every visitor
// running Brave Shields, uBlock or Edge strict tracking prevention: the host
// is on the usual filter lists, so the POST is cancelled in the browser and
// never reaches PostHog (ERR_BLOCKED_BY_CLIENT).
// Keep this in sync with the rewrites in vercel.json, and keep it clear of the
// words filter lists match on (analytics, tracking, telemetry, posthog).
const POSTHOG_PROXY_PATH = '/mxp';

const posthogKey = import.meta.env.VITE_POSTHOG_KEY;

if (posthogKey) {
  posthog.init(posthogKey, {
    api_host: POSTHOG_PROXY_PATH,
    // The proxy only carries ingestion, so the toolbar and the "view in
    // PostHog" links still need the real host.
    ui_host: 'https://eu.posthog.com',
    person_profiles: 'identified_only',
    autocapture: true,
    // One page view per load, captured by posthog-js itself. The navbar used
    // to emit a $pageview on every section change, which multiplied the count
    // by the number of sections a visitor scrolled through and left bounce
    // rate and session duration meaningless. Sections are tracked by
    // section_viewed, which carries the section as a property.
    // Safe to leave on: the navbar scrolls with window.scrollTo and never
    // touches location.hash, so there is no navigation to capture twice.
    capture_pageview: true,
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider>
      <App />
    </I18nProvider>
  </StrictMode>
);
