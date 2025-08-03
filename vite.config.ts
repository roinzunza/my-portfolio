import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  base: './',
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: resolve(__dirname, 'docs/index.html'),
          dest: '.', // Will be copied to docs/404.html
          rename: '404.html',
        },
      ],
    }),
  ],
  build: {
    outDir: 'docs',
  },
})
