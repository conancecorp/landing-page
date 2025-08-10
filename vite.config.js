import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'node:url'
import { copyFileSync } from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Plugin pour copier le fichier 404.html après le build
    {
      name: 'copy-404',
      writeBundle() {
        try {
          copyFileSync('404.html', 'dist/404.html')
          console.log('✓ 404.html copié dans dist/')
        } catch (err) {
          console.error('Erreur lors de la copie de 404.html:', err)
        }
      }
    }
  ],
  // Base path for GitHub Pages
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
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