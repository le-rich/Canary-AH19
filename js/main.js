      function initMap() {
        infoWindow = new google.maps.InfoWindow;
        var pos = {lat: 47.6064, lng: -122.3313};

        var map = new google.maps.Map(document.getElementById('map-container'), {
          zoom: 16,
          center: pos,
          disableDefaultUI: true,
          styles: [
          {
            "elementType": "geometry",
            "stylers": [
            {
              "color": "#ebe3cd"
            }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "color": "#523735"
            }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
            {
              "color": "#f5f1e6"
            }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
            {
              "color": "#c9b2a6"
            }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "geometry.stroke",
            "stylers": [
            {
              "color": "#dcd2be"
            }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "color": "#ae9e90"
            }
            ]
          },
          {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [
            {
              "color": "#dfd2ae"
            }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
            {
              "color": "#dfd2ae"
            }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
            {
              "visibility": "off"
            }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "color": "#93817c"
            }
            ]
          },
          {
            "featureType": "poi.business",
            "stylers": [
            {
              "visibility": "off"
            }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
            {
              "color": "#a5b076"
            }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "color": "#447530"
            }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
            {
              "color": "#f5f1e6"
            }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
            {
              "visibility": "off"
            }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
            {
              "color": "#fdfcf8"
            }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
            {
              "color": "#f8c967"
            }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
            {
              "color": "#e9bc62"
            }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
            {
              "color": "#e98d58"
            }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.stroke",
            "stylers": [
            {
              "color": "#db8555"
            }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "color": "#806b63"
            }
            ]
          },
          {
            "featureType": "transit",
            "stylers": [
            {
              "visibility": "off"
            }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
            {
              "color": "#dfd2ae"
            }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "color": "#8f7d77"
            }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "labels.text.stroke",
            "stylers": [
            {
              "color": "#ebe3cd"
            }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
            {
              "color": "#dfd2ae"
            }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
            {
              "color": "#b9d3c2"
            }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "color": "#92998d"
            }
            ]
          }
          ]
        });

      // // Try HTML5 geolocation.
      // if (navigator.geolocation) {
      //  navigator.geolocation.getCurrentPosition(function(position) {
      //    pos = {
      //      lat: position.coords.latitude,
      //      lng: position.coords.longitude
      //    };

      //    infoWindow.setPosition(pos);
      //    infoWindow.setContent('Location found.');
      //    infoWindow.open(map);
      //    map.setCenter(pos);
      //  }, function() {
      //    handleLocationError(true, infoWindow, map.getCenter());
      //  });
      // }

      var marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: 'EY WaveSpace'
      });


      var ref = firebase.database().ref("Users/");

ref.on("value", function(snap){
  var marker;
  $.each(snap.val(), function(i, n){
    var LatLon = {lat: snap.val()[i].latitude, lng: snap.val()[i].longitude};
     marker = new google.maps.Marker({
        position: LatLon,
        map: map,
        title: 'Supplier'
    });
  });
});


    }



    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
      infoWindow.open(map);
    }

$("#sos-header").toggle();

$("#sos-button-container").click(function(){
  $("#header").fadeToggle();
  $("#sos-header").fadeToggle();
  toggleSOS();
});

function toggleSOS(){
  if ($("#sos-button").text() == "S.O.S. REQUEST"){
    $("#sos-button").text("CANCEL");
    $("#sos-button").css({"background-color": "black", "color":"red"});
  } else{
    $("#sos-button").text("S.O.S. REQUEST");
    $("#sos-button").css({"background-color": "red", "color":"white"});
  }
}

