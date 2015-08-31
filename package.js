Package.describe({
  name: 'practicalmeteor:mocha-console-reporter',
  version: '0.1.1',
  summary: 'A mocha package tests console reporter to be used with spacejam or standalone.',
  git: 'https://github.com/practicalmeteor/meteor-mocha-console-reporter.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use(['coffeescript', "practicalmeteor:mocha@2.1.0_4"]);
  api.imply("practicalmeteor:mocha@2.1.0_4");
  api.addFiles('ConsoleReporter.coffee', 'client');

});

Package.onTest(function(api) {

});
