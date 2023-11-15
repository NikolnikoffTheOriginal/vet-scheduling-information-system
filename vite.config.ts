import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
 base: "/tactics-genius/",
 plugins: [react()],
 server: {
  proxy: {
    '/api': {
      target: 'https://api.football-data.org/v4',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
  },
 },
})
