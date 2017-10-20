/*
 * ------------------------------------------------------------------------
 * Navigation
 * ------------------------------------------------------------------------
 */

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//Animated Hamburger Icon
$(document).ready(function(){
    $('#nav-icon').click(function(){
        $(this).toggleClass('open');
    });
});



/*
 * ------------------------------------------------------------------------
 * Magnific Popup
 * ------------------------------------------------------------------------
 */

// Initialize and Configure Magnific Popup Lightbox Plugin
$(document).ready(function() {
    $('.gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function(item) {
                return item.el.attr('title') +item.el.attr('data-description');
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 400, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
        
    });
});



/*
 * ------------------------------------------------------------------------
 * Match Height
 * ------------------------------------------------------------------------
 */

// Download
$(document).ready(function() {
  $(function() {
    $('.download-height').matchHeight({
      byRow: false,
      property: 'height',
      target: null,
      remove: false
    });
  });
});

// Testimonials
$(document).ready(function() {
  $(function() {
    $('.blockquote-height').matchHeight({
      byRow: false,
      property: 'height',
      target: null,
      remove: false
    });
  });
});



/*
 * ------------------------------------------------------------------------
 * WOW JS
 * ------------------------------------------------------------------------
 */

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();