// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the line.
let line = [
  [37.615223, -122.389977],
  [30.1974292, -97.6663058],
  [43.6777, -79.6248],
  [	40.641766, -73.780968]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  weight: 4,
  opacity: 0.5,
  dashArray: "10"

}).addTo(map);

// //  Add a marker to the map for Los Angeles, California.
// let marker = L.circle([34.0522, -118.2437],{
//     radius: 300,
//     color: "black",
//     fillColor: 'yellow'
// }).addTo(map);

// Get data from cities.js
let cityData = cities;

  // // Loop through the cities array and create one marker for each city.
  // cities.forEach(function(city){
  //     console.log(city)
  // });

  // Loop through the cities array and create one marker for each city.
  // Calling the data from the cities.js file.
  // cityData.forEach(function(city){
  //   console.log(city)
  //   L.circleMarker(city.location, {
  //     radius: city.population/100000,
  //     color: "orange",
  //     fillColor: "orange",
  //     lineweight: 4,

  //   })
  //   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr>Population "+ (city.population-200000).toLocaleString() + "</h3>")
  //   .addTo(map);
  // });



// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);                                          