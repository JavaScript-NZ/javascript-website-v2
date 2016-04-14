/*****************************************************************************/
/* Header: Event Handlers */
/*****************************************************************************/
Template.Header.events({
  'click .toc': function (evt) {
    $('.ui.sidebar').sidebar('toggle');
  }
});

/*****************************************************************************/
/* Header: Helpers */
/*****************************************************************************/
Template.Header.helpers({
});

/*****************************************************************************/
/* Header: Lifecycle Hooks */
/*****************************************************************************/
Template.Header.onCreated(function () {
});

Template.Header.onRendered(function () {
  $('.hero').visibility({
    once: false,
    continuous: true,
    onPassing: function (calculations) {
      var newColor = 'rgba(255, 255, 255, ' + calculations.percentagePassed + ')';
      $('.masthead')
        .css('background-color', newColor)
      ;

      var blackinvertColor = 'rgb(' +
          Math.floor(255 * (1-(2*calculations.percentagePassed))) + ',' +
          Math.floor(255 * (1-(2*calculations.percentagePassed))) + ',' +
          Math.floor(255 * (1-(2*calculations.percentagePassed))) +
          ')';

      $('.toc>.sidebar').css('color', blackinvertColor);
      $('#login-dropdown').css('color', blackinvertColor);
      $('.ui .header>.textlogo').css('color', blackinvertColor);

      var rcolor = 'rgb(' +
        0 + ',' +
        Math.floor(116 - (116 * calculations.percentagePassed) ) + ',' +
        Math.floor(217 - (217 * calculations.percentagePassed) ) +
        ')';

      $('g.logotext').css('fill', rcolor);



    },
    onBottomPassed: function (calculations) {
      $('.masthead')
        .css('background-color', 'rgba(255, 255, 255, 1');
      ;
      $('g.logotext').css('fill', 'rgb(0, 0, 0');
      $('.toc>.sidebar').css('color', '#000');
      $('#login-dropdown').css('color', '#000');
      $('.ui .header>.textlogo').css('color', '#000');
    }
  })
});

Template.Header.onDestroyed(function () {
});
