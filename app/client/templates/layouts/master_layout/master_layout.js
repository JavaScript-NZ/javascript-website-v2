Template.MasterLayout.helpers({
});

Template.MasterLayout.events({
  'click .signout': function () {
    AccountsTemplates.logout();
  },
});

Template.MasterLayout.onRendered(function () {
  
  // create sidebar and attach to menu open
  $('.ui.sidebar')
    .sidebar('attach events', '.toc.item')
  ;
});
