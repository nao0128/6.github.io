$(function () {
	
	$(window).on("load", function() {
    $('.fade-box').fadeIn(1500); 
});
	
$('.nav_toggle').on('click', function () {
  $('.nav_toggle, .nav,.nav_bg').toggleClass('show');
});

	$(window).on('scroll', function () {
    $('.inview').each(function() {
      var targetPosition = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetPosition - windowHeight) {
        $(this).addClass('show');
      }
    });
  });
	
	$(window).on('scroll', function () {
    $('.inview2').each(function() {
      var targetPosition = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetPosition - windowHeight) {
        $(this).addClass('show2');
      }
    });
  });
$('.ac-parent').on('click', function () {
    $(this).next().slideToggle('slow');
  });
	
});