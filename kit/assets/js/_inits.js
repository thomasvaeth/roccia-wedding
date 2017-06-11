$(function() {
  // Owl Carousel
  $('.carousel__container').owlCarousel({
    items: 1,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    nav: true,
    navText: [
      '<img src="http://dev.rocciawedding.com/assets/images/carousel/arrow-left.png" alt="Previous"/>', 
      '<img src="http://dev.rocciawedding.com/assets/images/carousel/arrow-right.png" alt="Next"/>'
    ],
    dots: false,
    responsive: {
      512: {
        margin: 10,
        stagePadding: 80
      },
      992: {
        margin: 20,
        stagePadding: 160
      }
    }
  });

  // Inits
  Map.init();
});
