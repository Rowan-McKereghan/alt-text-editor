import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 5173,
    proxy: { //redirect file requests to node js webserver.
      "/iframe": {
        target: "http://localhost:8080",
        secure: false,
        changeOrigin: true,
        ws: true
      },
      "/images": {
        target: "http://localhost:8080",
        secure: false,
        changeOrigin: true,
        ws: true
      },
    },
  },
})
