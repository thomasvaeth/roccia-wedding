//----------------------------------------------
// Scroll to Anchor
//---------------------------------------------- 
(function($) {
  $.fn.scrollAnchor = function(options, callback) {
    
    return this.each(function() {

      $('[data-scroll]').click(function(e) {
        e.preventDefault();
        var $this = $(this),
            offset = options.offset,
            target = ('#' + $(this).data('scroll')),
            $target = $(target);
        
        // Add Active Class
        if (options.addActive) {
          $('a[data-scroll]').removeClass('active');
        }
                
        // Scroll animation
        $('html, body').stop().animate({
          'scrollTop': $target.offset().top - offset
        }, {
          // Duration
          duration: 600,
          // Easing
          easing: 'easeInExpo',
          // Complete Callback
          complete: options.complete
        });
        
        // Callback
        $.isFunction( options.setup );
      });
    });
  };
}(jQuery));

$('html').scrollAnchor({
  offset: '65'
});
