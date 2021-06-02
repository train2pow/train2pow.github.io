// Kartenscript

// Karte initialisieren und auf Österreichs Mittelpunkt blicken
let powMap = L.map("powMap", {
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
}).addTo(powMap);

// scale bar
L.control.scale({
    imperial: false
}).addTo(powMap);

var standorte = [{
    "name": "Innsbruck",
    "lat": 47.213244507445054,
    "lon": 11.017325791147448,
    "bundesland": "Tirol",
    "link": "https://www.kuehtai.info/",
    "scotty": "https://fahrplan.oebb.at/bin/query.exe/dn?REQ0JourneyStopsZID=A=1@O=K%FChtai%20Gaiskogelbahn@X=11031427@Y=47216479@U=81@L=000792339@B=1@p=1616676241@&externalCall=yes"
},
{
    "name": "Graz",
    "lat": 47.15574859748435,
    "lon": 11.343651455197202,
    "bundesland": "Steiermark",
    "info": "Vom Innsbrucker Hbf mit dem Bus (Richtung Neustift i. St. Mutterbergalm) bis Fuplmes Ortsmitte und während der Skisaison Weiterfahrt mit dem Skibus bis zur Talstation. Bis Fulpmes im 30-Minuten-Takt, Skibusse kommen regelmäßig.",
    "link": "https://www.stubai.at/skigebiete/schlick2000/",
    "scotty": "https://fahrplan.oebb.at/bin/query.exe/dn?REQ0JourneyStopsZID=A=1@O=Fulpmes%20Schlick%202000%20Talstation@X=11343749@Y=47155613@U=81@L=000793629@B=1@p=1616676241@&externalCall=yes"
}
];

 // Marker an POW-Standorten setzen + Popup
 var marker = (function () {
    for (let index = 0; index < standorte.length; index++) {
        L.marker([standorte[index].lat, standorte[index].lon], {
                icon: snowflake
            })
            .bindPopup(
                '<h2>' + standorte[index].name + '</h2>' +
                '<p><b>' + standorte[index].bundesland + '</b></p>' +
                '<p><a href=' + standorte[index].scotty + 'target="_blank"' +
                '><i class="fas fa-link"></i>Nächste Verbindung suchen</a></p>')
            .addTo(powMap);
    }
})();
