const mapbox = require("mapbox-gl");

mapbox.accessToken = "pk.eyJ1Ijoic2hpcmFuaWFvcmkiLCJhIjoiY2sxNmt1bzYxMTZ3YTNibnhpa3U1ZTVnbiJ9.eITx5ki4ZOghrvkSAFWn2Q";

const map = new mapbox.Map({
  container: "map",
  center: [-87.641, 41.895],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10"
});

const myDiv = document.createElement('div');
myDiv.style.height = '10vh';
myDiv.style.width = '10vw';
myDiv.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
myDiv.classList.add('green-marker');
document.getElementById('map').appendChild(myDiv);
new mapbox.Marker(myDiv)
  .setLngLat([-87.641, 41.895])
  .addTo(map);
