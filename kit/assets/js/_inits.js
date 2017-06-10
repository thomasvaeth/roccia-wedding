$(function() {
  // Owl Carousel
  $('.carousel__container').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    navText: [
      '<img src="http://dev.rocciawedding.com/assets/images/carousel/arrow-left.png" alt="Previous"/>', 
      '<img src="http://dev.rocciawedding.com/assets/images/carousel/arrow-right.png" alt="Next"/>'
    ],
    responsive: {
      512: {
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        margin: 10,
        stagePadding: 80,
        dots: false
      },
      768: {
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        margin: 20,
        stagePadding: 160,
        dots: false
      }
    }
  });

  // Inits
  Map.init();
});
