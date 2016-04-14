/*****************************************************************************/
/* Enquiry: Event Handlers */
/*****************************************************************************/
Template.Enquiry.events({
});

/*****************************************************************************/
/* Enquiry: Helpers */
/*****************************************************************************/
Template.Enquiry.helpers({
});

/*****************************************************************************/
/* Enquiry: Lifecycle Hooks */
/*****************************************************************************/
Template.Enquiry.onCreated(function () {
});

Template.Enquiry.onRendered(function () {
});

Template.Enquiry.onDestroyed(function () {
});

var enquiryHook = {
  onSubmit: function (insertDoc, updateDoc, currentDoc) {
    debugger;
    var self = this;
    this.event.preventDefault();
    insertDoc['g-recaptcha-response'] = $('#g-recaptcha-response').val();
    Meteor.call('server/submitenquiry', insertDoc, function (error, result) {
      if (error) {
        self.done(error);
      } else {
        self.done(null, result);
      }
    });
    return true;
  },
  onSuccess: function (formType, result) {
    debugger;
  },
  onError: function (formType, error) {
    AutoForm.resetForm('enquiry_form');
  },


};

AutoForm.hooks({
  enquiry_form: enquiryHook
});
