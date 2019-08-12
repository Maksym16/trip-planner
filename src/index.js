const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1IjoiZnJlZXNjbzE2IiwiYSI6ImNqejhtN2p0aDE1b2EzbG1mejB3b3I5ZjEifQ.b_47T87rFrx43JUEWepWyw';

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const newYorkMarker = new mapboxgl.Marker({ container: "marker"}).setLngLat([-74.009151, 40.705086]).addTo(map);
// const ChicagoMarker = new mapboxgl.Marker({ container: "marker" }).setLngLat([-87.641, 41.895]).addTo(map);



const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// body.appendChild(markerDomEl);
new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);


const newYork = new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);
const chicago = new mapboxgl.Marker(markerDomEl).setLngLat([-87.641, 41.895]).addTo(map);
body.appendChild(newYork);