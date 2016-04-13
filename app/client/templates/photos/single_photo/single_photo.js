/*****************************************************************************/
/* SinglePhoto: Event Handlers */
/*****************************************************************************/
Template.SinglePhoto.events({
  'click .comment_submit': function (event) {
    var data = $(event.target).closest('form').serializeArray();
    var formJson = _.object(_.pluck(data, 'name'), _.pluck(data, 'value'));
    Meteor.call('photoCommentInsert',
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
/* SinglePhoto: Helpers */
/*****************************************************************************/
Template.SinglePhoto.helpers({
  'comments': function () {
    return PhotoComments.find({});
  }
});

/*****************************************************************************/
/* SinglePhoto: Lifecycle Hooks */
/*****************************************************************************/
Template.SinglePhoto.onCreated(function () {
});

Template.SinglePhoto.onRendered(function () {
});

Template.SinglePhoto.onDestroyed(function () {
});
