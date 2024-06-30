import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Eslatma: Agar React ishlatyapsiz

export default defineConfig({
  plugins: [react()], // Eslatma: Agar React ishlatyapsiz
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
});
