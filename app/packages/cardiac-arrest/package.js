Package.describe({
  name: "cardiac-arrest",
  summary: "stale session manager",
  version: "1.0.0",
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');

  api.use('ecmascript');

  api.use('accounts-base@1.0.0', ['client', 'server']);
  api.use('iron:router', ['client', 'server']);
  api.use('jquery@1.0.0', 'client');

  api.use([
    'meteor-platform',
    'check',
    'orionjs:core@1.7.0',
    'less@2.5.0_1',
    'aldeed:autoform@5.7.1',
    'aldeed:tabular@1.1.0',
    'useraccounts:bootstrap@1.11.1',
    'orionjs:pages'
  ]);

  api.imply([
    'orionjs:core',
    'aldeed:autoform',
    'useraccounts:bootstrap'
  ]);

  api.addFiles('lib/cardiac-arrest.js', ['client', 'server']);
  api.addFiles('client/cardiac-arrest.js', 'client');
  api.addFiles('client/template/update.html', 'client');
  api.addFiles('client/template/update.js', 'client');
  api.addFiles('server/cardiac-arrest.js', 'server');
  api.addFiles('init.js');

});
