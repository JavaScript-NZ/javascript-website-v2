/*****************************************************************************/
/* PostsList: Event Handlers */
/*****************************************************************************/
Template.PostsList.events({
});

/*****************************************************************************/
/* PostsList: Helpers */
/*****************************************************************************/
Template.PostsList.helpers({
  'preview': function (content) {
    var converter = new Showdown.converter();
    var htmlContent = converter.makeHtml(content);
    return jQuery.truncate(htmlContent, {length: 250});
  },
  'posts': function () {
    return Posts.find({});
  }
});

/*****************************************************************************/
/* PostsList: Lifecycle Hooks */
/*****************************************************************************/
Template.PostsList.onCreated(function () {
});

Template.PostsList.onRendered(function () {
});

Template.PostsList.onDestroyed(function () {
});
