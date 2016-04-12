Package.describe({
  name: "cardiac-arrest",
  summary: "stale session manager",
  version: "1.0.0",
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');

  api.use('ecmascript');

  api.use('accounts-base@1.0.0', ['client', 'server']);
  api.use('iron:router', ['client', 'server']);
  api.use('jquery@1.0.0', 'client');

  api.addFiles('lib/cardiac-arrest.js', ['client', 'server']);
  api.addFiles('client/cardiac-arrest.js', 'client');
  api.addFiles('server/cardiac-arrest.js', 'server');

});
