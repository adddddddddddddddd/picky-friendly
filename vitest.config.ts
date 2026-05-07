import { defineConfig } from 'vitest/config'
import { resolve } from 'path'

export default defineConfig({
  test: {
    testTimeout: 120_000,
    alias: {
      '@': resolve(__dirname, '.'),
    },
  },
})
