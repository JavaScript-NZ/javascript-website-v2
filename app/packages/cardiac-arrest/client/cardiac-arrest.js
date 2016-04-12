var heartbeatInterval = 3*30*1000; // 3 minute default

var activityEvents = 'mousemove click keydown';

var heartbeatAlive = false;

Meteor.startup(function () {
  Meteor.setInterval(function () {
    if (Meteor.userId() && heartbeatAlive) {
      console.log('calling heartbeat');
      Meteor.call('heartbeat');
    }
  }, heartbeatInterval);

  $(document).on(activityEvents, function () {
   heartbeatAlive = true;
  });
});
