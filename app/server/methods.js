/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  'server/method_name': function (doc) {
    check(doc,  {
      name: String,
      email: String,
      phone: Match.Optional(String),
      reason: String,
      message: String
    });
    Enquiry.insert(doc,  function () {
      
    });
  }
});
