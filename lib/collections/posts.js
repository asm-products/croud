Posts = new Mongo.Collection('posts');

Posts.allow({
	insert: function(userId, doc) {
	// only allow posting if you are logged in
	  return !! userId;
	}
});

if (Meteor.isServer) {
    Meteor.publish('posts', function(){
	return Posts.find()});
}

/*
if(Meteor.isClient) {
    Meteor.subscribe('posts');
}*/