module.exports = (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
    require('@cypress/code-coverage/task')(on, config)
    
    //Used to instrument code ran like unit tests
    on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'))
    return config
}
