let map = null;

function initmap(){
    let location = new Object();
    navigator.geolocation.getCurrentPosition(function(pos){
        location.lat = pos.coords.latitude;
        location.long = pos.coords.longitude;
        map = new google.maps.Map(document.getElementById('map'),{
            center: {lat: location.lat, lng: location.long },
            zoom: 15
        });
        getRestaurants(location);
    });
}

function getRestaurants(location) {
    var pyrmont = new google.maps.LatLng(location.lat,location.long);
    var request = {
        location: pyrmont,
        radius: 6000,
        type: ['restaurant']
    };
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
}
 
function callback (results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i=0; i < results.length; i++)
        var place = results[i];
        let restaurantInfo = `<h3>${place.name}</h3>
        <h4> Address: ${place.vicinity} </h4>
        <h2> Rating: ${place.rating} </h2>`;
        
        var marker = new google.maps.Marker({
            position: place.geometry.location,
            map: map,
            title: place.name,
        });
  
    var infowindow = new google.maps.InfoWindow({
      content: restaurantInfo
    });
  
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }
}


//         var marker = new google.maps.Marker({
//             position: place.geometry.location,
//             map: map,
//             title: place.name,
//         });
//         var infoWindow = new google.maps.InfoWindow({
//             content: restaurantInfo
//         });

//         bindInfoWindow(marker, map, infoWindow, restaurantInfo);
//         marker.setMap(map);
//     }
//     }
// function bindInfoWindow(marker, map, infoWindow, html) {
//     console.log(marker, marker.title)
//     setTimeout(()=> {
//         var test = document.querySelector('[title="Lennox Cuisine"]')
//       test.addEventListener ('click', function(){
//         infoWindow.setContent(html);
//         infoWindow.open(map, this);
//     });
//     } , 100)
//   console.log(document)
  
    
// }
// function createPrice(level){
//     if(level != "" && level != null){
//         let out = "";
//         for (var x = 0; x < level; x++){
//             out += "$";
//         }
//         return out;
//     } else {
//         return "?";
//     }var price = createPrice(place.price_level);
// }<p>Price: ${price}<br/> 
initmap();
