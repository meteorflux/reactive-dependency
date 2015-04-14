Package.describe({
  name: 'meteorflux:reactive-dependency',
  version: '0.1.0',
  summary: 'Use reactive dependency injection in Meteor.',
  git: 'https://github.com/meteorflux/reactive-dependency',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('reactive-dict@1.1.0');
  api.export('Dependency', 'client');
  api.addFiles('reactive-dependency.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('meteorflux:reactive-dependency');
  api.addFiles('reactive-dependency-tests.js');
});
