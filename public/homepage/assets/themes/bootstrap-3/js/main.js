$(document).ready(function() {
  $("#logo-carousel").owlCarousel({
    items: 2,
    margin: 30,
    dots: false,
    pagination: false,
    loop: true,
    autoplay: true,
    responsive: {
        1200: {
            items: 5,
            autoplay: false,
            mouseDrag: false,
            touchDrag: false,
            margin: 70
        },

        768: {
            items: 4,
            margin: 70,
            autoplay: true
        }
    }
  });
  $("#screenshot-carousel").owlCarousel({
    items: 2,
    margin: 20,
    dots: false,
    loop: true,
    nav: false,
    autoplay: true,
    navText: [ '<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>' ],
    responsive: {
        1200: {
            items: 5,
            mouseDrag: false,
            touchDrag: false,
            nav: true,
        },

        768: {
            items: 3,
            nav: true,
        }
    }
  });

  $('#site-nav').affix({
        offset: {
            top: $('#site-nav').offset().top
        }
    });
});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

function initMap() {
    var mapDiv = document.getElementById('map');
    var isDraggable = $(document).width() > 1024 ? true : false;
    var mapOptions = {
            zoom: 17,
            scrollwheel: false,
            center: {lat: 19.0231010, lng: 72.852599 },
            draggable: isDraggable,
            mapTypeControlOptions: {
                mapTypeIds: []
            },
            styles: [
                {
                    "featureType": "all",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "lightness": "-27"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "saturation": 36
                        },
                        {
                            "color": "#333333"
                        },
                        {
                            "lightness": 40
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e9e9e9"
                        },
                        {
                            "lightness": "10"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dedede"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#f9f9f9"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#f8f8f8"
                        },
                        {
                            "lightness": 29
                        },
                        {
                            "weight": 0.2
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 18
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        },
                        {
                            "lightness": 19
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#d7d7d7"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                }
            ],
        };
    var map = new google.maps.Map(mapDiv,mapOptions);
    var isMobile = $(document).width() > 767 ? false : true;
    var mobileOffset =  isMobile ? .003 : 0;
    var marker = new google.maps.Marker({
        position: {
            lat: 19.0231010 + mobileOffset,
            lng: 72.852599
        },
        map: map,
        icon: '/images/map_pin.png',
        url: "https://www.google.com/maps/place/10100+W+87th+St,+Overland+Park,+KS+66212/@,19.0231010,72.852599,17z/data=!3m1!4b1!4m13!1m7!3m6!1s0x87c0eb612d6e7ec1:0x1d6a539ffbf3cc82!2s10100+W+87th+St,+Overland+Park,+KS+66212!3b1!8m2!3d38.9714211!4d-94.7038876!3m4!1s0x87c0eb612e0814db:0xbcfa3eceddab4321!8m2!3d38.9714189!4d-94.7038899"
    });
    marker.addListener('click', function() {
        window.open(this.url, '_blank');
    });
}