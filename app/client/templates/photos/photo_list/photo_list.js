/*****************************************************************************/
/* PhotoList: Event Handlers */
/*****************************************************************************/
Template.PhotoList.events({
});

/*****************************************************************************/
/* PhotoList: Helpers */
/*****************************************************************************/
Template.PhotoList.helpers({
  'preview': function (content) {
    var converter = new Showdown.converter();
    var htmlContent = converter.makeHtml(content);
    return jQuery.truncate(htmlContent, {length: 250});
  },
  'photos': function () {
    return Photos.find({});
  }
});

/*****************************************************************************/
/* PhotoList: Lifecycle Hooks */
/*****************************************************************************/
Template.PhotoList.onCreated(function () {
});

Template.PhotoList.onRendered(function () {
});

Template.PhotoList.onDestroyed(function () {
});
