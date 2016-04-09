Package.describe({
  name: "orion-cloudinary",
  summary: "Cloudinary image uploads",
  version: "1.0.0"
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');

  api.use([
    'meteor-base',
    'jquery',
    'orionjs:core@1.6.0',
    'orionjs:filesystem@1.6.0',
    'orionjs:config@1.6.0',
    'lepozepo:cloudinary@4.1.3',
    'ecmascript'
  ]);

  api.addFiles([
    'cloudinary.js'
  ]);

  api.mainModule("cloudinary.js", "client");
  api.export(['orion', 'Cloudinary']);
});
