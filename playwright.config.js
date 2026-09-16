const { defineConfig } = require('@playwright/test');
module.exports = defineConfig({
  testDir: './tests',
  timeout: 60000,
  workers: 1,
  reporter: 'html',
  use: {
    channel: 'chrome',
    headless: false
  },
});