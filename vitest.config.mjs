import react from "@vitejs/plugin-react"
import { config } from "dotenv"
import tsconfigPaths from "vite-tsconfig-paths"
import { defineConfig } from "vitest/config"

config()

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: "jsdom",
    globals: true,
    fileParallelism: false,
    isolate: false,
    testTimeout: 60_000,
    hookTimeout: 30_000,
    setupFiles: [".tests/setup.js"]
  }
})
