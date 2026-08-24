import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/',
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify - file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      host: '0.0.0.0',
      port: 3000,
      allowedHosts: true,
      proxy: {
        '/api/kabaddi': {
          target: 'https://kabaddi-api-144271912366.asia-south1.run.app',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/kabaddi/, '/api'),
        },
      },
    },
    build: {
      chunkSizeWarningLimit: 2000,
    },
  };
});
