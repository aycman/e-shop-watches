import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/03_e-shop-watches_redux-tailwindcss/',
  plugins: [react()],
})
