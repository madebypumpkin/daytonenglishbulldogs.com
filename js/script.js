// When the browser is ready...
$(document).ready(function() {
    //This is the js that makes the animated scroll to the top
	$('.back-to-top').click(function(event){
		event.preventDefault();
		$('body').animate({scrollTop: '0px'}, 500);
	});
	//This is the js that makes image into a lightbox
	$(".fancybox").fancybox();
});
