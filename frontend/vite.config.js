import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // ✅ correct plugin name
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),       // ✅ fixed
    tailwindcss(), // ✅ keep this if needed
  ],
})
