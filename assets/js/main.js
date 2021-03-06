(function($) {

  "use strict";

  $(window).on('load', function() {

  /*Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    /* ==========================================================================
       countdown timer
       ========================================================================== */
        locale = document.documentElement.lang;
        translations = {
          'en': {
              'days': 'Days',
              'hours': 'Hours',
              'minutes': 'Minutes',
              'seconds': 'Seconds'
          },
          'fr' : {
              'days': 'Jours',
              'hours': 'Heures',
              'minutes': 'Minutes',
              'seconds': 'Secondes'
          }
      }

     jQuery('#clock').countdown('2019/03/23',function(event){
      var $this=jQuery(this).html(event.strftime(''
      +'<div class="time-entry days"><span>%-D</span>' + translations[locale].days + '</div> '
      +'<div class="time-entry hours"><span>%H</span>' + translations[locale].hours + '</div> '
      +'<div class="time-entry minutes"><span>%M</span>' + translations[locale].minutes + '</div> '
      +'<div class="time-entry seconds"><span>%S</span>' + translations[locale].seconds + '</div> '));
    });

    /* slicknav mobile menu active  */
    $('.mobile-menu').slicknav({
        prependTo: '.navbar-header',
        parentTag: 'liner',
        allowParentLinks: true,
        duplicate: true,
        label: '',
      });

      /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });
    wow.init();

    /* Nivo Lightbox
    ========================================================*/
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
      });

    // one page navigation
    $('.navbar-nav').onePageNav({
            currentClass: 'active'
    });

    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });

  });

}(jQuery));