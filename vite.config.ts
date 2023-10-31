import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    hmr: {
      host: "localhost",
    },
  },
  plugins: [
    vue(),
    laravel({
      input: ["resources/css/app.css", "resources/js/app.ts"],
      refresh: true,
    }),
  ],
  // Webpackに公開する環境変数
  envPrefix: ["VITE_"],
});
