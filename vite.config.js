import { defineConfig } from "vite";

export default defineConfig({
  root: "./",
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        tentang: "tentang.html",
        internship: "internship.html",
        profesi: "profesi.html",
        testemoni: "testimoni.html",
      },
    },
  },
});
