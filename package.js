Package.describe({
  name: 'practicalmeteor:mocha-console-runner',
  version: '0.2.0-meteor-1.3-rc.1',
  summary: 'A mocha console reporter for running your package tests from the command line with spacejam.',
  git: 'https://github.com/practicalmeteor/meteor-mocha-console-reporter.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
  testOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom("1.3-rc.1");
  api.use(['coffeescript', "practicalmeteor:mocha@2.1.0-meteor-1.3-rc.1", 'practicalmeteor:loglevel@1.2.0_2', 'ecmascript']);
  api.imply("practicalmeteor:mocha@2.1.0-meteor-1.3-rc.1");
  api.mainModule('ConsoleReporter.coffee', 'client');
});

Package.onTest(function(api) {

});
