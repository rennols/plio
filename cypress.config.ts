import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "mochawesome",
  env: {
    codeCoverage: {
      url: 'http://localhost:1234/__coverage__',
      exclude: 'cypress/**/*.*'
    }
  },
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.ts')(on, config)
    },
    baseUrl: 'http://localhost:1234'
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
