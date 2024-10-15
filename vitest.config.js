import { resolve } from 'path';
import {
  coverageConfigDefaults,
  defaultExclude,
  defineConfig,
} from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '~': resolve(__dirname, '.'),
      src: resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: [...defaultExclude],
    coverage: {
      provider: 'v8',
      include: ['src/**/*'],
      exclude: [...coverageConfigDefaults.exclude, '**/types/**'],
      all: true,
    },
    setupFiles: 'src/setupTests.ts',
  },
});
