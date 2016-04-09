PhotosController = RouteController.extend({
  
  subscriptions: function() {
  },
  
  waitOn: function () {
    return [
      Meteor.subscribe('published_photos', {sort: {submitted: -1, _id: -1}, limit: 0}),
      Meteor.subscribe('all_users'),
      Meteor.subscribe('photoComments', this.params._id),
    ]
  },
  
  data: function () {
    return Photos.findOne({_id: this.params._id});
  },

  list: function () {
    this.render('PhotoList', {})
  },
  show: function () {
    this.render('SinglePhoto', {})
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
