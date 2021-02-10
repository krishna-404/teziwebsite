$(document).on('ready', function() {

      // sticky header
      var headerHeight = jQuery('body > header').outerHeight();

      jQuery('body').prepend('<div class="stickyHeight"></div>');
      jQuery('.stickyHeight').height(headerHeight)

      jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('body').addClass('sticky')
        } else {
            jQuery('body').removeClass('sticky')
        }

    });


   /* ----------------------- 
  Mobile menu Toggle
  ------------------------- */  
  $('.menuIcon').click(function(e) {
        $('body').toggleClass('menuSlide');
    $('.navigation-list').slideToggle('slow');
    });
      
});