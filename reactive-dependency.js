var _objs = {};
var _list = new ReactiveDict();
var _dep_trackers = [];

Dependency = {
  add: function(name, object){
    _objs[name] = object;
    _list.set(name, true);
    Tracker.flush();
  },
  get: function(name){
    _list.get(name);
    return _objs[name];
  },
  autorun: function(func){
    _dep_trackers.push(Tracker.autorun(func));
  },
  invalidate: function(func){
    _.each(_dep_trackers, function(tracker){
      tracker.stop();
    });
  }
};

// Invalidate Dependency Trackers. Not sure if it is useful or not yet.
// Meteor.startup(function(){
//   Dependency.invalidate();
// });
