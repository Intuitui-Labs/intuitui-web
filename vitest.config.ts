import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    globals: true,
    environment: 'node',
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    passWithNoTests: true,
    fsModuleCache: true,
    sharedViteServer: true,
    tags: [
      { name: 'math', description: 'Mathematical proofs and calculations' },
      { name: 'proof', description: 'Definitive proofs' },
      { name: 'fast', description: 'Sub-millisecond test' },
      { name: 'cvd', description: 'Color Vision Deficiency simulation matrix' },
      { name: 'dom', description: 'DOM and HTML inspection' },
      { name: 'integration', description: 'Integrative cross-system tests' },
      { name: 'dist', description: 'Tests requiring dist/ build' },
      { name: 'css', description: 'CSS styles and physics bounds' },
    ],
  },
});


