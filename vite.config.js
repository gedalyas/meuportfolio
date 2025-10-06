// src/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // tudo que começar com /api vai para o seu backend local
      '/api': 'http://localhost:5000'
    }
  }
})
