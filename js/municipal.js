
var myStyle = {
    "color": "black",
    "weight": 2,
    "opacity": 0.65
};

$('#select_municipal').change(function(){
  var overlay_municipal = L.geoJSON(kosovo_2, {
      style: (feature) => {
          // example if 'Ferizaj' === 'Ferizaj'
          if (feature.properties.nam === $(this).val()){
            return {color: "#ff0000"};
            // if not !==
          } else if ($(this).val() === 'blla') {
            console.log("please select");
            return myStyle;
            overlayGroup.addLayer(kosovo2);
            } 
          else {
            return myStyle
          }
      }
  });
  overlayGroup.clearLayers();
  overlayGroup.addLayer(overlay_municipal);
});
