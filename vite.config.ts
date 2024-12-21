import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'public',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})
