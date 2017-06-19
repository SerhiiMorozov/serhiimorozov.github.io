/* если у Вас в документе есть ошибки в js в любых других функциях, или подключаемых файлах (даже самые простые например вызов несуществующего метода), то есть вероятность, что $(document).ready не отработает, т.к. видимо считает что DOM модель еще не готова */

/*
 * ------------------------------------------------------------------------
 * Page Transition
 * ------------------------------------------------------------------------
 */

$("body").css("display", "none");
$("body").fadeIn(1000);
$("a.page-transition").click(function(event) {
    event.preventDefault();
    linkLocation = this.href;
    $("body").fadeOut(200, redirectPage);
});
function redirectPage() {
  window.location = linkLocation;
}


/*
 * ------------------------------------------------------------------------
 * Isotope
 * http://isotope.metafizzy.co/
 * ------------------------------------------------------------------------
 */

$(document).ready(function() {
    var $container = $('.isotope');
    $('#filters button').click(function(){
    var $this = $(this);
        if ( !$this.hasClass('is-checked') ) {
          $this.parents('#options').find('.is-checked').removeClass('is-checked');
          $this.addClass('is-checked');
        }
      var selector = $this.attr('data-filter');
      $container.isotope({ itemSelector: '.item', filter: selector });
      return false;
    });
});


/*
 * ------------------------------------------------------------------------
 * Magnific Popup
 * http://dimsemenov.com/plugins/magnific-popup/
 * ------------------------------------------------------------------------
 */

$(document).ready(function() {
    var groups = {};
    $('.gallery').each(function() {
        var id = parseInt($(this).attr('data-group'), 10);
        if(!groups[id]) {
            groups[id] = [];
        } 
        groups[id].push( this );
    });

    $.each(groups, function() {
        $(this).magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            gallery: {
                enabled: true
            },
            image: {
                verticalFit: true,
                titleSrc: function(item) {
                    return item.el.attr('title');
                }
            }
        })
    });
});


/*
 * ------------------------------------------------------------------------
 * Barfiller
 * https://github.com/9bitStudios/barfiller/
 * ------------------------------------------------------------------------
 */

$(document).ready(function(){
    $('#bar1').barfiller({ barColor: '#647072', duration: 1000 });
    $('#bar2').barfiller({ barColor: '#647072', duration: 1000 });
    $('#bar3').barfiller({ barColor: '#647072', duration: 1000 });
    $('#bar4').barfiller({ barColor: '#647072', duration: 1000 });
    $('#bar5').barfiller({ barColor: '#647072', duration: 1000 });
});


/*
 * ------------------------------------------------------------------------
 * Owl Carousel 2
 * https://owlcarousel2.github.io/OwlCarousel2/index.html
 * ------------------------------------------------------------------------
 */

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        navText: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 4000,
        responsive:{
            0:{
                items: 1,
                touchDrag : true,
                mouseDrag : false
            }
        }
    })
});


/*
 * ------------------------------------------------------------------------
 * Google Map
 * Map style (https://snazzymaps.com/)
 * ------------------------------------------------------------------------
 */

google.maps.event.addDomListener(window, 'load', init);
function init() {
    var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(48.464717, 35.046183),
        // Map style (https://snazzymaps.com/)
        styles: [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#0060ff"
            },
            {
                "lightness": -100
            },
            {
                "visibility": "off"
            },
            {
                "saturation": "-77"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#848ea4"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#0060ff"
            },
            {
                "saturation": "-70"
            },
            {
                "lightness": "0"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "hue": "#0050ff"
            },
            {
                "saturation": "0"
            },
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#0060ff"
            },
            {
                "saturation": "-80"
            },
            {
                "lightness": "-90"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#0060ff"
            },
            {
                "saturation": "-80"
            },
            {
                "lightness": "-70"
            },
            {
                "visibility": "off"
            },
            {
                "gamma": "1"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#0060ff"
            },
            {
                "saturation": "-85"
            },
            {
                "lightness": "60"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#0060ff"
            },
            {
                "saturation": "-70"
            },
            {
                "lightness": "50"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#0060ff"
            },
            {
                "saturation": "0"
            },
            {
                "lightness": "-11"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#0060ff"
            },
            {
                "lightness": "0"
            },
            {
                "saturation": "0"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#0060ff"
            },
            {
                "lightness": -100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#0066ff"
            },
            {
                "saturation": "0"
            },
            {
                "lightness": 100
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#000000"
            },
            {
                "saturation": -100
            },
            {
                "lightness": -100
            },
            {
                "visibility": "off"
            }
        ]
    }
]
    };
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(48.464717, 35.046183),
        map: map,
        title: ''
    });
}
