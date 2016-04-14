Package.describe({
  name: "recaptcha",
  summary: "Implement reCaptcha v2 in Meteor",
  version: "0.0.1",
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.2');

  api.use('ecmascript');

  api.use(['templating', 'handlebars', 'jquery'], 'client');
  api.use(['http'], 'server');

  api.addFiles('lib/recaptcha.js', ['client', 'server']);
  api.addFiles([
    'client/recaptcha.html',
    'client/recaptcha.js',
  ], 'client');
  api.addFiles('server/recaptcha.js', 'server');

  api.export && api.export('Recaptcha', ['client', 'server']);
});
