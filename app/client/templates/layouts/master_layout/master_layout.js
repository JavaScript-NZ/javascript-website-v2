Template.MasterLayout.helpers({
});

Template.MasterLayout.events({
  'click .signout': function () {
    AccountsTemplates.logout();
  },
});

Template.MasterLayout.onRendered(function () {
  //JAVASCRIPT NZ Inc
  NanoKern($('.hero-prefix')[0],
    [
      0,-1,-4,-4
    ]
  );
});
