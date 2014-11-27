Attendees = new Mongo.Collection('attendees');

Attendees.allow({
	insert: function(userId, doc) {
	// only allow posting if you are logged in
	  return !! userId;
	}
});

if (Meteor.isServer) {
    Meteor.publish('attendees', function(){
	return Attendees.find()});
}