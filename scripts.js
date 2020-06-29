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
    });  
   
    var WayilButton = document.getElementById("Wayil");
    console.log(WayilButton);
    WayilButton.addEventListener("click", function() {
        console.log("Wayil Button Clicked");
        alert("Hi you clicked Wayil's Button!");
    });
    
    var DatestaButton = document.getElementById("Datesta");
    console.log(DatestaButton);
    DatestaButton.addEventListener("click", function() {
        console.log("Datesta Button Clicked");
        alert("Hi you clicked Datesta's Button!");
    });
});