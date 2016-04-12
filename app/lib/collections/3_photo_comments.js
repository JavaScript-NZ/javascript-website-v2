PhotoComments = new orion.collection('photo_comments', {
  singularName: 'photo comment',
  pluralName: 'photo comments',
  link: {
    title: 'Photo Comments'
  },
  title: 'Photo Comments',
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
        data: 'photoId',
        title: 'Photo Title',
        render: function (val, type, doc) {
          return Photos.findOne(val).title;
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
  photoCommentInsert: function (commentAttributes) {
    check(this.userId, String);
    check(commentAttributes, {
      body: String,
      photoId: String,
    });

    var user = Meteor.user();
    var photo = Photos.findOne(commentAttributes.photoId);

    if (!photo) {
      throw new Meteor.Error('invalid-comment', 'You must comment on a photo');
    }

    var comment = _.extend(commentAttributes, {
      userId: user._id,
      submitted: new Date()
    });

    comment._id = PhotoComments.insert(comment);

    //  Todo: add comment notifications
    return comment._id;
  }
});

PhotoComments.attachSchema(new SimpleSchema({
  photoId: orion.attribute('hasOne', {
    label: 'Photo',
  }, {
    collection: Photos,
    titleField: 'title',
    publicationName: 'PB_Comment_Photo'
  }),
  userId: orion.attribute('hasOne', {
    type: String,
    label: 'Author',
    optional: false
  }, {
    collection: Meteor.users,
    // the key whose value you want to show for each Post document on the Update form
    titleField: 'profile.name',
    publicationName: 'PB_User_PhotoComment',
  }),
  submitted: {
    type: Date,
    optional: false,
  },
  body: {
    type: String,
    optional: false,
  },
  lockedBy: {
    type: String,
    autoform: {
      type: 'hidden'
    },
    optional: true
  }
}));
