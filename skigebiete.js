const SKIGEBIETE = [{
        "id": "kuehtai",
        "name": "Kühtai",
        "lat": 47.213244507445054,
        "lon": 11.017325791147448,
        "bundesland": "Tirol",
        "bundeslandId": "tir",
        "link": "https://www.kuehtai.info/index.html",
        "scotty": "https://fahrplan.oebb.at/bin/query.exe/dn?REQ0JourneyStopsZID=A=1@O=K%FChtai%20Gaiskogelbahn@X=11031427@Y=47216479@U=81@L=000792339@B=1@p=1616676241@&externalCall=yes"
    },
    {
        "id": "axamer-lizum",
        "name": "Axamer Lizum",
        "lat": 47.19638897175867,
        "lon": 11.302392468380951,
        "bundesland": "Tirol",
        "bundeslandId": "tir",
        "info": "Von Innsbruck über Völs, Kematen und Axams in die Axamer Lizum. Direktverbindung jede Stunde, dazwischen mit Umsteigen",
        "link": "https://www.axamer-lizum.at/",
        "scotty": "https://fahrplan.oebb.at/bin/query.exe/dn?REQ0JourneyStopsZID=A=1@O=Axams%20Axamer%20Lizum%20Talstation@X=11302973@Y=47195813@U=81@L=000793536@B=1@p=1616676241@&externalCall=yes"
    },
    {
        "id": "stubaier-gletscher",
        "name": "Stubaier Gletscher",
        "lat": 47.01377808264369,
        "lon": 11.155595893163834,
        "bundesland": "Tirol",
        "bundeslandId": "tir",
        "info": "Von Innsbruck mit dem Bus Richtung Neustift i. St. Mutterbergalm. Besonders empfehlenswert in der Vor- und Nachsaison, wenn andere Skigebiete noch nicht aufgesperrt oder schon wieder zugesperrt haben.",
        "link": "https://www.stubaier-gletscher.com/",
        "scotty": "https://fahrplan.oebb.at/bin/query.exe/dn?REQ0JourneyStopsZID=A=4@O=Neustift%20im%20Stubaital,%20Stubaier%20Gletscher/Eisgrat@X=11154436@Y=47010779@U=105@L=970069932@B=1@p=1555424334@&externalCall=yes"
    },
    {
        "id": "rosshuette-seefeld",
        "name": "Rosshütte Seefeld",
        "lat": 47.331496006189944,
        "lon": 11.199200839023229,
        "bundesland": "Tirol",
        "bundeslandId": "tir",
        "info": "Vom Innsbrucker Hbf per direkter Zugverbindung zum Bhf Seefeld. Von dort entweder in ca. 15 min zu Fuß zur Talstation des Skigebiets Rosshütte oder mit dem Skibus. Direktverbindung alle 30-60 min. ",
        "link": "https://www.seefeld.com/rosshuette",
        "scotty": "https://fahrplan.oebb.at/bin/query.exe/dn?REQ0JourneyStopsZID=A=1@O=Seefeld%20in%20Tirol%20Bahnhof@X=11189503@Y=47328575@U=81@L=001270308@B=1@p=1616676241@&externalCall=yes"
    },
    {
        "id": "bergeralm",
        "name": "Bergeralm",
        "lat": 47.08817661269825,
        "lon": 11.459601576674663,
        "bundesland": "Tirol",
        "bundeslandId": "tir",
        "link": "https://www.bergeralm.net/",
        "scotty": "https://fahrplan.oebb.at/bin/query.exe/dn?REQ0JourneyStopsZID=A=1@O=Seefeld%20in%20Tirol%20Bahnhof@X=11189503@Y=47328575@U=81@L=001270308@B=1@p=1616676241@&externalCall=yes"
    },
    {
        "id": "arlberg",
        "name": "Arlberg",
        "lat": 47.15991811541276,
        "lon": 10.212339753503121,
        "bundesland": "Tirol",
        "bundeslandId": "tir",
        "link": "https://www.skiarlberg.at/de",
        "scotty": "https://fahrplan.oebb.at/bin/query.exe/dn?REQ0JourneyStopsZID=A=1@O=St.Anton%20am%20Arlberg%20Bahnhof@X=10265367@Y=47126183@U=81@L=001270602@B=1@p=1616676241@&externalCall=yes"
    },
    {
        "id": "schladming",
        "name": "Schladming",
        "lat": 47.39727760118509,
        "lon": 13.685840669078155,
        "bundesland": "Steiermark",
        "bundeslandId": "stmk",
        "info": "Vom Grazer Hauptbahnhof mit dem Zug bis Schladming Bahnhhof. Von dort sind es nur wenige Minuten bis ins Skigebiet. Der Einstieg Planai West empfiehlt sich für Zuganreisende. Direktverbindung alle 2 Stunden, dazwischen mit Umsteigen.",
        "link": "https://www.planai.at/de",
        "scotty": "https://fahrplan.oebb.at/bin/query.exe/dn?REQ0JourneyStopsZID=A=1@O=Schladming%20Bahnhof@X=13678840@Y=47393953@U=81@L=001261227@B=1@p=1616676241@&externalCall=yes"
    },
    {
        "id": "semmering",
        "name": "Semmering",
        "lat": 47.63212451281339,
        "lon": 15.830397517128526,
        "bundesland": "Niederösterreich",
        "bundeslandId": "noe",
        "link": "https://www.semmering.com/",
        "scotty": "https://fahrplan.oebb.at/bin/query.exe/dn?REQ0JourneyStopsZID=A=1@O=Semmering%20Bahnhof@X=15830660@Y=47638954@U=81@L=001231807@B=1@p=1616676241@&externalCall=yes"
    },
    {
        "id": "zell-am-see",
        "name": "Zell am See",
        "lat": 47.326794909587136,
        "lon": 12.772550865253573,
        "bundesland": "Salzburg",
        "bundeslandId": "sbg",
        "link": "https://www.schmitten.at/de",
        "scotty": "https://fahrplan.oebb.at/bin/query.exe/dn?REQ0JourneyStopsZID=A=1@O=Zell%20am%20See%20Bahnhof@X=12797071@Y=47320727@U=81@L=001250610@B=1@p=1616676241@&externalCall=yes"
    },
    {
        "id": "nordkette",
        "name": "Nordkette Innsbruck",
        "lat": 47.28654323399738,
        "lon": 11.398919425066605,
        "bundesland": "Tirol",
        "bundeslandId": "tir",
        "link": "https://www.nordkette.com/de",
        "scotty": "https://fahrplan.oebb.at/bin/query.exe/dn?REQ0JourneyStopsZID=A=1@O=Innsbruck%20Nordkette@X=11398906@Y=47285786@U=81@L=000791097@B=1@p=1616676241@&externalCall=yes"
    },
    {
        "id": "wilder-kaiser-brixental",
        "name": "Wilder Kaiser - Brixental",
        "lat": 47.50533348987689,
        "lon": 12.19037970322786,
        "bundesland": "Tirol",
        "bundeslandId": "tir",
        "link": "https://www.skiwelt.at/de/",
        "scotty": "https://fahrplan.oebb.at/bin/query.exe/dn?REQ0JourneyStopsZID=A=4@O=Ellmau,%20Ellmau/Skiwelt%20Wilder%20Kaiser/Hartkaiserbah@X=12293881@Y=47508053@U=105@L=970066763@B=1@p=1555424334@&externalCall=yes"
    },
    {
        "id": "stuhleck",
        "name": "Stuhleck",
        "lat": 47.61560598794495,
        "lon": 15.757688982742394,
        "bundesland": "Steiermark",
        "bundeslandId": "stmk",
        "link": "https://www.stuhleck.com/",
        "scotty": "https://fahrplan.oebb.at/bin/query.exe/dn?REQ0JourneyStopsZID=A=1@O=Spital%20am%20Semmering%20Stuhleckbahn%20Talstation@X=15759178@Y=47615322@U=81@L=000613042@B=1@p=1616676241@&externalCall=yes"
    },
    {
        "id": "gasteinertal",
        "name": "Gasteinertal",
        "lat": 47.16923910696097,
        "lon": 13.09825239261632,
        "bundesland": "Salzburg",
        "bundeslandId": "sbg",
        "link": "https://www.skigastein.com/de",
        "scotty": "https://fahrplan.oebb.at/bin/query.exe/dn?REQ0JourneyStopsZID=A=1@O=Bad%20Hofgastein%20Bahnhof@X=13100996@Y=47195741@U=81@L=001250402@B=1@p=1616676241@&externalCall=yes"
    },
    {
        "id": "obertauern",
        "name": "Obertauern",
        "lat": 47.25234729195317,
        "lon": 13.54717867396342,
        "bundesland": "Salzburg",
        "bundeslandId": "sbg",
        "info": "Vom Salzburger Hauptbahnhof mit dem Zug bis Radstadt und von dort mit dem Bus Richtung Mauterndorf nach Obertauern (oder weiter ins Skigebiet Großeck -Speiereck in Mauterndorf). Direktverbindung mit 1x Umsteigen in der Früh und zu Mittag, mit mehrmaligem Umsteigen mehrmals täglich. Sehr schneesicheres Gebiet!",
        "link": "https://www.ski-obertauern.at/",
        "scotty": "https://fahrplan.oebb.at/bin/query.exe/dn?REQ0JourneyStopsZID=A=1@O=Obertauern%20Gr%FCnwaldkopfbahn%20Talstation@X=13544299@Y=47251438@U=81@L=000594213@B=1@p=1616676241@&externalCall=yes"
    },
    {
        "id": "st.johann-ip",
        "name": "St. Johann im Pongau",
        "lat": 47.32610174738698,
        "lon": 13.195279526100395,
        "bundesland": "Salzburg",
        "bundeslandId": "sbg",
        "link": "https://www.snow-space.com/",
        "scotty": "https://fahrplan.oebb.at/bin/query.exe/dn?REQ0JourneyStopsZID=A=1@O=St.Johann im Pongau Bahnhof@X=13194906@Y=47347605@U=81@L=001250408@B=1@p=1623754104@&externalCall=yes"
    },
    {
        "id": "radstadt",
        "name": "Radstadt - Altenmarkt",
        "lat": 47.373334146677216,
        "lon": 13.46607250288871,
        "bundesland": "Salzburg",
        "bundeslandId": "sbg",
        "link": "http://www.radstadt-altenmarkt.at/",
        "scotty": "https://fahrplan.oebb.at/bin/query.exe/dn?REQ0JourneyStopsZID=A=1@O=Radstadt%20Bahnhof@X=13466281@Y=47383849@U=81@L=001250415@B=1@p=1623396474@&externalCall=yes"
    },
    {
        "id": "kitzbuehel",
        "name": "Kitzbühel",
        "lat": 47.44713470941485,
        "lon": 12.390033928586977,
        "bundesland": "Tirol",
        "bundeslandId": "tir",
        "link": "https://www.kitzski.at/de/bergbahn-ag-kitzbuehel.html",
        "scotty": "https://fahrplan.oebb.at/bin/query.exe/dn?REQ0JourneyStopsZID=A=1@O=Kitzb%FChel@X=12391091@Y=47454010@U=81@L=001170411@B=1@p=1616676241@&externalCall=yes"
    },
    {
        "id": "praebichl",
        "name": "Präbichl",
        "lat": 47.51765252186999,
        "lon": 14.961846406285963,
        "bundesland": "Steiermark",
        "bundeslandId": "stmk",
        "link": "https://www.praebichl.at/winter/",
        "scotty": "https://fahrplan.oebb.at/bin/query.exe/dn?REQ0JourneyStopsZID=A=1@O=Pr%E4bichl%20Schiarena@X=14962985@Y=47516845@U=81@L=000611044@B=1@p=1616676241@&externalCall=yes"
    },
    {
        "id": "schlick2000-stubai",
        "name": "Schlick 2000 - Stubai",
        "lat": 47.15574859748435,
        "lon": 11.343651455197202,
        "bundesland": "Tirol",
        "bundeslandId": "tir",
        "info": "Vom Innsbrucker Hbf mit dem Bus (Richtung Neustift i. St. Mutterbergalm) bis Fuplmes Ortsmitte und während der Skisaison Weiterfahrt mit dem Skibus bis zur Talstation. Bis Fulpmes im 30-Minuten-Takt, Skibusse kommen regelmäßig.",
        "link": "https://www.stubai.at/skigebiete/schlick2000/",
        "scotty": "https://fahrplan.oebb.at/bin/query.exe/dn?REQ0JourneyStopsZID=A=1@O=Fulpmes%20Schlick%202000%20Talstation@X=11343749@Y=47155613@U=81@L=000793629@B=1@p=1616676241@&externalCall=yes"
    },
    {
        "id": "silvretta-montafon",
        "name": "Silvretta Montafon",
        "lat": 47.0798462322768,
        "lon": 9.921505698987032,
        "bundesland": "Vorarlberg",
        "bundeslandId": "vbg",
        "info": "Für Reisende mit dem Skizug Montafon gibt es -10% auf Tages- und Halbtagesskipässe.",
        "link": "https://www.silvretta-montafon.at/de",
        "scotty": "https://fahrplan.oebb.at/bin/query.exe/dn?REQ0JourneyStopsZID=A=1@O=Schruns Bahnhof@X=9918536@Y=47079205@U=81@L=001280110@B=1@p=1623754104@&externalCall=yes"
    },
    {
        "id": "sonnenkopf",
        "name": "Sonnenkopf - Klostertal",
        "lat": 47.13080033706712,
        "lon": 10.056117241188264,
        "bundesland": "Vorarlberg",
        "bundeslandId": "vbg",
        "link": "http://www.sonnenkopf.com/",
        "scotty": "https://fahrplan.oebb.at/bin/query.exe/dn?REQ0JourneyStopsZID=A=1@O=Wald%20am%20Arlberg%20Sonnenkopfbahn%20Talstation@X=10053113@Y=47128538@U=81@L=000891027@B=1@p=1623396474@&externalCall=yes"
    },
    {
        "id": "lienz-hochstein",
        "name": "Lienz - Hochstein",
        "lat": 46.83107602100516,
        "lon": 12.753327111070842,
        "bundesland": "Tirol",
        "bundeslandId": "tir",
        "info": "Unweit des Stadtzentrums von Lienz und auch vom Bahnhof problemlos zu Fuß erreichbar.",
        "link": "http://www.lienzer-bergbahnen.at/",
        "scotty": "https://fahrplan.oebb.at/bin/query.exe/dn?REQ0JourneyStopsZID=A=1@O=Lienz%20in%20Osttirol%20Bahnhof@X=12770543@Y=46828217@U=81@L=001270701@B=1@p=1623919089@&externalCall=yes"
    },
    {
        "id": "buchensteinwand-pillersee",
        "name": "Die Buchensteinwand Bergbahn Pillersee",
        "lat": 47.50485130101313,
        "lon": 12.571877108918775,
        "bundesland": "Tirol",
        "bundeslandId": "tir",
        "link": "https://www.bergbahn-pillersee.com/de/",
        "scotty": "https://fahrplan.oebb.at/bin/query.exe/dn?REQ0JourneyStopsZID=A=1@O=St.Ulrich/Pillersee%20Flecken@X=12577042@Y=47505527@U=81@L=000794201@B=1@p=1623396474@&externalCall=yes",
    },
    {
        "id": "bergbahnen-fieberbrunn",
        "name": "Bergbahnen Fieberbrunn",
        "lat": 47.471007650008296,
        "lon": 12.553257966078576,
        "bundesland": "Tirol",
        "bundeslandId": "tir",
        "link": "https://www.fieberbrunn.com/de/winter/skigebiet",
        "scotty": "https://fahrplan.oebb.at/bin/query.exe/dn?REQ0JourneyStopsZID=A=1@O=Fieberbrunn%20Bergbahnen%20Talstation@X=12551602@Y=47467521@U=81@L=000794196@B=1@p=1623396474@&externalCall=yes"
    },
    {
        "id": "venet-bergbahnen",
        "name": "Venet Bergbahnen",
        "lat": 47.15980087623532,
        "lon": 10.583544600575411,
        "bundesland": "Tirol",
        "bundeslandId": "tir",
        "link": "https://www.venet.at/",
        "scotty": "https://fahrplan.oebb.at/bin/query.exe/dn?REQ0JourneyStopsZID=A=1@O=Zams%20Venetbahn%20Talstation@X=10584547@Y=47154148@U=81@L=000796019@B=1@p=1623396474@&externalCall=yes"
    },
    {
        "id": "obertilliach-bergbahnen",
        "name": "Obertilliacher Bergbahnen",
        "lat": 46.722107736283604,
        "lon": 12.61331542339837,
        "bundesland": "Tirol",
        "bundeslandId": "tir",
        "link": "https://obertilliacher-bergbahnen.com/",
        "scotty": "https://fahrplan.oebb.at/bin/query.exe/dn?REQ0JourneyStopsZID=A=1@O=Obertilliach%20Ort@X=12616882@Y=46708777@U=81@L=000797057@B=1@p=1623396474@&externalCall=yes"
    },
    {
        "id": "bergbahnen-wildkogel",
        "name": "Bergbahnen Wildkogel",
        "lat": 47.254847888086104,
        "lon": 12.280730715496066,
        "bundesland": "Salzburg",
        "bundeslandId": "sbg",
        "link": "https://www.wildkogel-arena.at/de/bergbahnen-wildkogel",
        "scotty": "https://fahrplan.oebb.at/bin/query.exe/dn?REQ0JourneyStopsZID=A=1@O=Neukirchen%20am%20Gro%DFvenediger%20Bahnhof@X=12281162@Y=47252139@U=81@L=001250619@B=1@p=1623919089@&externalCall=yes"
    },
    {
        "id": "ski-areal-hochkar",
        "name": "Ski Areal Hochkar",
        "lat": 47.718631394841,
        "lon": 14.918286281658668,
        "bundesland": "Niederösterreich",
        "bundeslandId": "noe",
        "link": "https://skisport.com/Hochkar/de",
        "scotty": "https://fahrplan.oebb.at/bin/query.exe/dn?REQ0JourneyStopsZID=A=1@O=Hochkar%20Lifte%20Talstation@X=14918102@Y=47718311@U=81@L=000320021@B=1@p=1623396474@&externalCall=yes"
    },
    {
        "id": "patscherkofel",
        "name": "Patscherkofelbahn",
        "lat": 47.22207544902674,
        "lon": 11.427029655716025,
        "bundesland": "Tirol",
        "bundeslandId": "tir",
        "link": "https://www.patscherkofelbahn.at/de/winter#winter",
        "scotty": "https://fahrplan.oebb.at/bin/query.exe/dn?REQ0JourneyStopsZID=A=1@O=Igls%20Patscherkofel%20Talstation@X=11425110@Y=47222071@U=81@L=000791147@B=1@p=1623754104@&externalCall=yes"
    },
    {
        "id": "glungezerbahn",
        "name": "Glungezerbahn",
        "lat": 47.256567007313265,
        "lon": 11.53532878348363,
        "bundesland": "Tirol",
        "bundeslandId": "tir",
        "link": "https://www.glungezerbahn.at/",
        "scotty": "https://fahrplan.oebb.at/bin/query.exe/dn?REQ0JourneyStopsZID=A=1@O=Tulfes%20Glungezerbahn%20Talstation@X=11535246@Y=47257209@U=81@L=000793495@B=1@p=1623754104@&externalCall=yes"
    },
];