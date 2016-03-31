Posts = new orion.collection('posts', {
  singularName: 'post',
  pluralName: 'posts',
  tabular: {
    columns: [
      {
        data: 'title',
        title: 'Title',
      },
      orion.attributeColumn('summernote', 'body', 'Content'),
      orion.attributeColumn('createdBy', 'createdBy', 'Created By')
    ]
  }
});


PostsSchema = new SimpleSchema({
  title: {
    type: String
  },
  body: orion.attribute('summernote', {
    label: 'Body'
  }),
  createdBy: orion.attribute('createdBy', {
    label: 'Created By'
  })
});

Posts.attachSchema(PostsSchema);
