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
      {data: 'submitted', title: 'Submitted'}
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

    commentAttributes = _.extend(commentAttributes, {
      userId: user._id,
      author: user.username,
      
    })
  }
});
