Comments = new orion.collection('comments', {
  singularName: 'comment',
  pluralName: 'comments',
  link: {
    title: 'Comments'
  },
  tabular: {
    columns: [
      {data: 'author', title: 'Author'},
      {data: 'postId', title: 'Post ID'},
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
      author: user.username,
      submitted: new Date()
    });

    Posts.update(comment.postId, {$inc: {commentsCount: 1}});
    comment._id = Comments.insert(comment);

  //  Todo: add comment notifications
    return comment._id;
  }
});

Comments.attachSchema(new SimpleSchema({
  postId: {
    type: String,
    optional: false,
    label: 'Post ID'
  },
  userId: {
    type: String,
    optional: false,
    label: 'User ID',
  },
  author: {
    type: String,
    optional: false,
  },
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
