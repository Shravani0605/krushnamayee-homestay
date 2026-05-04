import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    // Target modern browsers for smaller output
    target: 'es2020',
    // No source maps in production
    sourcemap: false,
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Vendor chunk for React core
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'react-vendor';
          }
          // Router in its own chunk
          if (id.includes('node_modules/react-router')) {
            return 'router';
          }
          // Framer Motion is heavy – isolate it
          if (id.includes('node_modules/framer-motion')) {
            return 'motion';
          }
        },
      },
    },
    // Inline assets smaller than 8KB as base64
    assetsInlineLimit: 8192,
    // Enable CSS code splitting
    cssCodeSplit: true,
  },
})
