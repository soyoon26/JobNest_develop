
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/crolls': {
        target: 'https://test-dm.store',
        changeOrigin: true,
        secure: false,
      },
    },
      // proxy: {
    //   '/crolls': {
    //     target: 'http://35.193.35.53',
    //     changeOrigin: true,
    //   },
    // },
  },
});