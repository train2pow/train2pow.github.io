// Kartenscript

// Overlays für die Themen zum Ein- und Ausschalten definieren
let overlays = {
    bgld: L.featureGroup(),
    ktn: L.featureGroup(),
    noe: L.featureGroup(),
    ooe: L.featureGroup(),
    sbg: L.featureGroup(),
    stmk: L.featureGroup(),
    tir: L.featureGroup(),
    vbg: L.featureGroup(),
    wien: L.featureGroup()
};

// Kartenhintergründe und Overlays zur Layer-Control hinzufügen
let layerControl = L.control.layers({
    "Burgenland": overlays.bgld,
    "Kärnten": overlays.ktn,
    "Niederösterreich": overlays.noe,
    "Oberösterreich": overlays.ooe,
    "Salzburg": overlays.sbg,
    "Steiermark": overlays.stmk,
    "Tirol": overlays.tir,
    "Vorarlberg": overlays.vbg,
    "Wien": overlays.wien
}).addTo(map);

// Karte initialisieren und auf Österreichs Mittelpunkt blicken
let map = L.map("map", {
    fullscreenControl: true,
    center: [47.71216, 13.34290],
    zoom: 6.5,
    layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    ]
});


// create custom snowflake icon
var snowflake = L.icon({
    iconUrl: 'snowflake.png',
    iconSize: [20, 20], // size of the icon
    iconAnchor: [10, 10], // point of the icon which will correspond to marker's location
    popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
});

// Links und mehrere Variablen in Popup einbinden
var marker = (function () {
    for (let index = 0; index < SKIGEBIETE.length; index++) {
        L.marker([SKIGEBIETE[index].lat, SKIGEBIETE[index].lon], {
                icon: snowflake
            })
            .bindPopup(
                '<h2>' + SKIGEBIETE[index].name + '</h2>' +
                '<p><b>' + SKIGEBIETE[index].bundesland + '</b></p>' +
                '<p>' + SKIGEBIETE[index].info + '</p>' +
                '<p><a href=' + SKIGEBIETE[index].link +
                '><i class="fas fa-link"></i>Zur Website</a></p>' +
                '<p><a href=' + SKIGEBIETE[index].scotty + 'target="_blank"' +
                '><i class="fas fa-link"></i>Nächste Verbindung suchen</a></p>')
            .addTo(map);
    }
})();


// add POW Watermark
L.Control.Watermark = L.Control.extend({
    onAdd: function (map) {
        var img = L.DomUtil.create('img');
        img.src = '_POW_AT_lang_blue.png';
        img.style.width = '100px';
        return img;
    },
    onRemove: function (map) {
        // Nothing to do here
    }
});
L.control.watermark = function (opts) {
    return new L.Control.Watermark(opts);
}
L.control.watermark({
    position: 'topright'
}).addTo(map);

// Minimap
let miniMap = new L.Control.MiniMap(
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'), {
        toggleDisplay: true,
        minimized: false
    }
    ).addTo(map);


// scale bar
L.control.scale({
    imperial: false
}).addTo(map);

// leaflet hash plugin
L.hash(map);
