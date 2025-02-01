import { defineConfig } from '@playwright/test'
import { defineBddConfig } from 'playwright-bdd'

const testDir = defineBddConfig({
  features: 'features/*.feature',
  steps: 'features/step_definitions/*.ts',
})

export default defineConfig({
  testDir,
  workers: 1,
  reporter: [['html', { outputFolder: 'test-results' }]],
  use: {
    screenshot: 'on',
    trace: 'on',
    headless: false,
    viewport: { width: 1920, height: 1080 },
  },
  timeout: 90_000,
  expect: {
    timeout: 20_000,
  },
})
