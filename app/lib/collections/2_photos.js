Photos = new orion.collection('photos', {
  singularName: 'photo',
  pluralName: 'photos',
  link: {
    title: 'Photos'
  },
  tabular: {
    columns: [
      {data: 'title', title: 'Title'},
      {data: 'state', title: 'State'},
      //ToDo: Thumbnail
      orion.attributeColumn('markdown', 'body', 'Content'),
      orion.attributeColumn('createdAt', 'createdAt', 'Created At'),
      orion.attributeColumn('createdBy', 'createdBy', 'Created By')
    ]
  }
});

Photos.attachSchema(new SimpleSchema({
  title: {type: String},
  state: {
    type: String,
    allowedValues: [
      "draft",
      "published",
      "archived"
    ],
    label: "State"
  },
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
  body: orion.attribute('markdown', {
    label: 'Body'
  }),
  createdBy: orion.attribute('createdBy', {
    label: 'Created By'
  }),
  createdAt: orion.attribute('createdAt', {
    label: 'Created At'
  }),
  lockedBy: {
    type: String,
    autoform: {
      type: 'hidden'
    },
    optional: true
  }
}));
