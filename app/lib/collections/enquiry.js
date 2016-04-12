Enquiry = new orion.collection('enquiry', {
  singularName: 'enquiry',
  pluralName: 'enquiries',
  link: {
    title: 'Enquiries'
  },
  title: 'Enquiries',
  tabular: {
    columns: [
      {data: 'name', title: 'Name'},
      {data: 'email', title: 'Email'},
      {data: 'phone', title: 'Phone'},
      {data: 'reason', title: 'Reason'},
      {data: 'message', title: 'Message'},
      orion.attributeColumn('updatedAt', 'updatedAt', 'Updated At')
    ]
  }
});


EnquirySchema = new SimpleSchema({
  name: {type: String, label: "Name"},
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: "E-mail address"
  },
  phone: {
    type: "tel",
    optional: true,
    label: 'Phone (optional)'
  },
  reason: {
    type: String,
    allowedValues: ['committee', 'treasurer', 'secretary', 'president'],
    label: "What are you contacting us about?",
    autoform: {
      options: [
        {
          label: "General enquiry for the Committee",
          value: 'committee'
        },
        {
          label: "Question for the Treasurer",
          value: 'treasurer'
        },
        {
          label: "Question for the Secretary",
          value: 'secretary'
        },
        {
          label: "Question for the President",
          value: 'president'
        }
      ]
    }
  },
  message: {
    type: String,
    label: 'Message',
    autoform: {
      rows: 10
    }
  },
  updatedAt: orion.attribute('updatedAt', {
    label: 'Updated At'
  }),
  lockedBy: {
    type: String,
    autoform: {
      type: 'hidden'
    },
    optional: true
  }
});

Enquiry.attachSchema(EnquirySchema);
