$(function(){    
  
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

});
