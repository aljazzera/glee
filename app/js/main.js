$(function(){  
  
  if ($(window).scrollTop() > 1){
    $('.header').addClass("sticky");
  }
  
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1){
      $('.header').addClass("sticky");
    } else {
      $('.header').removeClass("sticky");
    }
  });

  $('.hero__slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true
  }); 
  
  $('.partners__list').slick({
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
  }); 

  var mixProduct = $('[data-ref="mixProduct"]');
  var mixNew = $('[data-ref="mixNew"]');

  var mixer1 = mixitup(mixProduct, {
    selectors: {
      control: '.filter1'
    },
    animation: {
      effects: 'scale fade',
      duration: 800
    }
  });

  var mixer2 = mixitup(mixNew, {
    selectors: {
      control: '.filter2'
    },
    animation: {
      effects: 'scale fade',
      duration: 800
    }
  });


  $('.video__link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

});
