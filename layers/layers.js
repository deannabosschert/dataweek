var wms_layers = [];


        var lyr_OSMTransportation_0 = new ol.layer.Tile({
            'title': 'OSM Transportation',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">Maps © Thunderforest, Data © OpenStreetMap contributors</a>',
                url: 'http://tile.thunderforest.com/transport/{z}/{x}/{y}.png'
            })
        });

        var lyr_MapSurferOSMSemitransparent_1 = new ol.layer.Tile({
            'title': 'MapSurfer OSM Semitransparent',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">©OpenStreetMap contributors, ODbL, Imagery GIScience Research Group @ Heidelberg University</a>',
                url: 'https://maps.heigit.org/openmapsurfer/tiles/hybrid/webmercator/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMTFTransportDark_2 = new ol.layer.Tile({
            'title': 'OSM TF Transport Dark',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">Maps © Thunderforest, Data © OpenStreetMap contributors</a>',
                url: 'http://tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png'
            })
        });

        var lyr_nlmapsstandaard_3 = new ol.layer.Tile({
            'title': 'nlmaps.standaard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.kadaster.nl">Map tiles by Kadaster, under CC-BY-SA 4.0</a>',
                url: 'https://geodata.nationaalgeoregister.nl/tiles/service/wmts/brtachtergrondkaart/EPSG:3857/{z}/{x}/{y}.png'
            })
        });
var format_vissssenuitgaansgelegenheden_4 = new ol.format.GeoJSON();
var features_vissssenuitgaansgelegenheden_4 = format_vissssenuitgaansgelegenheden_4.readFeatures(json_vissssenuitgaansgelegenheden_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vissssenuitgaansgelegenheden_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vissssenuitgaansgelegenheden_4.addFeatures(features_vissssenuitgaansgelegenheden_4);
var lyr_vissssenuitgaansgelegenheden_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vissssenuitgaansgelegenheden_4, 
                style: style_vissssenuitgaansgelegenheden_4,
                interactive: true,
                title: '<img src="styles/legend/vissssenuitgaansgelegenheden_4.png" /> vissssen uitgaansgelegenheden'
            });
var format_vissssenfastfoodketens_5 = new ol.format.GeoJSON();
var features_vissssenfastfoodketens_5 = format_vissssenfastfoodketens_5.readFeatures(json_vissssenfastfoodketens_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vissssenfastfoodketens_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vissssenfastfoodketens_5.addFeatures(features_vissssenfastfoodketens_5);
var lyr_vissssenfastfoodketens_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vissssenfastfoodketens_5, 
                style: style_vissssenfastfoodketens_5,
                interactive: true,
                title: '<img src="styles/legend/vissssenfastfoodketens_5.png" /> vissssen fastfood ketens'
            });
var group_background = new ol.layer.Group({
                                layers: [lyr_OSMTransportation_0,lyr_MapSurferOSMSemitransparent_1,lyr_OSMTFTransportDark_2,],
                                title: "background"});

lyr_OSMTransportation_0.setVisible(true);lyr_MapSurferOSMSemitransparent_1.setVisible(true);lyr_OSMTFTransportDark_2.setVisible(true);lyr_nlmapsstandaard_3.setVisible(true);lyr_vissssenuitgaansgelegenheden_4.setVisible(true);lyr_vissssenfastfoodketens_5.setVisible(true);
var layersList = [group_background,lyr_nlmapsstandaard_3,lyr_vissssenuitgaansgelegenheden_4,lyr_vissssenfastfoodketens_5];
lyr_vissssenuitgaansgelegenheden_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_vissssenfastfoodketens_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_vissssenuitgaansgelegenheden_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_vissssenfastfoodketens_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_vissssenuitgaansgelegenheden_4.set('fieldLabels', {'Name': 'header label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_vissssenfastfoodketens_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_vissssenfastfoodketens_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});