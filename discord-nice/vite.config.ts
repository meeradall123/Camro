import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base for GitHub Pages project site: https://<user>.github.io/<repo>/
  base: '/Camro/',
  server: {
    host: true,
    port: 5173,
  },
})
