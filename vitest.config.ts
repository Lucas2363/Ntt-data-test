import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()], // Adiciona o suporte para arquivos .vue
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  test: {
    environment: 'jsdom', 
    globals: true,
    include: ['tests/unit/**/*.spec.js'],
  },
});