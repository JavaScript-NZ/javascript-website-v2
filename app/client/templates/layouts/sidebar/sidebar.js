/*****************************************************************************/
/* Sidebar: Event Handlers */
/*****************************************************************************/
Template.Sidebar.events({
  'click .ui.vertical.menu .item': function (evt) {
    $('.ui.sidebar').sidebar('toggle');
  }
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
