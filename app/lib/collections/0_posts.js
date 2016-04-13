Posts = new orion.collection('posts', {
  singularName: 'post',
  pluralName: 'posts',
  tabular: {
    columns: [
      {data: 'title', title: 'Title'},
      {data: 'state', title: 'State'},
      orion.attributeColumn('markdown', 'body', 'Content'),
      orion.attributeColumn('createdBy', 'createdBy', 'Created By')
    ]
  }
});

PostCategory = new orion.collection('post_category', {
  singularName: 'post category',
  pluralName: 'post categories',
  link: {
    title: 'Post Categories'
  },
  title: 'Post Categories',
  tabular: {
    columns: [
      {
        data: 'name',
        title: 'Name',
      }
    ]
  }
});


PostCategorySchema = new SimpleSchema({
  name: {
    type: String
  },
  lockedBy: {
    type: String,
    autoform: {
      type: 'hidden'
    },
    optional: true
  }
});

PostsSchema = new SimpleSchema({
  title: {
    type: String
  },
  state: {
    type: String,
    allowedValues: [
      "draft",
      "published",
      "archived"
    ],
    defaultValue: 'draft',
    label: "State"
  },
  body: orion.attribute('markdown', {
    label: 'Body'
  }),
  createdBy: orion.attribute('createdBy', {
    label: 'Created By'
  }),
  category: orion.attribute('hasOne', {
    label: 'Category',
  }, {
    collection: PostCategory,
    titleField: 'name',
    publicationName: 'PB_Post_PostCategory'
  }),
  lockedBy: {
    type: String,
    autoform: {
      type: 'hidden'
    },
    optional: true
  }
});

Posts.attachSchema(PostsSchema);
PostCategory.attachSchema(PostCategorySchema);
