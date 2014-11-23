Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function(){
		return Meteor.subscribe('posts');
	}
});

Router.route('/', {name: 'postsList'});
Router.route('/posts/:_id', {
	name: 'postPage',
	data: function() { return Posts.findOne(this.params._id);}
});

Router.route('/profile', {name: 'editProfile'});

Router.route('/submit', {name: 'postSubmit'});
//Router.onBeforeAction('dataNotFound', {only: 'postSubmit'}); //come back to this, maybe remove it.


var requireLogin = function (){
	if(! Meteor.user()){
		if(Meteor.loggingIn()){
			this.render(this.loadingTemplate);
		}
		else{
		this.render('accessDenied');
	  }
	}
	else{
		this.next();
	}
}

Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});