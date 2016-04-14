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
  before: {
    method: function (doc) {
      doc['g-recaptcha-response'] = $('#g-recaptcha-response').val();
      return doc;
    }
  },
  onSuccess: function (formType, result) {
    debugger;
  },
  onError: function (formType, error) {
    debugger;
  },


};

AutoForm.hooks({
  enquiry_form: enquiryHook
});
