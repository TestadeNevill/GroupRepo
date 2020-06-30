/*
var lat: =
var long: =
*/
$(document).ready(function() {

    //Omars Button (Add dropdown menu)
    var OmarButton = document.getElementById("Omar");
    console.log(OmarButton);
    OmarButton.addEventListener("click", function() {
        console.log("Omar Button Clicked");
        alert("Hi you clicked Omar's Button!");
        map.setCenter(new google.maps.LatLng(41.0382745, -73.5464977));
        map.setZoom(15);
    });  
   
    //Wayils Button (Add dropdown menu)
    var WayilButton = document.getElementById("Wayil");
    console.log(WayilButton);
    WayilButton.addEventListener("click", function() {
        console.log("Wayil Button Clicked");
        alert("Hi you clicked Wayil's Button!");
        map.setCenter(new google.maps.LatLng(-34.397, 150.644));
        map.setZoom(15);
    });
    
    //Datesta's Button (Add dropdown menu)
    var DatestaButton = document.getElementById("Datesta");
    console.log(DatestaButton);
    DatestaButton.addEventListener("click", function() {
        console.log("Datesta Button Clicked");
        alert("Hi you clicked Datesta's Button!");
        map.setCenter(new google.maps.LatLng(-34.397, 150.644));
        map.setZoom(15);
    });
});