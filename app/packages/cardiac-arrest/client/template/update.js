Template.orionHeartbeatCollectionsUpdate.onCreated(function () {

});


var getCollection = function () {
  var collection = null;
  debugger;
  try {
    var path = RouterLayer.getPath().split('/')[2];
    collection = orion.collections.list[path];
  } catch (e) {
    console.log('Error getting collection', e);
  }
  return collection;
};

orion.collections.onCreated( function () {
  var self = this;
  ReactiveTemplates.onCreated('collections.' + self.name + '.update', function () {
    this.lockedDoc = RouterLayer.getParam('_id');
    Meteor.call('heartbeat');
    Meteor.call('lockDocument', getCollection().name, RouterLayer.getParam('_id'));
  });

  ReactiveTemplates.onDestroyed('collections.' + self.name + '.update', function () {
    Meteor.call('heartbeat');
    Meteor.call('unlockDocument', getCollection().name, this.lockedDoc);
  });

  ReactiveTemplates.onCreated('pages.update', function () {
    this.lockedDoc = RouterLayer.getParam('_id');
    Meteor.call('heartbeat');
    Meteor.call('lockDocument', 'pages', RouterLayer.getParam('_id'));
  });

  ReactiveTemplates.onDestroyed('pages.update', function () {
    Meteor.call('heartbeat');
    Meteor.call('unlockDocument', 'pages', this.lockedDoc);
  });
});



