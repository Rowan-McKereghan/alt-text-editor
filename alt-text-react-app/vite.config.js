import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: { //redirect file requests to node js webserver.
      "/iframe": {
        target: "http://localhost:8000",
        secure: false,
        changeOrigin: true,
        ws: true
      },
      "/images": {
        target: "http://localhost:8000",
        secure: false,
        changeOrigin: true,
        ws: true
      },
    },
  },
})
