/*****************************************************************************/
/* SinglePost: Event Handlers */
/*****************************************************************************/
Template.SinglePost.events({
  'click .comment_submit': function (event) {
    var data = $(event.target).closest('form').serializeArray();
    var formJson = _.object(_.pluck(data, 'name'), _.pluck(data, 'value'));
    console.dir(formJson);
    Meteor.call('commentInsert',
      formJson,
      function (error, result) {
        if (!error) {
          $('.comment_field').val("");
        }
      }
    );
  },
  'click .login_warning': function () {
    $('#login-dropdown').dropdown('show');
  }
});

/*****************************************************************************/
/* SinglePost: Helpers */
/*****************************************************************************/
Template.SinglePost.helpers({
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
