if (Meteor.isClient) {
  Template.orionAttributesEpic.helpers({
  });

  Template.orionAttributesEpic.onRendered(function () {
    // $('#MDEEditor').markdown();
  });

  Template.orionAttributesEpicColumn.helpers({
    preview: function () {
      var value = this.value;
      var converter = new Showdown.converter();
      return s(value).prune(20).value();
    }
  });
}
