Photos = new orion.collection('photos', {
  singularName: 'photo',
  pluralName: 'gallery',
  link: {
    title: 'Gallery'
  },
  tabular: {
    columns: [
      {
        data: 'title',
        title: 'Title',
      },
      {
        data: 'userId',
        title: 'Author',
        render: function (val, type, doc) {
          return Meteor.users.findOne(val).profile.name;
        }
      },
      //ToDo: Thumbnail
      orion.attributeColumn('epic', 'body', 'Content'),
      orion.attributeColumn('createdAt', 'createdAt', 'Created At'),
      orion.attributeColumn('createdBy', 'createdBy', 'Created By')
    ]
  }
});

Photos.attachSchema(new SimpleSchema({
  title: {type: String},
  userId: orion.attribute('hasOne', {
    type: String,
    label: 'Author',
    optional: false
  }, {
    collection: Meteor.users,
    // the key whose value you want to show for each Post document on the Update form
    titleField: 'profile.name',
    publicationName: 'PB_Photos_Author',
  }),
  image: orion.attribute('image', {
    optional: true,
    label: 'Image'
  }),
  body: orion.attribute('epic', {
    label: 'Body'
  }),
  createdBy: orion.attribute('createdBy', {
    label: 'Created By'
  }),
  createdAt: orion.attribute('createdAt', {
    label: 'Created At'
  }),
}));
