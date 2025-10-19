const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
    baseUrl: 'https://example.co',
    specPattern: 'cypress/e2e/**/*.js',
    supportFile: 'cypress/support/e2e.js',
  },
})
