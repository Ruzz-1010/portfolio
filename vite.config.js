import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves project sites from /<repo>/, so the build needs that base.
  base: process.env.GITHUB_PAGES === 'true' ? '/portfolio/' : '/',
  plugins: [react(), tailwindcss()],
})
