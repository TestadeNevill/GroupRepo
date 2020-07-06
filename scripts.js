/*
var lat: =
var long: =
*/
$(document).ready(function() {

    
    var OmarButton = document.getElementById("Omar");
    console.log(OmarButton);
    OmarButton.addEventListener("click", function() {
        console.log("Omar Button Clicked");
        alert("Hi you clicked Omar's Button!");
        map.setCenter(new google.maps.LatLng(-34.397, 150.644));
        map.setZoom(15);
    });  
   
<<<<<<< Updated upstream
    var WayilButton = document.getElementById("Wayil");
    console.log(WayilButton);
    WayilButton.addEventListener("click", function() {
        console.log("Wayil Button Clicked");
        alert("Hi you clicked Wayil's Button!");
        map.setCenter(new google.maps.LatLng(-34.397, 150.644));
        map.setZoom(15);
    });
    
    var DatestaButton = document.getElementById("Datesta");
    console.log(DatestaButton);
    DatestaButton.addEventListener("click", function() {
        console.log("Datesta Button Clicked");
        alert("Hi you clicked Datesta's Button!");
        map.setCenter(new google.maps.LatLng(-34.397, 150.644));
=======
    //  ================================ Wayils Buttons ======================================
    //Wayils Restaurants Button
    var WayilRestaurantButton = document.getElementById("WayilRestaurantButton");
    console.log(WayilRestaurantButton);
    WayilRestaurantButton.addEventListener("click", function() {
        console.log("Wayil's Restaraunt Button Clicked");
        alert("Hi you clicked Wayil's Restaurants Button!");
        map.setCenter(new google.maps.LatLng(41.308182,-72.931252));
        map.setZoom(15);
    });

    //Wayils Parks Button
    var WayilParkButton = document.getElementById("WayilParkButton");
    console.log(WayilParkButton);
    WayilParkButton.addEventListener("click", function() {
        console.log("Wayil's Parks Button Clicked");
        alert("Hi you clicked Wayil's Parks Button!");
        map.setCenter(new google.maps.LatLng(41.420620,-72.899360));
        map.setZoom(15);
    });
    
    //Wayils Stores Button
    var WayilStoreButton = document.getElementById("WayilStoreButton");
    console.log(WayilStoreButton);
    WayilStoreButton.addEventListener("click", function() {
        console.log("Wayil Store Button Clicked");
        alert("Hi you clicked Wayil's Stores Button!");
        map.setCenter(new google.maps.LatLng(41.311460, -72.930750));
        //Set to The Sono Collection
        map.setZoom(17);
    });
     
    //  =============================== Datesta's Buttons ====================================
    //Datesta's Restarants Button
    var DatestaRestaurantButton = document.getElementById("DatestaRestaurantButton");
    console.log(DatestaRestaurantButton);
    DatestaRestaurantButton.addEventListener("click", function() {
        console.log("Datesta's Restaurants Button Clicked");
        alert("Hi you clicked Datesta's Restaraunts Button!");
        map.setCenter(new google.maps.LatLng(41.2010458, -73.1859727));
        //Set to Tomlinson's Restaurant
        map.setZoom(16);
    });

    //Datesta's Parks Button
    var DatestaParkButton = document.getElementById("DatestaParkButton");
    console.log(DatestaParkButton);
    DatestaParkButton.addEventListener("click", function() {
        console.log("Datesta's Parks Button Clicked");
        alert("Hi you clicked Datesta's Parks Button!");       
        map.setCenter(new google.maps.LatLng(41.2112394, -73.1861488));
        //Beardsly Park
        map.setZoom(17);
    });

    //Datesta's Stores Button
    var DatestaStoreButton = document.getElementById("DatestaStoreButton");
    console.log(DatestaStoreButton);
    DatestaStoreButton.addEventListener("click", function() {
        console.log("Datesta's Stores Button Clicked");
        alert("Hi you clicked Datesta's Stores Button!");
        map.setCenter(new google.maps.LatLng(41.1953766, -73.1444237));
        //Walgreens
>>>>>>> Stashed changes
        map.setZoom(15);
    });
});