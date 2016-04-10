Package.describe({
  name: "nano-kern",
  summary: "HTML letter kerning ",
  version: "1.0.0",
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');

  api.use('ecmascript');

  var packages = [
    'iron:router'
  ];

  api.use(packages);
  api.imply(packages);
  
  api.addFiles('client/nano-kern.js', 'client');
  
  api.export('NanoKern');
});
