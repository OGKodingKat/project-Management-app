// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
 server: {
   proxy: {
     '/api': {
       target:'https://project-management-app-gqqj.onrender.com',
       changeOrigin: true,
       secure: false,
       rewrite: (path) => path.replace(/^\/api/, '')
     }
   }
 },
 plugins: [react()],
})
