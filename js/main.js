

$(document).ready(function() {
 
  var owl = $("#owl-demo");
    var slider = $('.slider');

  owl.owlCarousel({
      items : 3,
      center: true,
      loop: true,
      autoplay: true,
      autoplayTimeout : 2000,
      pagination: false,
      margin: 10,
      responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
  });
 
/*  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })*/
    $('.next').click(function() {
    owl.trigger('next.owl.carousel');
    })
    $('.prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
    })
    
  
});