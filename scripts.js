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
    OmarButton.addEventListener("click", function() {
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
    //Wayils Button Park Button
    var WayilButton = document.getElementById("WayilPark");
    console.log(WayilButton);
    WayilButton.addEventListener("click", function() {
        console.log("Wayil Button Clicked");
        alert("Hi you clicked Wayil's Button!");
        map.setCenter(new google.maps.LatLng(-34.397, 150.644));
        map.setZoom(15);
    });
    
    //  =============================== Datesta's Bittpms ====================================
    //Datesta's Park Button
    var DatestaButton = document.getElementById("DatestaPark");
    console.log(DatestaButton);
    DatestaButton.addEventListener("click", function() {
        console.log("Datesta Button Clicked");
        alert("Hi you clicked Datesta's Button!");
        map.setCenter(new google.maps.LatLng(-41.1792, 73.1894));
        map.setZoom(15);
    });
});