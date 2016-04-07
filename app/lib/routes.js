Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  waitOn:function () {
    return Meteor.subscribe('pages');
  }
});

ReactiveTemplates.set('pages.loading', 'Loading');
ReactiveTemplates.set('pages.notFound', 'NotFound');

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('posts', {
  name: 'post.list',
  controller: 'PostsController',
  action: 'list',
  where: 'client'
});

Router.route('posts/:_id', {
  name: 'post.show',
  controller: 'PostsController',
  action: 'show',
  where: 'client'
});


Router.route('contact', {
  name: 'enquiry',
  controller: 'EnquiryController',
  where: 'client'
});


Router.route('comment', {
  name: 'comment',
  controller: 'CommentController',
  where: 'client'
});
