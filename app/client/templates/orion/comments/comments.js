/*****************************************************************************/
/* Comments: Event Handlers */
/*****************************************************************************/
Template.Comments.events({
});

/*****************************************************************************/
/* Comments: Helpers */
/*****************************************************************************/
Template.Comments.helpers({
});

/*****************************************************************************/
/* Comments: Lifecycle Hooks */
/*****************************************************************************/
Template.Comments.onCreated(function () {
});

Template.Comments.onRendered(function () {
});

Template.Comments.onDestroyed(function () {
});


ReactiveTemplates.onCreated('collections.comments.index', function () {
  this.subscribe('posts', {sort: {submitted: -1, _id: -1}, limit: 0});
  this.subscribe('all_users');
});


ReactiveTemplates.onCreated('collections.photo_comments.index', function () {
  this.subscribe('photos', {sort: {submitted: -1, _id: -1}, limit: 0});
  this.subscribe('all_users');
});


