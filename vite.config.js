import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  base: '/p_project/',
  plugins: [
    react(),
    ViteImageOptimizer({
      jpeg: { quality: 78 },
      jpg:  { quality: 78 },
      png:  { quality: 78 },
      webp: { quality: 78, method: 6 },
    }),
  ],
 
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Separa as bibliotecas da pasta node_modules em chunks individuais de forma segura
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
})
