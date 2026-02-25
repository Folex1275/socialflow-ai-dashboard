import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.test.{ts,tsx}'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      'src/blockchain/services/IPFSService.test.ts',
      'src/blockchain/services/__tests__/StellarService.test.ts',
      'src/blockchain/services/__tests__/WalletService.test.ts'
    ],
  },
})
