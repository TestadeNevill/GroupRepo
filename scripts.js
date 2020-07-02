/*
var lat: =
var long: =
*/
$(document).ready(function() {

    //  ================================= Omars Buttons ======================================
    //Omars Restaurant Button
    var OmarRestaurantButton = document.getElementById("OmarRestaurantButton");
    console.log(OmarRestaurantButton);
    OmarRestaurantButton.addEventListener("click", function() {
        console.log("Omar's Restaurant Button Clicked!");
        alert("Hi you clicked Omar's Restaurant Button!");
        map.setCenter(new google.maps.LatLng(41.0382745, -73.5464977));
        map.setZoom(15);
    });  

    //Omars Park Button
    var OmarParkButton = document.getElementById("OmarParkButton");
    console.log(OmarParkButton);
    OmarParkButton.addEventListener("click", function() {
        console.log("Omar's Park Button Clicked Button Clicked");
        alert("Hi you clicked Omar's Park Button!");
        map.setCenter(new google.maps.LatLng(41.0382745, -73.5464977));
        map.setZoom(15);
    });  

    //Omars Store Button
    var OmarStoreButton = document.getElementById("OmarStoreButton");
    console.log(OmarStoreButton);
    OmarStoreButton.addEventListener("click", function() {
        console.log("Omar's Store Button Clicked!");
        alert("Hi you clicked Omar's Store Button!");
        map.setCenter(new google.maps.LatLng(41.0382745, -73.5464977));
        map.setZoom(15);
    });  
   
    //  ================================ Wayils Buttons ======================================
    //Wayils Restaurants Button
    var WayilRestaurantButton = document.getElementById("WayilRestaurantButton");
    console.log(WayilRestaurantButton);
    WayilRestaurantButton.addEventListener("click", function() {
        console.log("Wayil's Restaraunt Button Clicked");
        alert("Hi you clicked Wayil's Restaurants Button!");
        map.setCenter(new google.maps.LatLng(-34.397, 150.644));
        map.setZoom(15);
    });

    //Wayils Parks Button
    var WayilParkButton = document.getElementById("WayilParkButton");
    console.log(WayilParkButton);
    WayilParkButton.addEventListener("click", function() {
        console.log("Wayil's Parks Button Clicked");
        alert("Hi you clicked Wayil's Parks Button!");
        map.setCenter(new google.maps.LatLng(-34.397, 150.644));
        map.setZoom(15);
    });
    
    //Wayils Stores Button
    var WayilStoreButton = document.getElementById("WayilStoreButton");
    console.log(WayilStoreButton);
    WayilStoreButton.addEventListener("click", function() {
        console.log("Wayil Store Button Clicked");
        alert("Hi you clicked Wayil's Stores Button!");
        map.setCenter(new google.maps.LatLng(-34.397, 150.644));
        map.setZoom(15);
    });
     
    //  =============================== Datesta's Buttons ====================================
    //Datesta's Restarants Button
    var DatestaRestaurantButton = document.getElementById("DatestaRestarauntButton");
    console.log(DatestaRestaruantButton);
    DatestaRestaurantButton.addEventListener("click", function() {
        console.log("Datesta's Restaruants Button Clicked");
        alert("Hi you clicked Datesta's Restaraunts Button!");
        map.setCenter(new google.maps.LatLng(-41.1792, 73.1894));
        map.setZoom(15);
    });

    //Datesta's Parks Button
    var DatestaParkButton = document.getElementById("DatestaParkButton");
    console.log(DatestaParkButton);
    DatestaParkButton.addEventListener("click", function() {
        console.log("Datesta's Parks Button Clicked");
        alert("Hi you clicked Datesta's Parks Button!");
        map.setCenter(new google.maps.LatLng(-41.1792, 73.1894));
        map.setZoom(15);
    });

    //Datesta's Stores Button
    var DatestaStoreButton = document.getElementById("DatestaStoreButton");
    console.log(DatestaStoreButton);
    DatestaStoreButton.addEventListener("click", function() {
        console.log("Datesta's Stores Button Clicked");
        alert("Hi you clicked Datesta's Stores Button!");
        map.setCenter(new google.maps.LatLng(-41.1792, 73.1894));
        map.setZoom(15);
    });
});