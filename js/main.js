$(function () {
	
	$(window).on("load", function() {
    $('.fade-box').fadeIn(1500); 
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
/*-------------ナビゲーション----------------*/	
const hov1 = $('#js-hover1')
hov1.hover(
  function () {
    $('.hov-child1').slideToggle("");
  }
);
const hov2 = $('#js-hover2')
hov2.hover(
  function () {
    $('.hov-child2').slideToggle("");
  }
);
/*-------------TOPにもどるボタン----------------*/		
	$(document).ready(function() {
  var pagetop = $('.pagetop');
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
            }
       });
       pagetop.click(function () {
           $('body, html').animate({ scrollTop: 0 }, 500);
              return false;
   });
});
/*$('.ac-parent').on('click', function () {
    $(this).next().slideToggle('slow');
        if($(this).hasClass('show')) {
            $(this).removeClass('show');
        } else {
            $(this).addClass('show');
        }
  });*/
/*-------------ナビゲーション----------------*/ 
  $('.nav_toggle').click(function() { //ボタンをクリックしたら

    $(this).toggleClass('show');//ボタン自身に activeクラスを付与し
    $('.nav_bg').toggleClass('show');//背景にbg-activeクラスを付与
    $('#nav').toggleClass('show');//ナビにpanel-activeクラスを付与

  });
  $('.nav_bg').click(function() { //背景をクリックしたら
    $('.nav_toggle').removeClass('show');//ボタンからactiveクラスを剥奪
    $('#nav').removeClass('show');//ナビからpanel-activeクラスを剥奪
    $('.nav_bg').removeClass('show');//背景からbg-activeクラスを剥奪
  });
	$('.hov-child__').click(function() { //ボタンをクリックしたら
    $('.nav_toggle').removeClass('show');//ボタンからactiveクラスを剥奪
    $('#nav').removeClass('show');//ナビからpanel-activeクラスを剥奪
    $('.nav_bg').removeClass('show');//背景からbg-activeクラスを剥奪
  });
  $(window).keyup(function(e){//キーをクリックして
    if(e.key === "Escape"){//ESCキーだったら
      $('.nav_toggle').removeClass('show');//ボタンからactiveクラスを剥奪
      $('#nav').removeClass('show');//ナビからpanel-activeクラスを剥奪
      $('.nav_bg').removeClass('show');//背景からbg-activeクラスを剥奪
      $('body').removeClass('fixed').css({ top: 0 });//背景固定を解除
      $(window).scrollTop(scrollPos);//元の位置までスクロール
    }
  });
});