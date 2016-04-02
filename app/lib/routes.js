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

Router.route('/contact', {
  name: 'contact',
  controller: 'HomeController',
  action: 'contact',
  where: 'client'
});

Router.route('posts', {
  name: 'posts',
  controller: 'PostsController',
  where: 'client'
});
