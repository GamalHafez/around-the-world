import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/pages": path.resolve(__dirname, "./src/pages"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/styles": path.resolve(__dirname, "./src/styles"),
      "@/utils": path.resolve(__dirname, "./src/utils"),
      "@/assets": path.resolve(__dirname, "./src/assets"),
      "@/hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
});
