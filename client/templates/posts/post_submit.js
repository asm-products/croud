//This gets the values from the various fields for submitting a post and inserts 
//them into the object properties
Template.postSubmit.events({
	'submit form': function(e) {
	  e.preventDefault();

var post = {
	location: $(e.target).find('[name=location]').val(),
	title: $(e.target).find('[name=title]').val(),
	description: $(e.target).find('[name=description]').val()
};
	post._id = Posts.insert(post);
	Router.go('postPage', post);
  }
});



/*
This code includes the google javascript places api everytime the template is rendered*/
/*Template.postSubmit.rendered = function(){
	 /*var script = document.createElement("script");
	 script.type = "text/javascript";
	 script.src = "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places";
	 document.body.appendChild(script);*/

		/*	window.onload = function() {
			  /*var autocompleteEventPost = new google.maps.places.Autocomplete(
			    (document.getElementById('autocompleteEventPost')),{types: ['geocode'] }*/
			        /*    input = document.getElementById('autocomplete'); 
			        autocomplete = new google.maps.places.Autocomplete(input); 
			        // When the user selects an address from the dropdown, 
			        google.maps.event.addListener(autocomplete, 'place_changed', function() { 
		             // Get the place details from the autocomplete object. 
		             var place = autocomplete.getPlace(); 
		             console.log("place: " + JSON.stringify(place) ); 
		        }); 
			  };
			};*/
		
		/*		Handlebars.registerHelper ('truncate', function (str, len) {
	    if (str.length > len && str.length > 0) {
	        var new_str = str + " ";
	        new_str = str.substr (0, len);
	        new_str = str.substr (0, new_str.lastIndexOf(" "));
	        new_str = (new_str.length > 0) ? new_str : str.substr (0, len);

	        return new Handlebars.SafeString ( new_str +'...' ); 
	    }
	    return str;
	});*/
