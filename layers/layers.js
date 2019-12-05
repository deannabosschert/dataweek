var wms_layers = [];

var format_GEBIED_BUURTEN_EXWATER_0 = new ol.format.GeoJSON();
var features_GEBIED_BUURTEN_EXWATER_0 = format_GEBIED_BUURTEN_EXWATER_0.readFeatures(json_GEBIED_BUURTEN_EXWATER_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEBIED_BUURTEN_EXWATER_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEBIED_BUURTEN_EXWATER_0.addFeatures(features_GEBIED_BUURTEN_EXWATER_0);
var lyr_GEBIED_BUURTEN_EXWATER_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GEBIED_BUURTEN_EXWATER_0, 
                style: style_GEBIED_BUURTEN_EXWATER_0,
                interactive: false,
                title: '<img src="styles/legend/GEBIED_BUURTEN_EXWATER_0.png" /> GEBIED_BUURTEN_EXWATER'
            });
var format_Joinedlayer_1 = new ol.format.GeoJSON();
var features_Joinedlayer_1 = format_Joinedlayer_1.readFeatures(json_Joinedlayer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Joinedlayer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Joinedlayer_1.addFeatures(features_Joinedlayer_1);
var lyr_Joinedlayer_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Joinedlayer_1, 
                style: style_Joinedlayer_1,
                interactive: true,
                title: 'Joined layer'
            });
var format_fastfood_2 = new ol.format.GeoJSON();
var features_fastfood_2 = format_fastfood_2.readFeatures(json_fastfood_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fastfood_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fastfood_2.addFeatures(features_fastfood_2);
var lyr_fastfood_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fastfood_2, 
                style: style_fastfood_2,
                interactive: false,
                title: '<img src="styles/legend/fastfood_2.png" /> fastfood'
            });
var format_uitgaansgelegenheden_3 = new ol.format.GeoJSON();
var features_uitgaansgelegenheden_3 = format_uitgaansgelegenheden_3.readFeatures(json_uitgaansgelegenheden_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_uitgaansgelegenheden_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_uitgaansgelegenheden_3.addFeatures(features_uitgaansgelegenheden_3);
var lyr_uitgaansgelegenheden_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_uitgaansgelegenheden_3, 
                style: style_uitgaansgelegenheden_3,
                interactive: false,
                title: '<img src="styles/legend/uitgaansgelegenheden_3.png" /> uitgaansgelegenheden'
            });

