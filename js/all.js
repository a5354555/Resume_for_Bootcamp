$(document).ready(function() {

	$(window).scroll(function(event) {
		if ($(this).scrollTop() > 580)  {
       	$('.button-showcase').addClass('navFixed button-showcase-bg');
    	} else {
     	$('.button-showcase').removeClass('navFixed button-showcase-bg ');
  		};
 	});


  $(".button").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').stop().animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
        });
      }
  });
});