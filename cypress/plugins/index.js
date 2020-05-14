// Beware: only & skip buttons will appear only after finishing all tests
// https://github.com/bahmutov/cypress-skip-and-only-ui/issues/74
const task = require("cypress-skip-and-only-ui/task")
const extensionLoader = require("cypress-browser-extension-plugin/loader")

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => { // eslint-disable-line no-unused-vars
  on("task", task)
  on("before:browser:launch", extensionLoader.load(
    { source: "./build", alias: "heureka-extension" },
  ))
}
