Package.describe({
  name: 'practicalmeteor:mocha-console-reporter',
  version: '0.2.0-meteor-1.3-beta.16.1',
  summary: 'A mocha console reporter for running your package tests from the command line with spacejam.',
  git: 'https://github.com/practicalmeteor/meteor-mocha-console-reporter.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
  testOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom("1.3-beta.16");
  api.use(['coffeescript', "practicalmeteor:mocha@2.1.0-meteor-1.3-beta.16.1", 'practicalmeteor:loglevel', 'ecmascript']);
  api.imply("practicalmeteor:mocha@2.1.0-meteor-1.3-beta.16.1");
  api.mainModule('ConsoleReporter.coffee', 'client');
});

Package.onTest(function(api) {

});
