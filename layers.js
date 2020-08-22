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
var format_institucionesPrueba1B_1 = new ol.format.GeoJSON();
var features_institucionesPrueba1B_1 = format_institucionesPrueba1B_1.readFeatures(json_institucionesPrueba1B_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_institucionesPrueba1B_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_institucionesPrueba1B_1.addFeatures(features_institucionesPrueba1B_1);
var lyr_institucionesPrueba1B_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_institucionesPrueba1B_1, 
                style: style_institucionesPrueba1B_1,
                interactive: true,
                title: '<img src="institucionesPrueba1B_1.png" /> institucionesPrueba1B'
            });
var format_Precipitacion_Global__Final_2 = new ol.format.GeoJSON();
var features_Precipitacion_Global__Final_2 = format_Precipitacion_Global__Final_2.readFeatures(json_Precipitacion_Global__Final_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Precipitacion_Global__Final_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Precipitacion_Global__Final_2.addFeatures(features_Precipitacion_Global__Final_2);
var lyr_Precipitacion_Global__Final_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Precipitacion_Global__Final_2, 
                style: style_Precipitacion_Global__Final_2,
                interactive: true,
                title: '<img src="Precipitacion_Global__Final_2.png" /> Precipitacion_Global__Final'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_institucionesPrueba1B_1.setVisible(true);lyr_Precipitacion_Global__Final_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_institucionesPrueba1B_1,lyr_Precipitacion_Global__Final_2];
lyr_institucionesPrueba1B_1.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Tipo': 'Tipo', 'Norte': 'Norte', 'Este': 'Este', 'CodigoSede': 'CodigoSede', 'OFERTA_ENE': 'OFERTA_ENE', 'Estudiante': 'Estudiante', 'AREA': 'AREA', 'DENSIDAD': 'DENSIDAD', 'OFERTAHIDR': 'OFERTAHIDR', 'CONSUMOH20': 'CONSUMOH20', 'Sector': 'Sector', 'CONS KWh': 'CONS KWh', 'BALANENERG': 'BALANENERG', 'BALANHIDRI': 'BALANHIDRI', });
lyr_Precipitacion_Global__Final_2.set('fieldAliases', {'Id': 'Id', 'estacion': 'estacion', 'ENERO': 'ENERO', 'FEBRERO': 'FEBRERO', 'MARZO': 'MARZO', 'ABRIL': 'ABRIL', 'MAYO': 'MAYO', 'JUNIO': 'JUNIO', 'JULIO': 'JULIO', 'AGOSTO': 'AGOSTO', 'SEPTIEMBRE': 'SEPTIEMBRE', 'OCTUBRE': 'OCTUBRE', 'NOVIEMBRE': 'NOVIEMBRE', 'DICIEMBRE': 'DICIEMBRE', 'PREC TOTAL': 'PREC TOTAL', 'precini?o': 'precini?o', 'precipni?a': 'precipni?a', 'Pmedia': 'Pmedia', 'Pmax': 'Pmax', 'NORTE': 'NORTE', 'ESTE': 'ESTE', 'ELEVACION': 'ELEVACION', });
lyr_institucionesPrueba1B_1.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Tipo': 'TextEdit', 'Norte': 'TextEdit', 'Este': 'TextEdit', 'CodigoSede': 'TextEdit', 'OFERTA_ENE': 'TextEdit', 'Estudiante': 'Range', 'AREA': 'TextEdit', 'DENSIDAD': 'TextEdit', 'OFERTAHIDR': 'TextEdit', 'CONSUMOH20': 'TextEdit', 'Sector': 'TextEdit', 'CONS KWh': 'TextEdit', 'BALANENERG': 'TextEdit', 'BALANHIDRI': 'TextEdit', });
lyr_Precipitacion_Global__Final_2.set('fieldImages', {'Id': 'TextEdit', 'estacion': 'TextEdit', 'ENERO': 'TextEdit', 'FEBRERO': 'TextEdit', 'MARZO': 'TextEdit', 'ABRIL': 'TextEdit', 'MAYO': 'TextEdit', 'JUNIO': 'TextEdit', 'JULIO': 'TextEdit', 'AGOSTO': 'TextEdit', 'SEPTIEMBRE': 'TextEdit', 'OCTUBRE': 'TextEdit', 'NOVIEMBRE': 'TextEdit', 'DICIEMBRE': 'TextEdit', 'PREC TOTAL': 'TextEdit', 'precini?o': 'TextEdit', 'precipni?a': 'TextEdit', 'Pmedia': 'TextEdit', 'Pmax': 'TextEdit', 'NORTE': 'TextEdit', 'ESTE': 'TextEdit', 'ELEVACION': 'TextEdit', });
lyr_institucionesPrueba1B_1.set('fieldLabels', {'id': 'header label', 'Nombre': 'header label', 'Tipo': 'header label', 'Norte': 'header label', 'Este': 'header label', 'CodigoSede': 'header label', 'OFERTA_ENE': 'header label', 'Estudiante': 'header label', 'AREA': 'header label', 'DENSIDAD': 'header label', 'OFERTAHIDR': 'header label', 'CONSUMOH20': 'header label', 'Sector': 'header label', 'CONS KWh': 'header label', 'BALANENERG': 'header label', 'BALANHIDRI': 'header label', });
lyr_Precipitacion_Global__Final_2.set('fieldLabels', {'Id': 'header label', 'estacion': 'header label', 'ENERO': 'header label', 'FEBRERO': 'header label', 'MARZO': 'header label', 'ABRIL': 'header label', 'MAYO': 'header label', 'JUNIO': 'header label', 'JULIO': 'header label', 'AGOSTO': 'header label', 'SEPTIEMBRE': 'header label', 'OCTUBRE': 'header label', 'NOVIEMBRE': 'header label', 'DICIEMBRE': 'header label', 'PREC TOTAL': 'header label', 'precini?o': 'header label', 'precipni?a': 'header label', 'Pmedia': 'header label', 'Pmax': 'header label', 'NORTE': 'header label', 'ESTE': 'header label', 'ELEVACION': 'header label', });
lyr_Precipitacion_Global__Final_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
