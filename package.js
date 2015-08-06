Package.describe({
  name: 'practicalmeteor:mocha-console-reporter',
  version: '0.1.0',
  summary: 'A mocha console reporter for running your package tests from the command line with spacejam.',
  git: 'https://github.com/practicalmeteor/meteor-mocha-console-reporter.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  
  api.use(['coffeescript', "practicalmeteor:mocha"]);

  api.imply("practicalmeteor:mocha");

  api.addFiles('ConsoleReporter.coffee', 'client');
});

Package.onTest(function(api) {

});
