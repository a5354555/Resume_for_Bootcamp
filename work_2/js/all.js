$(document).ready(function() {

	$(window).scroll(function(event) {
		if ($(this).scrollTop() > 965)  {
       	$('.nav-bar').addClass('navFixed');
    	} else {
     	$('.nav-bar').removeClass('navFixed');
  		};
 	});

  $(".nav-item").on('click', function(event) {

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

  $('.slide-container').slick({
    dots:true
  });


});