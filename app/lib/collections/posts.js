Posts = new orion.collection('posts', {
  singularName: 'post',
  pluralName: 'posts',
  tabular: {
    columns: [
      {
        data: 'title',
        title: 'Title',
      },
      orion.attributeColumn('epic', 'body', 'Content'),
      orion.attributeColumn('createdBy', 'createdBy', 'Created By')
    ]
  }
});


PostsSchema = new SimpleSchema({
  title: {
    type: String
  },
  body: orion.attribute('epic', {
    label: 'Body'
  }),
  createdBy: orion.attribute('createdBy', {
    label: 'Created By'
  })
});

Posts.attachSchema(PostsSchema);
