$(function(){
    var url = "http://snoozit/app_dev.php/advert/departement/";
    $(".mapcontainer").mapael({
        map : {
            name : "france_departments",
        defaultPlot : {
                attrs : {
                    fill: "#004a9b"
                    , opacity : 0.6
                }
                , attrsHover : {
                    opacity : 1
                }
                , text : {
                    attrs : {
                        fill : "#505444"
                    }
                    , attrsHover : {
                        fill : "#000"
                    }
                }
            }
            , defaultArea: {
                attrs : {
                    fill : "#313844"
                    , stroke: "#999"
                }
                , attrsHover : {
                    fill: "#a4e100"
                }
                , text : {
                    attrs : {
                        fill : "#505444"
                    }
                    , attrsHover : {
                        fill : "#000"
                    }
                }
            }
        },
        areas: {
            "department-59": {
                value: "2617939",
                href : url+"nord",
                tooltip: {content : "<span style=\"font-weight:bold;\">Nord (59)</span><br />Population : 2617939"}
            },
            "department-75": {
                value: "2268265",
                href : url+"paris",
                tooltip: {content : "<span style=\"font-weight:bold;\">Paris (75)</span><br />Population : 2268265"}
            },
            "department-13": {
                value: "2000550",
                href : url+"bouches-du-rhone",
                tooltip: {content : "<span style=\"font-weight:bold;\">Bouches-du-Rhône (13)</span><br />Population : 2000550"}
            },
            "department-69": {
                value: "1756069",
                href : url+"rhone",
                tooltip: {content : "<span style=\"font-weight:bold;\">Rhône (69)</span><br />Population : 1756069"}
            },
            "department-92": {
                value: "1590749",
                href : url+"hauts-de-seine",
                tooltip: {content : "<span style=\"font-weight:bold;\">Hauts-de-Seine (92)</span><br />Population : 1590749"}
            },
            "department-93": {
                value: "1534895",
                href : url+"seine-saint-denis",
                tooltip: {content : "<span style=\"font-weight:bold;\">Seine-Saint-Denis (93)</span><br />Population : 1534895"}
            },
            "department-62": {
                value: "1489209",
                href : url+"pas-de-calais",
                tooltip: {content : "<span style=\"font-weight:bold;\">Pas-de-Calais (62)</span><br />Population : 1489209"}
            },
            "department-33": {
                value: "1479277",
                href : url+"gironde",
                tooltip: {content : "<span style=\"font-weight:bold;\">Gironde (33)</span><br />Population : 1479277"}
            },
            "department-78": {
                value: "1435448",
                href : url+"yvelines",
                tooltip: {content : "<span style=\"font-weight:bold;\">Yvelines (78)</span><br />Population : 1435448"}
            },
            "department-77": {
                value: "1347008",
                href : url+"seine-et-marne",
                tooltip: {content : "<span style=\"font-weight:bold;\">Seine-et-Marne (77)</span><br />Population : 1347008"}
            },
            "department-94": {
                value: "1340868",
                href : url+'val-de-marne',
                tooltip: {content : "<span style=\"font-weight:bold;\">Val-de-Marne (94)</span><br />Population : 1340868"}
            },
            "department-44": {
                value: "1317685",
                href : url+"lore-atlantique",
                tooltip: {content : "<span style=\"font-weight:bold;\">Loire-Atlantique (44)</span><br />Population : 1317685"}
            },
            "department-76": {
                value: "1275952",
                href : url+"seine-maritime",
                tooltip: {content : "<span style=\"font-weight:bold;\">Seine-Maritime (76)</span><br />Population : 1275952"}
            },
            "department-31": {
                value: "1268370",
                href : url+"haute-garonne",
                tooltip: {content : "<span style=\"font-weight:bold;\">Haute-Garonne (31)</span><br />Population : 1268370"}
            },
            "department-38": {
                value: "1233759",
                href : url+"isere",
                tooltip: {content : "<span style=\"font-weight:bold;\">Isère (38)</span><br />Population : 1233759"}
            },
            "department-91": {
                value: "1233645",
                href : url+"essonne",
                tooltip: {content : "<span style=\"font-weight:bold;\">Essonne (91)</span><br />Population : 1233645"}
            },
            "department-95": {
                value: "1187836",
                href : url+"val-d-oise",
                tooltip: {content : "<span style=\"font-weight:bold;\">Val-d'Oise (95)</span><br />Population : 1187836"}
            },
            "department-67": {
                value: "1115226",
                href : url+"bas-rhin",
                tooltip: {content : "<span style=\"font-weight:bold;\">Bas-Rhin (67)</span><br />Population : 1115226"}
            },
            "department-06": {
                value: "1094579",
                href : url+"alpes-maritime",
                tooltip: {content : "<span style=\"font-weight:bold;\">Alpes-Maritimes (06)</span><br />Population : 1094579"}
            },
            "department-57": {
                value: "1066667",
                href : url+"moselle",
                tooltip: {content : "<span style=\"font-weight:bold;\">Moselle (57)</span><br />Population : 1066667"}
            },
            "department-34": {
                value: "1062617",
                href : url+"herault",
                tooltip: {content : "<span style=\"font-weight:bold;\">Hérault (34)</span><br />Population : 1062617"}
            },
            "department-83": {
                value: "1026222",
                href : url+"var",
                tooltip: {content : "<span style=\"font-weight:bold;\">Var (83)</span><br />Population : 1026222"}
            },
            "department-35": {
                value: "1015470",
                href : url+"ille-et-vilaine",
                tooltip: {content : "<span style=\"font-weight:bold;\">Ille-et-Vilaine (35)</span><br />Population : 1015470"}
            },
            "department-29": {
                value: "929286",
                href : url+"finistere",
                tooltip: {content : "<span style=\"font-weight:bold;\">Finistère (29)</span><br />Population : 929286"}
            },
            "department-974": {
                value: "829903",
                href : url+"la-reunion",
                tooltip: {content : "<span style=\"font-weight:bold;\">La Réunion (974)</span><br />Population : 829903"}
            },
            "department-60": {
                value: "823668",
                href : url+"oise",
                tooltip: {content : "<span style=\"font-weight:bold;\">Oise (60)</span><br />Population : 823668"}
            },
            "department-49": {
                value: "808298",
                href : url+"maine-et-loire",
                tooltip: {content : "<span style=\"font-weight:bold;\">Maine-et-Loire (49)</span><br />Population : 808298"}
            },
            "department-42": {
                value: "766729",
                href : url+"loire",
                tooltip: {content : "<span style=\"font-weight:bold;\">Loire (42)</span><br />Population : 766729"}
            },
            "department-68": {
                value: "765634",
                href : url+"haut-rhin",
                tooltip: {content : "<span style=\"font-weight:bold;\">Haut-Rhin (68)</span><br />Population : 765634"}
            },
            "department-74": {
                value: "760979",
                href : url+"haute-savoie",
                tooltip: {content : "<span style=\"font-weight:bold;\">Haute-Savoie (74)</span><br />Population : 760979"}
            },
            "department-54": {
                value: "746502",
                href : url+"meurthe-et-moselle",
                tooltip: {content : "<span style=\"font-weight:bold;\">Meurthe-et-Moselle (54)</span><br />Population : 746502"}
            },
            "department-56": {
                value: "744663",
                href : url+"morbihan",
                tooltip: {content : "<span style=\"font-weight:bold;\">Morbihan (56)</span><br />Population : 744663"}
            },
            "department-30": {
                value: "726285",
                href : url+"gard",
                tooltip: {content : "<span style=\"font-weight:bold;\">Gard (30)</span><br />Population : 726285"}
            },
            "department-14": {
                value: "699561",
                href : url+"calvados",
                tooltip: {content : "<span style=\"font-weight:bold;\">Calvados (14)</span><br />Population : 699561"}
            },
            "department-45": {
                value: "674913",
                href : url+"loiret",
                tooltip: {content : "<span style=\"font-weight:bold;\">Loiret (45)</span><br />Population : 674913"}
            },
            "department-64": {
                value: "674908",
                href : url+"pyrenees-atlantiques",
                tooltip: {content : "<span style=\"font-weight:bold;\">Pyrénées-Atlantiques (64)</span><br />Population : 674908"}
            },
            "department-85": {
                value: "654096",
                href : url+"vendee",
                tooltip: {content : "<span style=\"font-weight:bold;\">Vendée (85)</span><br />Population : 654096"}
            },
            "department-63": {
                value: "649643",
                href : url+"puy-de-dome",
                tooltip: {content : "<span style=\"font-weight:bold;\">Puy-de-Dôme (63)</span><br />Population : 649643"}
            },
            "department-17": {
                value: "640803",
                href : url+"charente-maritime",
                tooltip: {content : "<span style=\"font-weight:bold;\">Charente-Maritime (17)</span><br />Population : 640803"}
            },
            "department-01": {
                value: "614331",
                href : url+"ain",
                tooltip: {content : "<span style=\"font-weight:bold;\">Ain (01)</span><br />Population : 614331"}
            },
            "department-22": {
                value: "612383",
                href : url+"cotes-d-armor",
                tooltip: {content : "<span style=\"font-weight:bold;\">Côtes-d'Armor (22)</span><br />Population : 612383"}
            },
            "department-37": {
                value: "605819",
                href : url+"indre-et-loire",
                tooltip: {content : "<span style=\"font-weight:bold;\">Indre-et-Loire (37)</span><br />Population : 605819"}
            },
            "department-27": {
                value: "603194",
                href : url+"eure",
                tooltip: {content : "<span style=\"font-weight:bold;\">Eure (27)</span><br />Population : 603194"}
            },
            "department-80": {
                value: "583388",
                href : url+"somme",
                tooltip: {content : "<span style=\"font-weight:bold;\">Somme (80)</span><br />Population : 583388"}
            },
            "department-51": {
                value: "579533",
                href : url+"marne",
                tooltip: {content : "<span style=\"font-weight:bold;\">Marne (51)</span><br />Population : 579533"}
            },
            "department-72": {
                value: "579497",
                href : url+"sarthe",
                tooltip: {content : "<span style=\"font-weight:bold;\">Sarthe (72)</span><br />Population : 579497"}
            },
            "department-71": {
                value: "574874",
                href : url+"saone-et-loire",
                tooltip: {content : "<span style=\"font-weight:bold;\">Saône-et-Loire (71)</span><br />Population : 574874"}
            },
            "department-84": {
                value: "555240",
                href : url+"vaucluse",
                tooltip: {content : "<span style=\"font-weight:bold;\">Vaucluse (84)</span><br />Population : 555240"}
            },
            "department-02": {
                value: "555094",
                href : url+"aisne",
                tooltip: {content : "<span style=\"font-weight:bold;\">Aisne (02)</span><br />Population : 555094"}
            },
            "department-25": {
                value: "542509",
                href : url+"doubs",
                tooltip: {content : "<span style=\"font-weight:bold;\">Doubs (25)</span><br />Population : 542509"}
            },
            "department-21": {
                value: "538505",
                href : url+"cote-d-or",
                tooltip: {content : "<span style=\"font-weight:bold;\">Côte-d'Or (21)</span><br />Population : 538505"}
            },
            "department-50": {
                value: "517121",
                href : url+"manche",
                tooltip: {content : "<span style=\"font-weight:bold;\">Manche (50)</span><br />Population : 517121"}
            },
            "department-26": {
                value: "499313",
                href : url+"drome",
                tooltip: {content : "<span style=\"font-weight:bold;\">Drôme (26)</span><br />Population : 499313"}
            },
            "department-66": {
                value: "457238",
                href : url+"pyrenees-orientales",
                tooltip: {content : "<span style=\"font-weight:bold;\">Pyrénées-Orientales (66)</span><br />Population : 457238"}
            },
            "department-28": {
                value: "440291",
                href : url+"eure-et-loir",
                tooltip: {content : "<span style=\"font-weight:bold;\">Eure-et-Loir (28)</span><br />Population : 440291"}
            },
            "department-86": {
                value: "438566",
                href : url+"vienne",
                tooltip: {content : "<span style=\"font-weight:bold;\">Vienne (86)</span><br />Population : 438566"}
            },
            "department-73": {
                value: "428751",
                href : url+"savoie",
                tooltip: {content : "<span style=\"font-weight:bold;\">Savoie (73)</span><br />Population : 428751"}
            },
            "department-24": {
                value: "426607",
                href : url+"http://snoozit/app_dev.php/advert/departement/dordogne",
                tooltip: {content : "<span style=\"font-weight:bold;\">Dordogne (24)</span><br />Population : 426607"}
            },
            "department-971": {
                value: "409905",
                href : url+"guadeloupe",
                tooltip: {content : "<span style=\"font-weight:bold;\">Guadeloupe (971)</span><br />Population : 409905"}
            },
            "department-972": {
                value: "400535",
                href : url+"martinique",
                tooltip: {content : "<span style=\"font-weight:bold;\">Martinique (972)</span><br />Population : 400535"}
            },
            "department-40": {
                value: "397766",
                href : url+"landes",
                tooltip: {content : "<span style=\"font-weight:bold;\">Landes (40)</span><br />Population : 397766"}
            },
            "department-88": {
                value: "392846",
                href : url+"vosges",
                tooltip: {content : "<span style=\"font-weight:bold;\">Vosges (88)</span><br />Population : 392846"}
            },
            "department-81": {
                value: "387099",
                href : url+"http://snoozit/app_dev.php/advert/departement/",
                tooltip: {content : "<span style=\"font-weight:bold;\">Tarn (81)</span><br />Population : 387099"}
            },
            "department-87": {
                value: "384781",
                href : url+"haute-vienne",
                tooltip: {content : "<span style=\"font-weight:bold;\">Haute-Vienne (87)</span><br />Population : 384781"}
            },
            "department-79": {
                value: "380569",
                href : url+"deux-sevres",
                tooltip: {content : "<span style=\"font-weight:bold;\">Deux-Sèvres (79)</span><br />Population : 380569"}
            },
            "department-11": {
                value: "365854",
                href : url+"aude",
                tooltip: {content : "<span style=\"font-weight:bold;\">Aude (11)</span><br />Population : 365854"}
            },
            "department-16": {
                value: "364429",
                href : url+"charente",
                tooltip: {content : "<span style=\"font-weight:bold;\">Charente (16)</span><br />Population : 364429"}
            },
            "department-89": {
                value: "353366",
                href : url+"yonne",
                tooltip: {content : "<span style=\"font-weight:bold;\">Yonne (89)</span><br />Population : 353366"}
            },
            "department-03": {
                value: "353124",
                href : url+"allier",
                tooltip: {content : "<span style=\"font-weight:bold;\">Allier (03)</span><br />Population : 353124"}
            },
            "department-47": {
                value: "342500",
                href : url+"lot-et-garonne",
                tooltip: {content : "<span style=\"font-weight:bold;\">Lot-et-Garonne (47)</span><br />Population : 342500"}
            },
            "department-41": {
                value: "340729",
                href : url+"loir-et-cher",
                tooltip: {content : "<span style=\"font-weight:bold;\">Loir-et-Cher (41)</span><br />Population : 340729"}
            },
            "department-07": {
                value: "324885",
                href : url+"ardeche",
                tooltip: {content : "<span style=\"font-weight:bold;\">Ardèche (07)</span><br />Population : 324885"}
            },
            "department-18": {
                value: "319600",
                href : url+"cher",
                tooltip: {content : "<span style=\"font-weight:bold;\">Cher (18)</span><br />Population : 319600"}
            },
            "department-53": {
                value: "317006",
                href : url+"mayenne",
                tooltip: {content : "<span style=\"font-weight:bold;\">Mayenne (53)</span><br />Population : 317006"}
            },
            "department-10": {
                value: "311720",
                href : url+'aube',
                tooltip: {content : "<span style=\"font-weight:bold;\">Aube (10)</span><br />Population : 311720"}
            },
            "department-61": {
                value: "301421",
                href : url+"orne",
                tooltip: {content : "<span style=\"font-weight:bold;\">Orne (61)</span><br />Population : 301421"}
            },
            "department-08": {
                value: "291678",
                href : url+"ardennes",
                tooltip: {content : "<span style=\"font-weight:bold;\">Ardennes (08)</span><br />Population : 291678"}
            },
            "department-12": {
                value: "288364",
                href : url+"aveyron",
                tooltip: {content : "<span style=\"font-weight:bold;\">Aveyron (12)</span><br />Population : 288364"}
            },
            "department-39": {
                value: "271973",
                href : url+"jura",
                tooltip: {content : "<span style=\"font-weight:bold;\">Jura (39)</span><br />Population : 271973"}
            },
            "department-19": {
                value: "252235",
                href : url+"correze",
                tooltip: {content : "<span style=\"font-weight:bold;\">Corrèze (19)</span><br />Population : 252235"}
            },
            "department-82": {
                value: "248227",
                href : url+"tarn-et-garonne",
                tooltip: {content : "<span style=\"font-weight:bold;\">Tarn-et-Garonne (82)</span><br />Population : 248227"}
            },
            "department-70": {
                value: "247311",
                href : url+"haute-saone",
                tooltip: {content : "<span style=\"font-weight:bold;\">Haute-Saône (70)</span><br />Population : 247311"}
            },
            "department-36": {
                value: "238261",
                href : url+"indre",
                tooltip: {content : "<span style=\"font-weight:bold;\">Indre (36)</span><br />Population : 238261"}
            },
            "department-65": {
                value: "237945",
                href : url+"hautes-pyrenees",
                tooltip: {content : "<span style=\"font-weight:bold;\">Hautes-Pyrénées (65)</span><br />Population : 237945"}
            },
            "department-43": {
                value: "231877",
                href : url+"haute-loire",
                tooltip: {content : "<span style=\"font-weight:bold;\">Haute-Loire (43)</span><br />Population : 231877"}
            },
            "department-973": {
                value: "231167",
                href : url+"guyane",
                tooltip: {content : "<span style=\"font-weight:bold;\">Guyane (973)</span><br />Population : 231167"}
            },
            "department-58": {
                value: "226997",
                href : url+"nievre",
                tooltip: {content : "<span style=\"font-weight:bold;\">Nièvre (58)</span><br />Population : 226997"}
            },
            "department-55": {
                value: "200509",
                href : url+"meuse",
                tooltip: {content : "<span style=\"font-weight:bold;\">Meuse (55)</span><br />Population : 200509"}
            },
            "department-32": {
                value: "195489",
                href : url+"gers",
                tooltip: {content : "<span style=\"font-weight:bold;\">Gers (32)</span><br />Population : 195489"}
            },
            "department-52": {
                value: "191004",
                href : url+"haute-marne",
                tooltip: {content : "<span style=\"font-weight:bold;\">Haute-Marne (52)</span><br />Population : 191004"}
            },
            "department-46": {
                value: "181232",
                href : url+"lot",
                tooltip: {content : "<span style=\"font-weight:bold;\">Lot (46)</span><br />Population : 181232"}
            },
            "department-2B": {
                value: "168869",
                href : url+"haute-corse",
                tooltip: {content : "<span style=\"font-weight:bold;\">Haute-Corse (2B)</span><br />Population : 168869"}
            },
            "department-04": {
                value: "165155",
                href : url+"alpes-de-haute-provence",
                tooltip: {content : "<span style=\"font-weight:bold;\">Alpes-de-Haute-Provence (04)</span><br />Population : 165155"}
            },
            "department-09": {
                value: "157582",
                href : url+"ariege",
                tooltip: {content : "<span style=\"font-weight:bold;\">Ariège (09)</span><br />Population : 157582"}
            },
            "department-15": {
                value: "154135",
                href : url+"cantal",
                tooltip: {content : "<span style=\"font-weight:bold;\">Cantal (15)</span><br />Population : 154135"}
            },
            "department-90": {
                value: "146475",
                href : url+"territoire-de-belfort",
                tooltip: {content : "<span style=\"font-weight:bold;\">Territoire de Belfort (90)</span><br />Population : 146475"}
            },
            "department-2A": {
                value: "145998",
                href : url+"corse-du-sud",
                tooltip: {content : "<span style=\"font-weight:bold;\">Corse-du-Sud (2A)</span><br />Population : 145998"}
            },
            "department-05": {
                value: "142312",
                href : url+"hautes-alpes",
                tooltip: {content : "<span style=\"font-weight:bold;\">Hautes-Alpes (05)</span><br />Population : 142312"}
            },
            "department-23": {
                value: "127919",
                href : url+"creuse",
                tooltip: {content : "<span style=\"font-weight:bold;\">Creuse (23)</span><br />Population : 127919"}
            },
            "department-48": {
                value: "81281",
                href : url+"lozere",
                tooltip: {content : "<span style=\"font-weight:bold;\">Lozère (48)</span><br />Population : 81281"}
            }
        }
    });
});