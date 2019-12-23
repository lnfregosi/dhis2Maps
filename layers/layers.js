var wms_layers = [];

var format_adm3_0 = new ol.format.GeoJSON();
var features_adm3_0 = format_adm3_0.readFeatures(json_adm3_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adm3_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adm3_0.addFeatures(features_adm3_0);
var lyr_adm3_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_adm3_0, 
                style: style_adm3_0,
                interactive: true,
                title: '<img src="styles/legend/adm3_0.png" /> adm3'
            });

lyr_adm3_0.setVisible(true);
var layersList = [lyr_adm3_0];
lyr_adm3_0.set('fieldAliases', {'adm0_nm': 'adm0_nm', 'adm1_nm': 'adm1_nm', 'adm2_nm': 'adm2_nm', 'adm3_nm': 'adm3_nm', 'dat_src': 'dat_src', 'date_dt': 'date_dt', 'id': 'id', 'area': 'area', 'adm1_pc': 'adm1_pc', 'adm2_pc': 'adm2_pc', 'adm3_pc': 'adm3_pc', 'a3__201': 'a3__201', });
lyr_adm3_0.set('fieldImages', {'adm0_nm': 'TextEdit', 'adm1_nm': 'TextEdit', 'adm2_nm': 'TextEdit', 'adm3_nm': 'TextEdit', 'dat_src': 'TextEdit', 'date_dt': 'TextEdit', 'id': 'Range', 'area': 'TextEdit', 'adm1_pc': 'TextEdit', 'adm2_pc': 'TextEdit', 'adm3_pc': 'TextEdit', 'a3__201': 'Range', });
lyr_adm3_0.set('fieldLabels', {'adm0_nm': 'header label', 'adm1_nm': 'header label', 'adm2_nm': 'header label', 'adm3_nm': 'header label', 'dat_src': 'header label', 'date_dt': 'header label', 'id': 'header label', 'area': 'header label', 'adm1_pc': 'header label', 'adm2_pc': 'header label', 'adm3_pc': 'header label', 'a3__201': 'header label', });
lyr_adm3_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});