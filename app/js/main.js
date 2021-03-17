$(function(){    
  
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    $('.header').addClass("sticky");
    }
    else{
    $('.header').removeClass("sticky");
    }
  });

  $('.hero__slider').slick({
    arrows: false,
    dots: true,
    fade: true
  });  

  var mixer = mixitup('.popular__gallery', {

  });

});