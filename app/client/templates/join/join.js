/*****************************************************************************/
/* Join: Event Handlers */
/*****************************************************************************/
Template.Join.events({
});

/*****************************************************************************/
/* Join: Helpers */
/*****************************************************************************/
Template.Join.helpers({
  JoinFormSchema: function () {
    return JoinSchema;
  }
});

/*****************************************************************************/
/* Join: Lifecycle Hooks */
/*****************************************************************************/
Template.Join.onCreated(function () {
});

Template.Join.onRendered(function () {
});

Template.Join.onDestroyed(function () {
});

JoinSchema = new SimpleSchema({
  name:{
    type: String,  
    label: "Name"
  },
  email:{
    type: String, 
    regEx: SimpleSchema.RegEx.Email,
    label: "Email"
  },
  password:{
    type:String,
    min: 8,
    max: 25,
    autoform: {
      label: "Password 8-25 in length",
      type: "password"
    }
  },
  membership: {
    type: String,
    allowedValues: ['regular', 'student'],
    label: "Membership Type",
    autoform: {
      options: [
        {
          label: "Regular membership ($25/year)",
          value: 'regular'
        },
        {
          label: "Student membership ($10/year)",
          value: 'student'
        }
      ]
    }
  },
  agreeRules: {
    type: Boolean,
    allowedValues: [true],
    label: "I agree to the JavaScript NZ Rules"
  },
  agreeCoC: {
    type: Boolean,
    allowedValues: [true],
    label: "I agree to the JavaScript NZ Code of Conduct"
  }
});

JoinSchema.messages({
  "notAllowed agreeRules": "A renegade, are we?",
  "notAllowed agreeCoC": "A charlatan, are we?",

})
