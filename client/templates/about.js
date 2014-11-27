$(document).on('click', '#learnmore', function(event) { 
    event.preventDefault(); 
    event.stopPropagation();
    $(this).next('#login-dropdown-list').find('[data-toggle=dropdown]').dropdown('toggle');
    //$("#login-dropdown-list a").click(); 
});