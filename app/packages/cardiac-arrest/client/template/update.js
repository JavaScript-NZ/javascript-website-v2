Template.orionHeartbeatCollectionsUpdate.onCreated(function () {
  var instance = this;
  instance.autorun(function () {
    instance.subscribe('all_users');
  });
});

Template.orionHeartbeatPagesUpdate.onCreated(function () {
  var instance = this;
  instance.autorun(function () {
    instance.subscribe('all_users');
  });
});

Template.orionHeartbeatCollectionsUpdate.helpers({
  isLocked: function () {
    if (getCollection()) {
      var item = getCollection().findOne({});
      if (item) {
        if ('lockedBy' in item)
          return (item.lockedBy !== Meteor.userId());
      }
    }
    return false;

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
    var item = orion.pages.collection.findOne({});
    if (item) {
      if ('lockedBy' in item)
        return (item.lockedBy !== Meteor.userId());
    }
    return false;

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
    Meteor.call('heartbeat');
    Meteor.call('lockDocument', getCollection().name, RouterLayer.getParam('_id'));
  });

  ReactiveTemplates.onDestroyed('collections.' + self.name + '.update', function () {
    Meteor.call('heartbeat');
    Meteor.call('unlockDocument', this.lockedCollection, this.lockedDoc);
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



