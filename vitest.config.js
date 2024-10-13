import { resolve } from 'path';
import { defaultExclude, defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '~': resolve(__dirname, '.'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: [...defaultExclude],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/**/__tests__/**/*', 'src/types/**/*'],
      all: true,
    },
    setupFiles: 'src/setupTests.ts',
  },
});
