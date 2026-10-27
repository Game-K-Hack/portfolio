import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    // src/views/i20doc est une jonction vers le dépôt hyundev. Sans ceci, Vite
    // résout le chemin réel (hors du projet) et ne trouve plus vue, @unhead/vue
    // ni tailwind depuis ce fichier. Sans effet quand le dossier est un vrai
    // répertoire, comme ce sera le cas en submodule.
    preserveSymlinks: true,
  },
})
