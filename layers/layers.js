var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Precip_mediaYmultianual_Global_1 = new ol.format.GeoJSON();
var features_Precip_mediaYmultianual_Global_1 = format_Precip_mediaYmultianual_Global_1.readFeatures(json_Precip_mediaYmultianual_Global_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Precip_mediaYmultianual_Global_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Precip_mediaYmultianual_Global_1.addFeatures(features_Precip_mediaYmultianual_Global_1);
var lyr_Precip_mediaYmultianual_Global_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Precip_mediaYmultianual_Global_1, 
                style: style_Precip_mediaYmultianual_Global_1,
                interactive: true,
                title: '<img src="styles/legend/Precip_mediaYmultianual_Global_1.png" /> Precip_mediaYmultianual_Global'
            });
var format_institucionesprueba1_2 = new ol.format.GeoJSON();
var features_institucionesprueba1_2 = format_institucionesprueba1_2.readFeatures(json_institucionesprueba1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_institucionesprueba1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_institucionesprueba1_2.addFeatures(features_institucionesprueba1_2);
var lyr_institucionesprueba1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_institucionesprueba1_2, 
                style: style_institucionesprueba1_2,
                interactive: true,
                title: '<img src="styles/legend/institucionesprueba1_2.png" /> institucionesprueba1'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Precip_mediaYmultianual_Global_1.setVisible(true);lyr_institucionesprueba1_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Precip_mediaYmultianual_Global_1,lyr_institucionesprueba1_2];
lyr_Precip_mediaYmultianual_Global_1.set('fieldAliases', {'id': 'id', 'Estaciones_precip_mm': 'Estaciones_precip_mm', 'NORTE': 'NORTE', 'ESTE': 'ESTE', 'Z': 'Z', 'ENERO': 'ENERO', 'FEBRERO': 'FEBRERO', 'MARZO': 'MARZO', 'ABRIL': 'ABRIL', 'MAYO': 'MAYO', 'JUNIO': 'JUNIO', 'JULIO': 'JULIO', 'AGOSTO': 'AGOSTO', 'SEPTIEMBRE': 'SEPTIEMBRE', 'OCTUBRE': 'OCTUBRE', 'NOVIEMBRE': 'NOVIEMBRE', 'DICIEMBRE': 'DICIEMBRE', 'PREC TOTALMULTIANUAL': 'PREC TOTALMULTIANUAL', 'Pmedia': 'Pmedia', 'Pmax': 'Pmax', });
lyr_institucionesprueba1_2.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Tipo': 'Tipo', 'Norte': 'Norte', 'Este': 'Este', 'Area': 'Area', 'OFERTAH': 'OFERTAH', 'OFERTAE': 'OFERTAE', });
lyr_Precip_mediaYmultianual_Global_1.set('fieldImages', {'id': 'Range', 'Estaciones_precip_mm': 'TextEdit', 'NORTE': 'TextEdit', 'ESTE': 'TextEdit', 'Z': 'TextEdit', 'ENERO': 'TextEdit', 'FEBRERO': 'TextEdit', 'MARZO': 'TextEdit', 'ABRIL': 'TextEdit', 'MAYO': 'TextEdit', 'JUNIO': 'TextEdit', 'JULIO': 'TextEdit', 'AGOSTO': 'TextEdit', 'SEPTIEMBRE': 'TextEdit', 'OCTUBRE': 'TextEdit', 'NOVIEMBRE': 'TextEdit', 'DICIEMBRE': 'TextEdit', 'PREC TOTALMULTIANUAL': 'TextEdit', 'Pmedia': 'TextEdit', 'Pmax': 'TextEdit', });
lyr_institucionesprueba1_2.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Tipo': 'TextEdit', 'Norte': 'TextEdit', 'Este': 'TextEdit', 'Area': 'TextEdit', 'OFERTAH': 'TextEdit', 'OFERTAE': 'TextEdit', });
lyr_Precip_mediaYmultianual_Global_1.set('fieldLabels', {'id': 'header label', 'Estaciones_precip_mm': 'header label', 'NORTE': 'header label', 'ESTE': 'header label', 'Z': 'header label', 'ENERO': 'header label', 'FEBRERO': 'header label', 'MARZO': 'header label', 'ABRIL': 'header label', 'MAYO': 'header label', 'JUNIO': 'header label', 'JULIO': 'header label', 'AGOSTO': 'header label', 'SEPTIEMBRE': 'header label', 'OCTUBRE': 'header label', 'NOVIEMBRE': 'header label', 'DICIEMBRE': 'header label', 'PREC TOTALMULTIANUAL': 'header label', 'Pmedia': 'header label', 'Pmax': 'header label', });
lyr_institucionesprueba1_2.set('fieldLabels', {'id': 'header label', 'Nombre': 'header label', 'Tipo': 'header label', 'Norte': 'header label', 'Este': 'header label', 'Area': 'header label', 'OFERTAH': 'header label', 'OFERTAE': 'header label', });
lyr_institucionesprueba1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});