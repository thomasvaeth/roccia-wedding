//----------------------------------------------
// Map
//----------------------------------------------
var Map = (function() {

  return {

    /**
     * Init
     */
    init: function() {
      if ($('.js-map').length) this.renderMap();
    },

    /**
     * RenderMap
     */
    renderMap: function() {

      var styles = [
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e9e9e9"
            },
            {
              "lightness": 17
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            },
            {
              "lightness": 20
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#ffffff"
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
              "color": "#ffffff"
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
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
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
        }
      ];

      var args = {
        zoom: 14,
        center: new google.maps.LatLng(0, 0),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: styles,
        scrollwheel: false,
        disableDefaultUI: false,
        mapTypeControl: false,
      };

      /**
       *  Parse Address markup to create map location
       */
      $('.js-map').each(function(index, Element) {
        var address = $(Element).children('.js-address').text();

        var icon = {
          url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT8AAAHwAQMAAADq1vqJAAAABlBMVEVHcEzCgoWZZksZAAAAAXRSTlMAQObYZgAABS1JREFUeAHs2EFupDAQheEgFix9BI7io8HROApH8NILRI00mpFc+OfhcXek1igsOx9N6lUCVH3Vh5md8DG5Jhl/Q8tPbrI/x/YAl7/waPlC+Er4wqavHK04VgHnEiYBS2envHLbtWcPk66Z6tZXNruD4Qr3GxivMOtwOCD+FXVAoYY7wljD/JyiSHIwOAhOBDddi64mEsw6bhn5gNC4Fq5G1iKqiQyT7ovqDSAse7yBxkVz2aJoUfZ8B5MoWpYNBMsebqFBOnysIh2RT7iHu0hH5BPvYaYYOUhORwc5Cmicjg5Sww1i5CA5Rh1kVDBzjDpI5ezEvHWQo4YrxaiDDBruzZDy1olHDTPlrRO3N8ETGsOHbgy0Znob3GRjoDXzE0z/CuMTzKqD0Jp2KIjr4fA+aNzqVAe2ltBdB+EE/QrU7EC/+DPM1K0dWr3Rn14C6P89HIzULd/XXMOEd49cn7vhHe6oob+5elh/Up1/VjD7J4WDQ51s3YcKbjePPTGQ1Z+Pd8/mK5x80Vz2doG5hFHAVML5AgOmAz8I/kSXj4Mzp+PjSBdIb4AO8rviBUYfIweZHXQx1j9ZIMYqyMPD3cPQCicPq7wJnh6uHo638DpdOTg0Qbue5g+APA0tJRzb4FrCfIURIE5scxecoIPQ7K0LbnKfFNrgXsJVTJV9EIbzHji3wVRAWAy8CI8aLj0wtsFcwFzD+Gkw1XAu4NIGj2+Few3DZ0Brg+eb4IRw+4E/8IPg/gIM/z+k296nwfwCjD1w0ZBuzfwY/n4oXj76ofXDoYSxDeYC4mthP+RX1y44q9frDphKyCNAP9RjSnJTYi/0s2XQwxlC64WDg5MaSWHwwSG3D44mBnGAPNrDXIjLAoC8fnBwMLXQ4LGZVyQIVwG/rGWNczoIiyGAuGpycGlZXh0OwjoMIC7YHIycj08nOwhLQIB6rZh5a8o71lmsPh0MJpapsLKD9ayD8AnUAjBjLbY56HpjFRxNrLlpmer/0uYaDiZW8bDw9deerhBOPnxbqqW0yywYweUq82xwFYBmDOMzzL9auWPbRmIgDKMcMGDIEljKlrYqTaVcCQo3EPYMGAoN6P0AN36JrS/jzGRwZRCepeZG+C+D4zt8ZrB/hw+H/s7l0N/iHO5/L8SnSof7n1P9JdfhcCg5QmcOHwz9Md6hzwE49FkFhz4m4XBZjg73T5H4AItCn51hWJugTgwxvB36VJNDH6hy6LNcDn2MzKFPsDnsUFkGCytz2KQygNYZw7cOSjK8HPowJ0OfI3XoI6wOfXrWoQ/uOvSZYYc+ruzwsMoCuBD6kPZkSDk69NF0h91yDGBJjg59xN+hbxc4PKyyAC6qzKFvaTgcCH2TpDOUHB36WoxD38hxeFKODn29yOGCHB36rpRDX9Ny2K2yAFYEac2PoeTo0DftHPqSn8NFOTr0jUWHg3J06OuXDgsrc8i7pA7PDMKu7cHQcgzgshwd8jqww2E5BrBbjgEszNFhw8oc8uq3w8MqC+ByiAvvk6HlGMBhOTrkewAOC3N0yMcNHJ6WYwAPq8wh335wOK2yAI4MwhGNztByDGBhjg4b5uiQT4w4PCzHAC7LMYDTKnPIN10cdqssgMUQc2wth7dDvrbj0IK8dsFlOQZwWo4O+byRw26VBbCwMocNKwvgGcI3XqhyeO2Dy3IM4LQcAzgsxwB2yzGAhTk65PtmDs9PZZbPFUDL5wVwWhOfH/sJsMMvmF2ea6f9G3//7Fdr9tc8G33/72ZftT++H3ScsQ6rZjLNAAAAAElFTkSuQmCC',
          scaledSize: new google.maps.Size(25, 39)
        };

        // New Google Geocoder
        var geocoder = new google.maps.Geocoder();
      
        // Geocode address
        geocoder.geocode({ 'address': address }, function(results, status) {
      
          // Status check
          if (status === google.maps.GeocoderStatus.OK) {

            args.center = results[0].geometry.location;
          
            var map = new google.maps.Map(Element, args);
          
            // Center on resize
            Map.centerMapResize(map);
          
            // Marker customization 
            var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location,
              animation: google.maps.Animation.DROP,
              icon: icon
            });
          } 
        });
      });  
    },

    /**
     * Center Map on Resize
     */
    centerMapResize: function(map) {
      google.maps.event.addDomListener(window, 'resize', function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
      });
    },
  };
})();
