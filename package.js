Package.describe({
  name: 'practicalmeteor:mocha-console-runner',
  version: '0.1.4',
  summary: 'A mocha console reporter for running your package tests from the command line with spacejam.',
  git: 'https://github.com/practicalmeteor/meteor-mocha-console-reporter.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use(['coffeescript', "practicalmeteor:mocha@2.1.0_6"]);
  api.imply("practicalmeteor:mocha@2.1.0_6");
  api.addFiles('ConsoleReporter.coffee', 'client');

});

Package.onTest(function(api) {

});
