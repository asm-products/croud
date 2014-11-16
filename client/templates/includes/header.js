Template.header.events({
'click .navbar-toggle': function (e) {
    e.preventDefault();
    $(e.target).find('.navbar-toggle').toggle();
    }
});