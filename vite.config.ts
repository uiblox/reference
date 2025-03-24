import { defineConfig } from 'vite'

export default defineConfig({
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: "./src/index.html",
        starter: "./src/pages/functional/starter/index.html",
        calorieCounter: "./src/pages/functional/calorieCounter/index.html",
      },
    },
  },
})