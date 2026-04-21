var wms_layers = [];


        var lyr_ESRIPhysical_0 = new ol.layer.Tile({
            'title': 'ESRI Physical',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_sourcedatafig2_1 = new ol.format.GeoJSON();
var features_sourcedatafig2_1 = format_sourcedatafig2_1.readFeatures(json_sourcedatafig2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sourcedatafig2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sourcedatafig2_1.addFeatures(features_sourcedatafig2_1);
var lyr_sourcedatafig2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sourcedatafig2_1, 
                style: style_sourcedatafig2_1,
                popuplayertitle: 'sourcedatafig2',
                interactive: true,
    title: 'sourcedatafig2<br />\
    <img src="styles/legend/sourcedatafig2_1_0.png" /> -2.581 - -0.015<br />\
    <img src="styles/legend/sourcedatafig2_1_1.png" /> -0.015 - 0.016<br />\
    <img src="styles/legend/sourcedatafig2_1_2.png" /> 0.016 - 0.078<br />\
    <img src="styles/legend/sourcedatafig2_1_3.png" /> 0.078 - 0.303<br />\
    <img src="styles/legend/sourcedatafig2_1_4.png" /> 0.303 - 2.951<br />' });

lyr_ESRIPhysical_0.setVisible(true);lyr_sourcedatafig2_1.setVisible(true);
var layersList = [lyr_ESRIPhysical_0,lyr_sourcedatafig2_1];
lyr_sourcedatafig2_1.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'm_per_year': 'Meters change per Year', 'aquifer': 'Aquifer Names', 'broader': 'broader', });
lyr_sourcedatafig2_1.set('fieldImages', {'ogc_fid': 'Hidden', 'm_per_year': 'TextEdit', 'aquifer': 'TextEdit', 'broader': 'Hidden', });
lyr_sourcedatafig2_1.set('fieldLabels', {'m_per_year': 'inline label - visible with data', 'aquifer': 'inline label - visible with data', });
lyr_sourcedatafig2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});