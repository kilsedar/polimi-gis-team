var osmHot = L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {attribution:'&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'});
var map = L.map('map-selector', {center: [45.477623, 9.227239], zoom: 15,  minZoom: 12});
map.addLayer(osmHot);

var icon = L.icon({
  iconUrl: 'material/images/map/leaflet_marker_cropped_scaled.png',
  iconSize:     [30, 51], // size of the icon
  iconAnchor:   [14, 56], // point of the icon which will correspond to marker's location
  popupAnchor:  [0, -38] // point from which the popup should open relative to the iconAnchor
});
L.marker([45.477623, 9.227239], {icon: icon}).addTo(map).bindPopup('Politecnico di Milano - GEOlab').openPopup();

$("body").on("shown.bs.tab", "#map", function() {
    map.invalidateSize(false);
    map.setView([45.477623, 9.227239], 15);
    L.marker([45.477623, 9.227239], {icon: icon}).addTo(map).bindPopup('Politecnico di Milano - GEOlab').openPopup();
});
