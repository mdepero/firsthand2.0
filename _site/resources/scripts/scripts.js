/*
 * Custom scripts go here.
 *
 */




$(document).ready(function(){

  // Smooth Scroll Code provided by CSS Tricks https://css-tricks.com/snippets/jquery/smooth-scrolling/
  // Provides smooth scrolling between any anchor that links within the same document.
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });


});// end document ready


