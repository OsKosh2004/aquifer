var wms_layers = [];


        var lyr_ESRIShadedRelief_0 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
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
                title: '<img src="styles/legend/sourcedatafig2_1.png" /> sourcedatafig2'
            });

lyr_ESRIShadedRelief_0.setVisible(true);lyr_sourcedatafig2_1.setVisible(true);
var layersList = [lyr_ESRIShadedRelief_0,lyr_sourcedatafig2_1];
lyr_sourcedatafig2_1.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'm_per_year': 'Meters Change per Year', 'aquifer': 'Aquifer Name', 'broader': 'broader', });
lyr_sourcedatafig2_1.set('fieldImages', {'ogc_fid': 'Hidden', 'm_per_year': 'TextEdit', 'aquifer': 'TextEdit', 'broader': 'Hidden', });
lyr_sourcedatafig2_1.set('fieldLabels', {'m_per_year': 'inline label - visible with data', 'aquifer': 'inline label - visible with data', });
lyr_sourcedatafig2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});