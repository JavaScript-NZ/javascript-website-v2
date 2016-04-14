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
  action: 'index',
  where: 'client'
});

Router.route('sink', {
  name: 'sink',
  controller: 'HomeController',
  action: 'sink',
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

Router.route('thanks', {
  name: 'thanks',
  controller: 'HomeController',
  action: 'thanks',
  where: 'client'
});

Router.route('join', {
  name: 'join',
  controller: 'JoinController',
  where: 'client'
});

Router.route('comment', {
  name: 'comment',
  controller: 'CommentController',
  where: 'client'
});


Router.route('photos', {
  name: 'photo.list',
  controller: 'PhotosController',
  action: 'list',
  where: 'client'
});

Router.route('photos/:_id', {
  name: 'photo.show',
  controller: 'PhotosController',
  action: 'show',
  where: 'client'
});


Router.route('photo_comments', {
  name: 'photoComments',
  controller: 'PhotoCommentsController',
  where: 'client'
});
