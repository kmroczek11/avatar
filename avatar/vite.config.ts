import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,      // expose to Docker
    port: 3000,
    watch: {
      usePolling: true,  // for Docker HMR
    },
  },
})