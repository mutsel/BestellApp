let allDishes = [
    {
        "category": "Vorspeisen",
        "img": "./assets/img/appetizer.jpg",
        "dishes": [
            {
                "name": "Bruschetta al Pomodoro",
                "description": "Geröstetes Ciabatta-Brot, belegt mit einer frischen Mischung aus gewürfelten Tomaten, veganem Feta, Basilikum, Knoblauch und Olivenöl.",
                "price": 5.50
            },
            {
                "name": "Avocado-Tatar mit Limette und Koriander",
                "description": "Frische Avocado, mit Limettensaft sowie Koriander abgeschmeckt. Dazu knackiger Salat und einer Garnierung aus gerösteten Pinienkernen.",
                "price": 6.00
            },
            {
                "name": "Gefüllte Champignons mit Kräutern und Walnüssen",
                "description": "Champignonköpfe, gefüllt mit einer aromatischen Mischung aus frischen Kräutern, Walnüssen und veganem Frischkäse.",
                "price": 6.50
            },
            {
                "name": "Süßkartoffel-Tatar auf Rucola",
                "description": "Zarte Würfel von gerösteter Süßkartoffel kombiniert mit frischem Rucola und Kräutern sowiw einer leichten Tahini-Zitronen-Vinaigrette.",
                "price": 6.50
            }
        ],
    },
    {
        "category": "Hauptspeisen",
        "img": "./assets/img/main_course.png",
        "dishes": [
            {
                "name": "Wok-Gemüsepfanne mit Tofu",
                "description": "Knackige Saisongemüse, gebraten mit Tofu und würziger Sojasauce. Abgerundet mit geröstetem Sesam und einem Schuss Limettensaft.",
                "price": 10.50
            },
            {
                "name": "Vegane Lasagne mit Linsen-Bolognese",
                "description": "Hausgemachte Lasagne, gefüllt mit einer herzhaften Linsen-Bolognese und köstlicher Béchamelsoße.",
                "price": 11.50
            },
            {
                "name": "Kichererbsen-Curry mit Kokosmilch",
                "description": "Cremiges Curry aus Kichererbsen und frischem Gemüse mit einer reichhaltigen Kokosmilch-Soße und einem Hauch Chili. Serviert mit Duftreis.",
                "price": 9.50
            },
            {
                "name": "Gebackene Auberginen mit Tahini-Sauce",
                "description": "Gebackene Auberginenhälften, die mit einer cremigen Tahini-Sauce überzogen und mit Granatapfelkernen sowie frischen Kräutern garniert werden.",
                "price": 10.00
            },
            {
                "name": "Quinoa-Bowl mit gegrilltem Gemüse",
                "description": "Reichhaltige Quinoa-Bowl, serviert mit einer Vielzahl von gegrilltem Saisongemüse. Verfeinert mit einem Limetten-Dressing und Nüssen.",
                "price": 9.50
            }
        ]
    },
    {
        "category": "Nachtische",
        "img": "./assets/img/dessert.jpg",
        "dishes": [
            {
                "name": "Beeren-Creme mit Vanille",
                "description": "Frische, süße Mischung aus Waldbeeren, kombiniert mit einer samtigen, veganen Vanillecreme.",
                "price": 5.00
            },
            {
                "name": "Schokoladenmousse",
                "description": "Cremige, vegane Mousse aus Seidentofu und zartem Kakao, leicht gesüßt mit Agavensirup und abgerundet mit einer Prise Meersalz.",
                "price": 5.50
            },
            {
                "name": "Bananenbrot mit Walnüssen und Ahornsirup",
                "description": "Saftiges Bananenbrot, frisch gebacken und verfeinert mit Walnüssen und einem Hauch von Ahornsirup.",
                "price": 4.50
            }
        ]
    },
    {
        "category": "Getränke",
        "img": "./assets/img/drinks.jpg",
        "dishes": [
            {
                "name": "Eistee",
                "description": "Erfrischender, hausgemachter Eistee aus grünen Teeblättern und Orangen, aromatisiert mit Zitronen- und Minzblättern.",
                "price": 2.80
            },
            {
                "name": "Zitronen-Ingwer-Limonade",
                "description": "Spritzige Limonade aus frisch gepresstem Zitronensaft und scharfem Ingwer, gesüßt mit Agavensirup.",
                "price": 3.20
            },
            {
                "name": "Cola",
                "description": "Klassisches Erfrischungsgetränk – sprudelnd und gekühlt. Mit Eiswürfeln und Papier-Strohhalm.",
                "price": 2.50
            },
            {
                "name": "Orangensaft",
                "description": "100 % frisch-gepresster Orangensaft, direkt aus saftigen, sonnengereiften Orangen gepresst.",
                "price": 3.50
            }
            
        ]
    }
]

let shoppingCart = [];