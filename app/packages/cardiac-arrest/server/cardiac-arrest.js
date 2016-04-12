var staleSessionInterval = 1*60*1000; //1 minute
var inactivityTimeout = 30*60*1000; //30 minutes

Meteor.methods({
  heartbeat: function () {
    console.log('server heartbeat');
    if (!this.userId) {return;}
    var user = Meteor.users.findOne(this.userId);
    if (user) {
      Meteor.users.update(user._id, {$set: {heartbeat: new Date()}});
    }
  }
});

Meteor.setInterval(function () {
  var now = new Date(), overdueTimestamp = new Date(now - inactivityTimeout);
  Meteor.users.update(
    {
      heartbeat: {$lt: overdueTimestamp}
    }, {
      $set: {'services.resume,loginTokens': []},
      $unset: {heartbeat: 1}
    }, {
      multi: true
    })
}, staleSessionInterval);
