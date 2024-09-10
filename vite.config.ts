import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 프록시 설정
      "/contract-list": {
        target: "http://35.193.35.53",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/contract-list/, "/contract-list"),
      },
    },
  },
});
