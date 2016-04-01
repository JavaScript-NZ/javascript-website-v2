/*****************************************************************************/
/* Header: Event Handlers */
/*****************************************************************************/
Template.Header.events({
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
    },
    onBottomPassed: function (calculations) {
      console.dir(calculations.percentagePassed);
      $('.masthead')
        .css('background-color', 'rgba(255, 255, 255, 1');
      ;
    }
  })
});

Template.Header.onDestroyed(function () {
});
