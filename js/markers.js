var markerGroup = L.layerGroup().addTo(map);
function getColor(pop) {
  switch (pop) {
    case '1':
      return  '#0099ff';
    case '0':
      return '#fff';
    default:
      return 'white';
  }
}

var greenIcon = L.icon({
    iconUrl: 'images/marker.png',

    iconSize:     [75, 75], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


var markers = [];
var houses = new L.GeoJSON(houses, {
    pointToLayer: function (feature, latlng) {
      var marker = L.marker(latlng, {
          id: feature.properties.id,
          radius: 8,
          fillColor: getColor(feature.properties.pop),
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8,
          riseOnHover: true,
          icon: greenIcon,
      }).on("click", circleClick);

      markers.push(marker);

      return marker;
    }
});


var i;
var sneakyDiv = "";
for (i = 0; i < markers.length; i++) {
  sneakyDiv += '<div class="right" onmouseover="myFunction('+i+')"> ';
    sneakyDiv += '<div class=info>';
            sneakyDiv += '<img id=imagecontainer  src=images/' + markers[i].feature.properties.image + '>';
        sneakyDiv += '<div class=td>';
            sneakyDiv += '<h4 id=title>' + markers[i].feature.properties.title + '</h4>';
            sneakyDiv += '<h4 id=desc>' + markers[i].feature.properties.description + '</h4>';
        sneakyDiv += '</div>';
    sneakyDiv += '</div>';
    sneakyDiv += '<div class=minsaway>';
        sneakyDiv += '<div>';
            sneakyDiv += '<img class=obj src=images/kindergarden.png>';
            sneakyDiv += '<p id=type> Kindergarden </p>';
            sneakyDiv += '<p id=kaway>' + markers[i].feature.properties.kinder + ' </p>';
            sneakyDiv += '<p id=ext> mins away</p>';
        sneakyDiv += '</div>';
        sneakyDiv += '<div class=line></div>';
        sneakyDiv += '<div>';
            sneakyDiv += '<img class=obj src=images/hospital.png>';
            sneakyDiv += '<p id=type> Hospital </p>';
            sneakyDiv += '<p id=haway>' + markers[i].feature.properties.hospital + ' </p>';
            sneakyDiv += '<p id=ext> mins away</p>';
        sneakyDiv += '</div>';
        sneakyDiv += '<div class=line></div>';
        sneakyDiv += '<div>';
            sneakyDiv += '<img class=obj src=images/school.png>';
            sneakyDiv += '<p id=type> School </p>';
            sneakyDiv += '<p id=haway>' + markers[i].feature.properties.school + '</p>';
            sneakyDiv += '<p id=ext> mins away</p>';
        sneakyDiv += '</div>';
        sneakyDiv += '<div class="space"></div>';
    sneakyDiv += '</div>';
    sneakyDiv += '<div class="hline"></div>';
  sneakyDiv += '</div>';
    
  // vendosi divat tjere
  // p.sh. sneakyDiv += '</div id=title>'markers[i].feature.properties.title '</div>';


  // respektivisht
  // title div => markers[i].feature.properties.title
  // school div => markers[i].feature.properties.school
  // kinder div => markers[i].feature.properties.kinder



}
var spacebottom = '<div class="space1"></div>';
  $('#rmySidebar').append(sneakyDiv, spacebottom);


function myFunction(i){
  var itt = i + 1;
  markerGroup.clearLayers();
  for (i = 0; i < markers.length; i++) {
    if(markers[i].feature.properties.id === itt){
      //hehe
       map.flyTo(
        [markers[i].feature.geometry.coordinates[1], markers[i].feature.geometry.coordinates[0]],
        16, {
            animate: true,
            duration: 2.5
        }
      );
    }

  }
  markerGroup.addLayer(houses);
}

markerGroup.addLayer(houses);

var image = "";
var image1 = "";
var image2 = "";
var image3 = "";
var image4 = "";

function circleClick(e) {
    tgl();
    rcloseNav();
    image = "images/" + e.target.feature.properties.image;
    image1 = "images/" + e.target.feature.properties.image1; 
    image2 = "images/" + e.target.feature.properties.image2;
    image3 = "images/" + e.target.feature.properties.image3;
    image4 = "images/" + e.target.feature.properties.image4; 
    document.getElementById("cimage").src = image;
    document.getElementById("cimage1").src = image1;
    document.getElementById("cimage2").src = image2;
    document.getElementById("cimage3").src = image3;
    document.getElementById("cimage4").src = image4;
}
    // perdore qit funksion me pas kontent per ndertesa ne bottom panel
    // Ish kan mire me e inkorporu ni slider
    // ;)


    // document.getElementById("imagecontainer").src = "images" + "/" + e.target.feature.properties.image;
    // document.getElementById("title").innerHTML = e.target.feature.properties.title;
    // document.getElementById("desc").innerHTML = e.target.feature.properties.description;
    // document.getElementById("kaway").innerHTML = e.target.feature.properties.kinder;
    // document.getElementById("saway").innerHTML = e.target.feature.properties.school;
    // document.getElementById("haway").innerHTML = e.target.feature.properties.hospital;
    // document.getElementById("status").style.backgroundColor = e.target.feature.properties.mc;
    // var pop = e.target.feature.properties.pop;


// MENYRA TJETER QE MUJNA ME I AKSESU
// pointLayerGroup.on("click", markerOnClick);
//
// function markerOnClick(e) {
//   for (i = 0; i < markers.length; i++) {
//     if(markers[i].feature.geometry.coordinates[0] === e.latlng.lng){
//       //nese klikon markerin ne map ktu mujm me ba diqka
//     }
//   }
// }
