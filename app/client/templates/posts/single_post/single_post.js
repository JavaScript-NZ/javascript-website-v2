/*****************************************************************************/
/* SinglePost: Event Handlers */
/*****************************************************************************/
Template.SinglePost.events({
});

/*****************************************************************************/
/* SinglePost: Helpers */
/*****************************************************************************/
Template.SinglePost.helpers({
  'formatted': function (content) {
    var converter = new Showdown.converter();
    return converter.makeHtml(content);
  },
  'comments': function () {
    return Comments.find({});
  }
});

/*****************************************************************************/
/* SinglePost: Lifecycle Hooks */
/*****************************************************************************/
Template.SinglePost.onCreated(function () {
});

Template.SinglePost.onRendered(function () {
});

Template.SinglePost.onDestroyed(function () {
});
