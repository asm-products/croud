Template.postSubmit.events({
	'submit form': function(e) {
	  e.preventDefault();

var post = {
	location: $(e.target).find('[name=location]').val(),
	title: $(e.target).find('[name=title]').val()
};
	post._id = Posts.insert(post);
	Router.go('postPage', post);
  }
});