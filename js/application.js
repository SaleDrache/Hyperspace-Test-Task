$(document).ready(function () {

	function smoothAnimation (e) {
		   // prevent default anchor click behavior
	   e.preventDefault();

	   // store hash
	   var hash = this.hash;

	   // animate
	   $('html, body').animate({
	       scrollTop: $(hash).offset().top
	     }, 1000, function(){

	       // when done, add hash to url
	       // (default click behaviour)
	       window.location.hash = hash;
	     });
	}

	

	$(".nav li a[href^='#']").on('click', smoothAnimation );
				
	
});

