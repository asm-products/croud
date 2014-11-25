
Template.userUpdate.rendered = function(){
	/* var script = document.createElement("script");
	 script.type = "text/javascript";
	 script.src = "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places";
	 document.body.appendChild(script);

	 		window.onload = function() {
	  var autocomplete = new google.maps.places.Autocomplete(
	    (document.getElementById('autocomplete')),{types: ['geocode'] }
	  );
	};*/
}

	var initAutoComplete = function() {
	      var autocomplete = new google.maps.places.Autocomplete(
	        (document.getElementById('autocomplete')),{types: ['geocode'] }
	      );
	};

	var initAutoCompletePost = function() {
	      var autocomplete = new google.maps.places.Autocomplete(
	        (document.getElementById('autocomplete')),{types: ['geocode'] }
	      );
	};

	Template.userUpdate.rendered = initAutoComplete;

	Template.postSubmit.rendered = initAutoCompletePost;

Template.userUpdate.events({
	'click #updateUser': function(e) {
	  e.preventDefault();
	  var userPlace = $('#autocomplete').val();
		Meteor.users.update({_id: Meteor.userId()}, {$set:
			{
				profile:{
				location: userPlace
					}
				}
			});
		//document.getElementById("setLocation").innerText = "Test4";
	}
});

if (Meteor.isServer) {
  Meteor.users.allow({
    'update': function () {
      return true; 
    }
  });
  Meteor.users.update( { _id: Meteor.userId() }, { $set: { 'oauth.token': token }} );
 }
