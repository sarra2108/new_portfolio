import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import path from 'path'
// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: command === "build" ? "/portfolio-website/" : "/",

resolve:{
  alias:{
    "@": path.resolve(path.dirname(new URL(import.meta.url).pathname), './src'),
  },
}
}));