import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { vitePrerenderPlugin } from 'vite-prerender-plugin';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  // react-dom/server pulls in the browser build, whose Scheduler opens a
  // MessageChannel at module scope. Its ports keep the Node event loop alive,
  // so `vite build` prerenders fine but never exits (it hangs the Docker build
  // in the deploy workflow). The legacy browser build has renderToString
  // without the MessageChannel, and without the Node builtins that
  // react-dom/server.node would drag into a browser-targeted bundle.
  // ponytail: deep import into react-dom internals, revisit on a react-dom major.
  resolve: {
    alias: {
      'react-dom/server': `${__dirname}node_modules/react-dom/cjs/react-dom-server-legacy.browser.production.js`,
    },
  },
  build: {
    rollupOptions: {
      output: {
        // react-dom/server is reachable only from the prerender entry, but
        // Rollup folds it into the chunk that entry shares with the app, so
        // every visitor downloads server-rendering code they never execute.
        // Forcing it into its own chunk keeps it out of the client's graph.
        manualChunks(id: string) {
          if (id.includes('react-dom-server-legacy')) {
            return 'react-dom-server';
          }
          if (
            id.includes('node_modules/react/') ||
            id.includes('node_modules/react-dom/') ||
            id.includes('node_modules/scheduler/')
          ) {
            return 'react';
          }
        },
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    vitePrerenderPlugin({
      renderTarget: '#root',
      prerenderScript: `${__dirname}src/prerender.tsx`,
    }),
  ],
});
