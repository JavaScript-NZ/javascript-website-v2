Meteor.publish('all_users', function () {
  return Meteor.users.find({}, {
    fields: {
      "services.twitter.profile_image_url_https": 1,
      "services.facebook.id": 1,
      "services.google.picture": 1,
      "services.github.username": 1,
      "services.instagram.profile_picture": 1,
      "services.linkedin.pictureUrl": 1,

      "profile": 1,
      "user.username": 1
    }
  });
});


Meteor.publish('posts', function (options) {
  check(options, {
    sort: Object,
    limit: Number
  });
  return Posts.find({}, options);
});

Meteor.publish('published_posts', function (options) {
  check(options, {
    sort: Object,
    limit: Number
  });
  return Posts.find({state:'published'}, options);
});


Meteor.publish('enquiry', function () {
  return Enquiry.find();
});

Meteor.publish('postCategory', function () {
  return PostCategory.find();
});

Meteor.publish('Comment', function () {
  return Comment.find();
});

Meteor.publish('comments', function (postId) {
  check(postId, Match.Maybe(String));
  return Comments.find({postId: postId});
});

Meteor.publish('photos', function (options) {
  check(options, {
    sort: Object,
    limit: Number
  });
  return Photos.find({}, options);
});

Meteor.publish('published_photos', function (options) {
  check(options, {
    sort: Object,
    limit: Number
  });
  return Photos.find({state: 'published'}, options);
});


Meteor.publish('photoComments', function (photoId) {
  check(photoId, Match.Maybe(String));
  return PhotoComments.find({photoId: photoId});
});
