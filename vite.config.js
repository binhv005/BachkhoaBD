import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { port: 5173 }, // không tự mở trình duyệt; mở http://localhost:5173 khi cần
});
