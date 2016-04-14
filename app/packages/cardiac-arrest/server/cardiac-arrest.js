var staleSessionInterval = 1*60*1000; //1 minute
var inactivityTimeout = 10*60*1000; //30 minutes

Meteor.methods({
  heartbeat: function () {
    if (!this.userId) {return;}
    var user = Meteor.users.findOne(this.userId);
    if (user) {
      Meteor.users.update(user._id, {$set: {heartbeat: new Date()}});
    }
  }
});



Meteor.setInterval(function () {
    var now = new Date(), overdueTimestamp = new Date(now - inactivityTimeout);

    var deadUsers = Meteor.users.find({
      heartbeat: {$lt: overdueTimestamp}
    }).map(function (block) {
      return block._id;
    });

    if (deadUsers.length > 0) {
      console.dir(['unlocking stale docs for', deadUsers]);
      var collections = orion.collections.list;
      collections['mdPages'] = orion.pages.collection;

      for (var key in collections) {
        if (collections.hasOwnProperty(key)) {
          collections[key].update(
            {
              lockedBy: {"$in": deadUsers}
            }, {
              $unset: {lockedBy: ''}
            });
        }
      }


      Meteor.users.update(
        {
          heartbeat: {$lt: overdueTimestamp}
        }, {
          $set: {'services.resume,loginTokens': []},
          $unset: {heartbeat: 1}
        }, {
          multi: true
        });
    }
  }
  , staleSessionInterval);

Meteor.methods({
  lockDocument: function (collectionName, docId) {
    check(collectionName, String);
    check(docId, String);
    if (!this.userId) {
      return;
    }
    var collection = orion.collections.list[collectionName];
    var lockingDoc = null;

    if (collectionName === 'pages') {
      lockingDoc = orion.pages.collection.findOne({_id: docId});
    } else {
      lockingDoc = collection.findOne({_id: docId});
    }
    if (!lockingDoc) {
      return;
    }
    var user = Meteor.users.findOne(this.userId);
    if (lockingDoc.lockedBy !== user._id && 'lockedBy' in lockingDoc) {
      console.log(docId + ' already locked by ' + lockingDoc.lockedBy);
      return;
    }
    if (user) {
      try {
        console.log('locking ' + collectionName + ': ' + docId);
        if (collectionName === 'pages') {
          orion.pages.collection.update({_id: docId}, {$set: {lockedBy: user._id}});
        } else {
          collection.update({_id: docId}, {$set: {lockedBy: user._id}});
        }
      }catch (e) {
        console.log('Error updating document', e);
      }
    }
  },
  unlockDocument: function (collectionName, docId) {
    check(collectionName, String);
    check(docId, String);
    if (!this.userId) {
      return;
    }
    var user = Meteor.users.findOne(this.userId);

    var collection = orion.collections.list[collectionName];
    var lockingDoc = null;

    if (collectionName === 'pages') {
      lockingDoc = orion.pages.collection.findOne({_id: docId});
    } else {
      lockingDoc = collection.findOne({_id: docId});
    }
    if (!lockingDoc) {
      return;
    }

    if (lockingDoc.lockedBy !== user._id && 'lockedBy' in lockingDoc) {
      console.log(docId + ' owned by ' + lockingDoc.lockedBy + '.  skipping unlock');
      return;
    }

    if (user) {
      try {
        console.log('unlocking ' + collectionName + ': ' + docId);
        if (collectionName === 'pages') {
          orion.pages.collection.update({_id: docId}, {$unset: {lockedBy: ''}});
        } else {
          var collection = orion.collections.list[collectionName];
          collection.update({_id: docId}, {$unset: {lockedBy: ''}});
        }
      } catch (e) {
        console.log('Error updating document', e);
      }
    }
  }
});

Meteor.publish('all_users', function () {
  return Meteor.users.find({}, {
    fields: {
      "services.twitter.profile_image_url_https": 1,
      "services.facebook.id": 1,
      "services.google.picture": 1,
      "services.github.username": 1,
      "services.instagram.profile_picture": 1,
      "services.linkedin.pictureUrl": 1,

      "profile": 1,
      "user.username": 1
    }
  });
});
