Template.orionHeartbeatCollectionsUpdate.onCreated(function () {
  Meteor.call('heartbeat');
  var instance = this;
  var docId = RouterLayer.getParam('_id');
  var collection = getCollection();
  var collectionName = collection.name;
  instance.autorun(function (c) {
    instance.subscribe('all_users');
    var subscription = instance.subscribe('adminGetOne.' + collectionName, docId);
    if (subscription.ready()) {
      var doc = collection.findOne({});
      if (!isDocumentLocked(collection)) {
        Meteor.call('lockDocument', collectionName, docId);
        c.stop();
      }
    }
  });
});
Template.orionHeartbeatCollectionsUpdate.onDestroyed(function () {
  Meteor.call('heartbeat');
  Meteor.call('unlockDocument', this.lockedCollection, this.lockedDoc);
});

Template.orionHeartbeatPagesUpdate.onCreated(function () {
  Meteor.call('heartbeat');
  var instance = this;
  var docId = RouterLayer.getParam('_id');
  var collection = orion.pages.collection;
  instance.autorun(function (c) {
    instance.subscribe('all_users');
    var subscription = instance.subscribe('pageById', docId);
    if (subscription.ready()) {
      var doc = collection.findOne({});
      if (!isDocumentLocked(collection)) {
        Meteor.call('lockDocument', 'pages', docId);
        c.stop();
      }
    }
  });
});
Template.orionHeartbeatPagesUpdate.onDestroyed(function () {
  Meteor.call('heartbeat');
  Meteor.call('unlockDocument', 'pages', this.lockedDoc);
});

Template.orionHeartbeatCollectionsUpdate.helpers({
  isLocked: function () {
    return isDocumentLocked(getCollection());
  },
  lockedBy: function () {
    if (getCollection()) {
      var item = getCollection().findOne({});
      if (item) {
        if ('lockedBy' in item)
          return item.lockedBy;
      }
    }
  }
});

Template.orionHeartbeatPagesUpdate.helpers({
  isLocked: function () {
    return isDocumentLocked(orion.pages.collection);
  },
  lockedBy: function () {
    var item = orion.pages.collection.findOne({});
    if (item) {
      if ('lockedBy' in item)
        return item.lockedBy;
    }
  }
});

Template.registerHelper('_usernameFromId', function (userId) {
  var user = Meteor.users.findOne({_id: userId});
  if (typeof user === "undefined") {
    return "Anonymous";
  }

  var displayName = '';

  if (typeof user.profile.displayName !== 'undefined') {
    displayName = user.profile.displayName;
  } else if (typeof user.profile.name !== 'undefined') {
    displayName = user.profile.name;
  } else if (typeof user.emails !== 'undefined') {
    displayName = user.emails[0].address;
  } else {
    displayName = user._id;
  }
  return displayName;
});

var isDocumentLocked = function (collection) {
  if (collection) {
    var item = collection.findOne({});
    if (item) {
      if ('lockedBy' in item)
        return (item.lockedBy !== Meteor.userId());
    }
  }
  return false;
};

var getCollection = function () {
  var collection = null;
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
    this.lockedCollection = getCollection().name;
  });
});

ReactiveTemplates.onCreated('pages.update', function () {
  this.lockedDoc = RouterLayer.getParam('_id');

});




