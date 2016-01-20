$(document).ready(function () {

	function navigationSmoothAnimation (e) {
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

	function showLearnMoreModal () {
		var title = $(this).parent().find(".title").text();
		var bodyText = $(this).parent().find(".modalText").html();

		$(".modal-title").text(title);
		$(".modal-body").html(bodyText);
		$("#myModal").modal();
	}



	

	$(".nav li a[href^='#']").on("click", navigationSmoothAnimation );
	$(".learnMore").on("click", showLearnMoreModal );
				
	
});

