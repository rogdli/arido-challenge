// Archivo: vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173
  },
  esbuild: {
    jsx: 'automatic', 
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  }
});