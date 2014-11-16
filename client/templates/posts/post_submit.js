//This gets the values from the various fields for submitting a post and inserts 
//them into the object properties
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

/*
This code includes the google javascript places api everytime the template is rendered*/
Template.postSubmit.rendered = function(){
	 var script = document.createElement("script");
	 script.type = "text/javascript";
	 script.src = "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places";
	 document.body.appendChild(script);

	 		window.onload = function() {
	  var autocomplete = new google.maps.places.Autocomplete(
	    (document.getElementById('autocomplete')),{types: ['geocode'] }
	  );
	};
}
