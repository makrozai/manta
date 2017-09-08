$(document).ready(function(){
  var feed = new Instafeed({
      get: 'user',
      userId: '5311041315',
    accessToken: '5311041315.9fa4503.a6e37da5a7104a32b9da007b13a1a6f8',
      limit:1,
      resolution: 'standard_resolution',
      template: '<a class="animation" href="{{link}}" target="_blank"><img src="{{image}}" /><div class="coments"><p>{{likes}} <i class="material-icons icon-heart"></i></p><p>{{comments}}<i class="material-icons icon-comment"></i></p></div></a>'
  });
  feed.run();

});

$(document).ready(function(){
  $('.parallax').parallax();
  $('.slider').slider({
    height:700
  });
  $(".button-collapse").sideNav();
  $('select').material_select();
  $('.scrollspy').scrollSpy({
    scrollOffset:70
  });
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Hoy',
    clear: 'Limpiar',
    close: 'Ok',
    disable: [1,7],//disable days
    closeOnSelect: false // Close upon selecting a date,
  });
  $('.single-item').slick({
    dots: false,
    infinite: true,
    fade: true,
    arrows:false,
    draggable:false,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $(".regular").slick({
    dots: false,
    arrows:false,
    autoplay:true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('ul.main-spaces li.main-spaces__item').click(function(){
    var tab_id = $(this).index();

    $('ul.main-spaces li.main-spaces__item').removeClass('active');
    $(this).addClass('active');

    $('.single-item').slick('slickGoTo', tab_id, false);
  });

  setTimeout(function() {
    $('body').addClass('loaded');
  }, 1000);

  wow = new WOW(
    {
      animateClass: 'animated',
      offset:       100,
      callback:     function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
      }
    }
  );
  wow.init();
})
var map;
function initMap() {
    var styleArray = [
      {
        featureType: 'all',
        stylers: [
          { hue: "#ec7201" },
          { saturation: -10 }
        ]
      },{
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
          { hue: '#ec7201' },
          { saturation: 10 }
        ]
      },{
        featureType: 'poi.business',
        elementType: 'labels',
        stylers: [
          { visibility: 'off' }
        ]
      }
    ];
    var myLatLng = {lat: -12.095438, lng: -77.023935};
    var myLatLng1 = {lat: -12.096387, lng: -77.026172};
    var myLatLng2 = {lat: -12.093571, lng: -77.025378};
    var myLatLng3 = {lat: -12.094892, lng: -77.022760};
    var myLatLng4 = {lat: -12.096031, lng: -77.021486};

    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
        scrollwheel: false,
        styles: styleArray,
      center: myLatLng
    });
    var infowindow = new google.maps.InfoWindow({
        content: "<p style='color:black;margin:0;'>Serendipia Corowking</p>"
      });
    var image = 'img/lugar.png';
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Uluru (Ayers Rock)',
      icon: 'img/lugar.png'
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
    var marker1 = new google.maps.Marker({
      position: myLatLng1,
      map: map,
      icon: 'img/carrito.png'
    });
    var marker2 = new google.maps.Marker({
      position: myLatLng2,
      map: map,
      icon: 'img/carrito.png'
    });
    var marker3 = new google.maps.Marker({
      position: myLatLng3,
      map: map,
      icon: 'img/carrito.png'
    });
    var marker4 = new google.maps.Marker({
      position: myLatLng4,
      map: map,
      icon: 'img/carrito.png'
    });
          
  }

  function newLocation(newLat,newLng)
  {
    map.setCenter({
      lat : newLat,
      lng : newLng
    });
  }
  $(document).ready(function ()
  {
    $("#portal1").click(function(){
      newLocation(-12.096031,-77.021486);
    });
    $("#portal2").click(function(){
      newLocation(-12.094892,-77.022760);
    });
    $("#portal3").click(function(){
      newLocation(-12.093571,-77.025378);
    });
    $("#portal4").click(function(){
      newLocation(-12.096387,-77.026172);
    });
  });
$(document).ready(function(){

  var flag = false;
  var scroll;

  $(window).scroll(function(){
    scroll = $(window).scrollTop();

    if(scroll > 100){
      if(!flag){
        //aqui es blanco
        $( ".main-nav" ).addClass( "active" );

        flag = true;
      }

    }else{

      if(flag){
        //aqui es transparente
        $( ".main-nav" ).removeClass( "active" );

        flag = false;
      }
    }
  });
});

/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#bfbfbf"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#bfbfbf"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.9,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.3,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 20,
          "size_min": 0.5,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 120,
        "color": "#bfbfbf",
        "opacity": 0.9,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);