var overlayGroup = L.layerGroup().addTo(map);


var myStyle = {
    "color": "black",
    "weight": 5,
    "opacity": 0.65
};

var kosovo0 = L.geoJSON(kosovo_0, {
    style: myStyle
});

var kosovo1 = L.geoJSON(kosovo_1, {
    style: myStyle
});

var kosovo2 = L.geoJSON(kosovo_2, {
    style: myStyle
});

$('#select_type_freq').change(function(){
  if ($(this).val() === 'blla'){
    overlayGroup.clearLayers();
  }
  if ($(this).val() === 'Layer_2'){
    overlayGroup.clearLayers();
    overlayGroup.addLayer(kosovo1);
  }
  if ($(this).val() === 'Layer_3'){
    overlayGroup.clearLayers();
    overlayGroup.addLayer(kosovo2);
  }
});

$('#triggerbottom').change(function(){
   if ($(this).val() === 'selc') {
       console.log("please select");
   }
    if ($(this).val() === 'Shtime') {
       tgl();
   }
    if ($(this).val() === 'Skenderaj') {
       tgl();
   }
});


document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
    overlayGroup.clearLayers();
    overlayGroup.addLayer(kosovo0);
      console.log('Checked');
    } else {
       overlayGroup.clearLayers();
      console.log('Not checked');
    }
  });
});
