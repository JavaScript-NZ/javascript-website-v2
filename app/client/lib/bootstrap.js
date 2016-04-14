Meteor.startup(function () {
  Recaptcha.config({
    sitekey: '6LfdXh0TAAAAAF2zXxybkANG8WXArg2Z9AXaGEK6',
    type: 'audio|image',
    size: 'normal', //OPTIONAL. <normal|compact>
    tabindex: 0,
    callback: function (val) {
      //callback on successful captcha response, val contains g-recaptcha-response
    },
    "expired-callback": function () {
      //callback on expired captcha response, or requires new captcha test from user
    }
  });
});
