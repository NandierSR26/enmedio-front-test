import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";
import { manifestForPlugIn } from './manifest.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
