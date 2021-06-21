// Kartenscript

// Karte initialisieren und auf Österreichs Mittelpunkt blicken
let powMap = L.map("powMap", {
    fullscreenControl: true,
    center: [47.71216, 13.34290],
    zoom: 6.25,
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


// add POW Watermark
L.Control.Watermark = L.Control.extend({
    onAdd: function (map) {
        var img = L.DomUtil.create('img');
        img.src = 'pics/POW_AT_lang_blue.png';
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
}).addTo(powMap);

// scale bar
L.control.scale({
    imperial: false
}).addTo(powMap);

var standorte = [{
    "name": "Innsbruck",
    "lat": 47.26913970430914,
    "lon": 11.395510708574795,
    "bundesland": "Tirol",
    "stammtisch": "jeden zweiten Mittwoch im Monat",
    "ansprechperson": "Verena",
    "mail": "mailto:innsbruck@protectourwinters.at"
},
{
    "name": "Graz",
    "lat": 47.080114945960695,
    "lon": 15.437667342361847,
    "bundesland": "Steiermark",
    "stammtisch": "jeden zweiten Mittwoch im Monat",
    "ansprechperson": "Christina",
    "mail": "mailto:graz@protectourwinters.at"
},
{
    "name": "Wien",
    "lat": 48.213737059062694,
    "lon": 16.3649432660941,
    "bundesland": "Wien",
    "stammtisch": "jeden zweiten Mittwoch im Monat",
    "ansprechperson": "Moritz",
    "mail": "mailto:wien@protectourwinters.at"
},
{
    "name": "Salzburg",
    "lat": 47.80878407463205,
    "lon": 13.043037761598907,
    "bundesland": "Salzburg",
    "stammtisch": "jeden zweiten Mittwoch im Monat",
    "ansprechperson": "Susi",
    "mail": "mailto:salzburg@protectourwinters.at"
}
];

 // Marker an POW-Standorten setzen + Popup
 var marker = (function () {
    for (let index = 0; index < standorte.length; index++) {
        L.marker([standorte[index].lat, standorte[index].lon], {
                icon: snowflake
            })
            .bindPopup(
                '<h2>' + standorte[index].name + '</h2></br>' +
                '<p><b>Stammtisch: </b>' + standorte[index].stammtisch + '</p>' +
                '<p><b>Ansprechperson: </b>' + standorte[index].ansprechperson + '</p>' +
                '<p><a href=' + standorte[index].mail  +
                '><i class="fas fa-envelope"></i>Schreib ein Mail!</a></p>')
            .addTo(powMap);
    }
})();