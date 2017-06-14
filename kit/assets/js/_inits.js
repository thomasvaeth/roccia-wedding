$(function() {
  // Countdown
  var todayDate = new Date(),
      weddingDate = new Date(2018, 04, 20),
      day = 24 * 60 * 60 * 1000,
      diffDays = Math.round((weddingDate.getTime() - todayDate.getTime()) / day),
      $countdown = $('.countdown__time');

  if (diffDays > 1) {
    $countdown.text(diffDays + ' Days To Go');
  } else if (diffDays === 1) {
    $countdown.text(diffDays + ' Day To Go');
  } else {
    $countdown.text('0 Days To Go');
  }

  // Owl Carousel
  $('.carousel__container').owlCarousel({
    items: 1,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    nav: true,
    navText: [
      '<img src="http://www.rocciawedding.com/assets/images/carousel/arrow-left.png" alt="Previous"/>', 
      '<img src="http://www.rocciawedding.com/assets/images/carousel/arrow-right.png" alt="Next"/>'
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

  // Wow
  var wow = new WOW({
    boxClass: 'js-wow',
    mobile: false
  });

  // Spanizer
  $('.section-header').each(function() {
    var arr = $(this).html().split(''),
        newArr = [];
    arr.forEach(function(letter) {
      if (letter !== ' ') {
        newArr.push('<span class="js-wow fade-in-up">' + letter + '</span>');
      } else {
        newArr.push('<span class="js-wow fade-in-up">&nbsp;</span>');
      }
    });
    newArr = newArr.join('');
    $(this).html(newArr);
  });

  // Inits
  Map.init();
  wow.init();
});
