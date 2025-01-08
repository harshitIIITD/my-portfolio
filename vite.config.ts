import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})
