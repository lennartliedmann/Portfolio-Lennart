import { defineConfig } from 'vite'

// On Windows (and some editor/filesystem combos), file change events can be missed.
// Polling makes HMR/reload reliable (slightly higher CPU).
export default defineConfig({
  server: {
    watch: {
      usePolling: true,
      interval: 200,
    },
  },
})