lyr_GEBIED_BUURTEN_EXWATER_0.setVisible(true);lyr_Joinedlayer_1.setVisible(true);lyr_fastfood_2.setVisible(true);lyr_uitgaansgelegenheden_3.setVisible(true);
var layersList = [lyr_GEBIED_BUURTEN_EXWATER_0,lyr_Joinedlayer_1,lyr_fastfood_2,lyr_uitgaansgelegenheden_3];
lyr_GEBIED_BUURTEN_EXWATER_0.set('fieldAliases', {'OBJECTNUMMER': 'OBJECTNUMMER', 'Buurt_code': 'Buurt_code', 'Buurt': 'Buurt', 'Buurtcombinatie_code': 'Buurtcombinatie_code', 'Stadsdeel_code': 'Stadsdeel_code', 'Opp_m2': 'Opp_m2', 'WKT_LAT_LNG': 'WKT_LAT_LNG', 'LNG': 'LNG', 'LAT': 'LAT', });
lyr_Joinedlayer_1.set('fieldAliases', {'OBJECTNUMMER': 'OBJECTNUMMER', 'Buurt_code': 'Buurt_code', 'Buurt': 'Buurt', 'Buurtcombinatie_code': 'Buurtcombinatie_code', 'Stadsdeel_code': 'Stadsdeel_code', 'Opp_m2': 'Opp_m2', 'WKT_LAT_LNG': 'WKT_LAT_LNG', 'LNG': 'LNG', 'LAT': 'LAT', 'NUMUITGAAN': 'NUMUITGAAN', 'OBJECTNUMMER_2': 'OBJECTNUMMER_2', 'Buurt_code_2': 'Buurt_code_2', 'Buurt_2': 'Buurt_2', 'Buurtcombinatie_code_2': 'Buurtcombinatie_code_2', 'Stadsdeel_code_2': 'Stadsdeel_code_2', 'Opp_m2_2': 'Opp_m2_2', 'WKT_LAT_LNG_2': 'WKT_LAT_LNG_2', 'LNG_2': 'LNG_2', 'LAT_2': 'LAT_2', 'NUMPOINTS': 'NUMPOINTS', });
lyr_fastfood_2.set('fieldAliases', {'ZAAKNUMMER': 'ZAAKNUMMER', 'ZAAKNAAM': 'ZAAKNAAM', 'ADRES': 'ADRES', 'ZAAK_CATEGORIE': 'ZAAK_CATEGORIE', 'ZAAK_SPECIFICATIE': 'ZAAK_SPECIFICATIE', 'BEGINDATUM': 'BEGINDATUM', 'EINDDATUM': 'EINDDATUM', 'OPENINGSTIJDEN_ZO_DO_VAN': 'OPENINGSTIJDEN_ZO_DO_VAN', 'SLUIT_ZO_DO_TOT': 'SLUIT_ZO_DO_TOT', 'OPENINGSTIJDEN_VR_ZA_VAN': 'OPENINGSTIJDEN_VR_ZA_VAN', 'sluittijden_VR_ZA_TOT': 'sluittijden_VR_ZA_TOT', 'LOCATIE_WKT': 'LOCATIE_WKT', 'left': 'left', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'right': 'right', 'TERRASGEOMETRIE_WKT': 'TERRASGEOMETRIE_WKT', 'STADSDEEL': 'STADSDEEL', 'STATUS_VERGUNNING': 'STATUS_VERGUNNING', });
lyr_uitgaansgelegenheden_3.set('fieldAliases', {'Title': 'Title', 'Shortdescription': 'Shortdescription', 'Calendarsummary': 'Calendarsummary', 'Locatienaam': 'Locatienaam', 'City': 'City', 'Adres': 'Adres', 'Zipcode': 'Zipcode', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Urls': 'Urls', 'Media': 'Media', });
lyr_GEBIED_BUURTEN_EXWATER_0.set('fieldImages', {'OBJECTNUMMER': 'TextEdit', 'Buurt_code': 'TextEdit', 'Buurt': 'TextEdit', 'Buurtcombinatie_code': 'TextEdit', 'Stadsdeel_code': 'TextEdit', 'Opp_m2': 'TextEdit', 'WKT_LAT_LNG': 'TextEdit', 'LNG': 'TextEdit', 'LAT': 'TextEdit', });
lyr_Joinedlayer_1.set('fieldImages', {'OBJECTNUMMER': 'TextEdit', 'Buurt_code': 'TextEdit', 'Buurt': 'TextEdit', 'Buurtcombinatie_code': 'TextEdit', 'Stadsdeel_code': 'TextEdit', 'Opp_m2': 'TextEdit', 'WKT_LAT_LNG': 'TextEdit', 'LNG': 'TextEdit', 'LAT': 'TextEdit', 'NUMUITGAAN': 'TextEdit', 'OBJECTNUMMER_2': 'TextEdit', 'Buurt_code_2': 'TextEdit', 'Buurt_2': 'TextEdit', 'Buurtcombinatie_code_2': 'TextEdit', 'Stadsdeel_code_2': 'TextEdit', 'Opp_m2_2': 'TextEdit', 'WKT_LAT_LNG_2': 'TextEdit', 'LNG_2': 'TextEdit', 'LAT_2': 'TextEdit', 'NUMPOINTS': 'TextEdit', });
lyr_fastfood_2.set('fieldImages', {'ZAAKNUMMER': 'TextEdit', 'ZAAKNAAM': 'TextEdit', 'ADRES': 'TextEdit', 'ZAAK_CATEGORIE': 'TextEdit', 'ZAAK_SPECIFICATIE': 'TextEdit', 'BEGINDATUM': 'TextEdit', 'EINDDATUM': 'TextEdit', 'OPENINGSTIJDEN_ZO_DO_VAN': 'TextEdit', 'SLUIT_ZO_DO_TOT': 'TextEdit', 'OPENINGSTIJDEN_VR_ZA_VAN': 'TextEdit', 'sluittijden_VR_ZA_TOT': 'TextEdit', 'LOCATIE_WKT': 'TextEdit', 'left': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'right': 'TextEdit', 'TERRASGEOMETRIE_WKT': 'TextEdit', 'STADSDEEL': 'TextEdit', 'STATUS_VERGUNNING': 'TextEdit', });
lyr_uitgaansgelegenheden_3.set('fieldImages', {'Title': 'TextEdit', 'Shortdescription': 'TextEdit', 'Calendarsummary': 'TextEdit', 'Locatienaam': 'TextEdit', 'City': 'TextEdit', 'Adres': 'TextEdit', 'Zipcode': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Urls': 'TextEdit', 'Media': 'TextEdit', });
lyr_GEBIED_BUURTEN_EXWATER_0.set('fieldLabels', {'OBJECTNUMMER': 'no label', 'Buurt_code': 'no label', 'Buurt': 'no label', 'Buurtcombinatie_code': 'no label', 'Stadsdeel_code': 'no label', 'Opp_m2': 'no label', 'WKT_LAT_LNG': 'no label', 'LNG': 'no label', 'LAT': 'no label', });
lyr_Joinedlayer_1.set('fieldLabels', {'OBJECTNUMMER': 'no label', 'Buurt_code': 'no label', 'Buurt': 'no label', 'Buurtcombinatie_code': 'no label', 'Stadsdeel_code': 'no label', 'Opp_m2': 'no label', 'WKT_LAT_LNG': 'no label', 'LNG': 'no label', 'LAT': 'no label', 'NUMUITGAAN': 'no label', 'OBJECTNUMMER_2': 'no label', 'Buurt_code_2': 'no label', 'Buurt_2': 'no label', 'Buurtcombinatie_code_2': 'no label', 'Stadsdeel_code_2': 'no label', 'Opp_m2_2': 'no label', 'WKT_LAT_LNG_2': 'no label', 'LNG_2': 'no label', 'LAT_2': 'no label', 'NUMPOINTS': 'no label', });
lyr_fastfood_2.set('fieldLabels', {'ZAAKNUMMER': 'no label', 'ZAAKNAAM': 'no label', 'ADRES': 'no label', 'ZAAK_CATEGORIE': 'no label', 'ZAAK_SPECIFICATIE': 'no label', 'BEGINDATUM': 'no label', 'EINDDATUM': 'no label', 'OPENINGSTIJDEN_ZO_DO_VAN': 'no label', 'SLUIT_ZO_DO_TOT': 'no label', 'OPENINGSTIJDEN_VR_ZA_VAN': 'no label', 'sluittijden_VR_ZA_TOT': 'no label', 'LOCATIE_WKT': 'no label', 'left': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'right': 'no label', 'TERRASGEOMETRIE_WKT': 'no label', 'STADSDEEL': 'no label', 'STATUS_VERGUNNING': 'no label', });
lyr_uitgaansgelegenheden_3.set('fieldLabels', {'Title': 'no label', 'Shortdescription': 'no label', 'Calendarsummary': 'no label', 'Locatienaam': 'no label', 'City': 'no label', 'Adres': 'no label', 'Zipcode': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Urls': 'no label', 'Media': 'no label', });
lyr_uitgaansgelegenheden_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});