import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// Este plugin es para React, no para React Router.


export default defineConfig({
  plugins: [tailwindcss(), react(), tsconfigPaths()]
})
