$(document).ready(function(){
    $('#name').mouseenter(function() {
    	$('#name').fadeTo('slow', 0);
    });
    $('#name').mouseleave(function() {
    	$('#name').fadeTo('slow', 1);
    });
});
