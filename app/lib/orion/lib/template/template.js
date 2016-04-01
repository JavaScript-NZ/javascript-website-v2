if (Meteor.isClient) {
  Template.orionAttributesEpic.helpers({
    content: function () {

    }
  });

  Template.orionAttributesEpicColumn.helpers({
    preview: function () {
      var value = this.value;
      var converter = new Showdown.converter();
      return s(value).prune(20).value();
    }
  });
}
