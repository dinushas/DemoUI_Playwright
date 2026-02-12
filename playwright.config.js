import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  use: {
    headless: true, // ✅ headless for CI
    viewport: { width: 1280, height: 720 },
    trace: 'on-first-retry',
    baseURL: process.env.BASE_URL, // ✅ required for relative paths
  },
 projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'], headless: true },
    },
    {
      name: 'Desktop Firefox',
      use: { ...devices['Desktop Firefox'], headless: true },
    },
  ],
});
