import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Cloudflare Pages default output directory is `dist`. SPA fallback is
// handled by `public/_redirects`. No CNAME — the custom domain is bound
// in the Cloudflare Pages dashboard.
export default defineConfig({
  base: '/',
  plugins: [react()],
});
