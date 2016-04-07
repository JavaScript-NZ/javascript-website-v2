PostsController = RouteController.extend({
  
  subscriptions: function() {
  },
  
  waitOn: function () {
    return [
      Meteor.subscribe('published_posts', {sort: {submitted: -1, _id: -1}, limit: 0}),
      Meteor.subscribe('all_users'),
      Meteor.subscribe('comments', this.params._id),
    ];
  },
  
  data: function () {
    return Posts.findOne({_id: this.params._id});
  },
  
  list: function () {
    this.render('PostsList', {})
  },
  show: function () {
    this.render('SinglePost', {})
  },
  onRun: function () {
    this.next();
  },
  onRerun: function () {
    this.next();
  },
  onBeforeAction: function () {
    this.next();
  },
  
  action: function () {
    this.render();
  },
  onAfterAction: function () {
  },
  onStop: function () {
  }
});
