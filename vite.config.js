import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Standalone SPA — no WordPress, PHP, or Elementor dependencies.
export default defineConfig({
  plugins: [react()],
})
