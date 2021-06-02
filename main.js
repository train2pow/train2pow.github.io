// Kartenscript

// Karte initialisieren und auf Österreichs Mittelpunkt blicken
let map = L.map("map", {
    fullscreenControl: true,
    center: [47.71216, 13.34290],
    zoom: 6.5,
    layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    ]
});

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
