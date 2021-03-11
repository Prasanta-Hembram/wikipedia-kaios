// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

module.exports = (on, config) => {
  on('before:browser:launch', (browser, launchOptions) => {
    if (browser.name === 'chrome') {
      launchOptions.args.push('--window-size=1000,1000')
    }

    if (browser.name === 'electron') {
      launchOptions.preferences.width = 1000
      launchOptions.preferences.height = 1000
    }

    if (browser.name === 'firefox') {
      launchOptions.args.push('--width=1000')
      launchOptions.args.push('--height=1000')
    }

    return launchOptions
  })
}