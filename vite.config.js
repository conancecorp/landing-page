import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Base path for GitHub Pages - will be set automatically by GitHub
  base: process.env.NODE_ENV === 'production' ? '/Conance/' : '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: './', // Specify the base path
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Optionally configure the public path if needed
    publicDir: './',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router'],
          primevue: ['primevue']
        }
      }
    }
  }
}) 