exports.config = {
  // set to "custom" instead of cucumber.
  framework: 'custom',
 
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
 
  // require feature files
  specs: [
    './test/e2e/Features/*.feature' // accepts a glob
  ],
 
  cucumberOpts: {
    // require step definitions
    require: [
      './test/e2e/StepDefinition/*.js' // accepts a glob
    ]
  }
};