
Recaptcha = {
  settings: {
    theme: "light",
    type: "image",
    size: "normal",
    tabindex: 0
  },

  config: function (settings) {
    return _.extend(this.settings, settings);
  }
};

window.onloadcaptcha = function () {
  $('[name=Recaptcha]').each(function () {
    $(this).empty();
    grecaptcha.render(this.id, Recaptcha.settings);
  });
};

Template.Recaptcha.onRendered(function () {
  $.getScript('https://www.google.com/recaptcha/api.js?onload=onloadcaptcha&render=explicit');
});
