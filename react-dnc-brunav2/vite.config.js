
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // 👈 aqui tá no lugar certo!
  build: {
    outDir: 'dist'
  },
  server: {
    fs: {
      allow: ['.']
    }
  }
})