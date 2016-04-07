Comments = new orion.collection('comments', {
  singularName: 'comment',
  pluralName: 'comments',
  link: {
    title: 'Comments'
  },
  tabular: {
    columns: [
      {
        data: 'userId',
        title: 'Author',
        render: function (val, type, doc) {
          return Meteor.users.findOne(val).profile.name;
        }
      },
      {
        data: 'postId',
        title: 'Post Title',
        render: function (val, type, doc) {
          return Posts.findOne(val).title;
        }
      },
      {
        data: 'body',
        title: 'Body',
        render: function (val, type, doc) {
          return s(val).prune(20).value();
        }
      },
      orion.attributeColumn('createdAt', 'submitted', 'Submitted')
    ]
  }
});

Meteor.methods({
  commentInsert: function (commentAttributes) {
    check(this.userId, String);
    check(commentAttributes, {
      postId: String, 
      body: String,
    });
    
    var user = Meteor.user();
    var post = Posts.findOne(commentAttributes.postId);

    if (!post){
      throw new Meteor.Error('invalid-comment', 'You must comment on a post');
    }

    comment = _.extend(commentAttributes, {
      userId: user._id,
      submitted: new Date()
    });

    Posts.update(comment.postId, {$inc: {commentsCount: 1}});
    comment._id = Comments.insert(comment);

  //  Todo: add comment notifications
    return comment._id;
  }
});

Comments.attachSchema(new SimpleSchema({
  postId: orion.attribute('hasOne', {
    label: 'Post',
  }, {
    collection: Posts,
    titleField: 'title',
    publicationName: 'PB_Comment_Post'
  }),
  userId: orion.attribute('hasOne', {
    type: String,
    label: 'Author',
    optional: false
  }, {
    collection: Meteor.users,
    // the key whose value you want to show for each Post document on the Update form
    titleField: 'profile.name',
    publicationName: 'anotherRandomString',
  }),
  submitted: {
    type: Date,
    optional: false,
  },
  body: {
    type: String,
    optional: false,
  },
  image: orion.attribute('image', {
    optional: true,
    label: 'Comment Image'
  })
}));
