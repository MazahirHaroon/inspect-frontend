import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      '@pages': '/src/pages/index',
      '@rc-components': '/src/rc-components/index',
      '@challenge-viewer': '/src/rc-components/challenge-viewer/index',
      '@challenges': '/src/pages/challenges',
      '@utils': '/src/utils/index',
      '@style': '/src/style',
    },
  },
});
