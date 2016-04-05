Template.MasterLayout.helpers({
});

Template.MasterLayout.events({
  'click .signout': function () {
    AccountsTemplates.logout();
  },
});

Template.MasterLayout.onRendered(function () {
});
