/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  'server/submitenquiry': function (doc) {
    check(doc,  {
      name: String,
      email: String,
      phone: Match.Optional(String),
      reason: String,
      message: String,
      "g-recaptcha-response": String
    });

    var verifyCaptchaResponse = Recaptcha.verifyCaptcha(this.connection.clientAddress, doc['g-recaptcha-response']);
    console.dir(verifyCaptchaResponse.data);

    if (verifyCaptchaResponse.data.success === false)
      throw new Meteor.Error("Oh no! A robot!");
    
    delete doc["g-recaptcha-response"];
    Enquiry.insert(doc,  function () {

    });
  }
});
