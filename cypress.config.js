const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: 'https://demoqa.com',
    blockHosts: ['*.googlesyndication.com', '*.doubleclick.net',
      '*.pagead2.googlesyndication.com', '*.www.google-analytics.com', '*.region1.analytics.google.com'],
    watchForFileChanges: false,
    video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
