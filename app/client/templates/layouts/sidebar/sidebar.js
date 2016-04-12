/*****************************************************************************/
/* Sidebar: Event Handlers */
/*****************************************************************************/
Template.Sidebar.events({
  'click .ui.vertical.menu .item': function () {
    $('.ui.sidebar').sidebar('toggle');
    $('.ui.sidebar').sidebar('dimPage', false);
  },
});

/*****************************************************************************/
/* Sidebar: Helpers */
/*****************************************************************************/
Template.Sidebar.helpers({
});

/*****************************************************************************/
/* Sidebar: Lifecycle Hooks */
/*****************************************************************************/
Template.Sidebar.onCreated(function () {
});

Template.Sidebar.onRendered(function () {
  $('.ui.sidebar')
    .sidebar({
      'attach events': '.toc.item',
      'dimPage': false
    })
  ;
});

Template.Sidebar.onDestroyed(function () {
});
