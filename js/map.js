	var map = L.map( 'map', {
    center: [47.033, 10.5],
    minZoom: 2,
    zoom: 7
});
L.tileLayer( 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}').addTo( map );

