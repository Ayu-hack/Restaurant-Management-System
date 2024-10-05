import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // server details enabling docker to run the application without issues
  server: {
    host: true,
    port: 8080, 
     watch: {
       usePolling: true
     }
  }
})
