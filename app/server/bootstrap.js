Meteor.startup(function () {
  Recaptcha.config({
    privatekey: Meteor.settings.private.recaptcha.privatekey
  });
});
