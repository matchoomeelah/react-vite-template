import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({ // mode refers to development or production
  plugins: [
    react(),
    eslint({
      lintOnStart: true, // tell the linter to run at build time
      failOnError: mode === "production" // Don't prevent the app from running if linter errors exist
    }),
  ],
  server: {
    open: true // Open the app automatically on npm run dev
  }
}))
