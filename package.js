Package.describe({
  name: 'practicalmeteor:mocha-spacejam-reporter',
  version: '0.1.0',
  summary: 'Spacejam reporter',
  git: 'https://github.com/practicalmeteor/meteor-mocha-spacejam-reporter.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use(['coffeescript', "practicalmeteor:mocha"]);
  api.imply("practicalmeteor:mocha");
  api.addFiles('SpacejamReporter.coffee', 'client');

});

Package.onTest(function(api) {
  api.use(['coffeescript', "practicalmeteor:mocha"]);
  api.addFiles('tests.coffee', 'client');
});
