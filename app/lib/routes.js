Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


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
