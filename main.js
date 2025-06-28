// Main JavaScript file for Cronoshop
let products = [];
let currentFilter = 'all';
let displayedProducts = [];
let currentPage = 0;
const productsPerPage = 12;

// All original products data
const originalProducts = [
    {
        id: "1",
        nome: "Samsung Galaxy S25 Ultra",
        prezzo: "1.199€",
        originalPrice: "1.399€",
        discount: "-14%",
        img: "https://m.media-amazon.com/images/I/61hiFJPpY9L._AC_SL1500_.jpg",
        descrizione: "Il nuovo flagship Samsung con fotocamera da 200MP, S Pen integrata e display Dynamic AMOLED 2X da 6.8 pollici.",
        category: "smartphone",
        link: "https://www.amazon.it/dp/B0CHWV5HTM?tag=tony6401-21"
    },
    {
        id: "2",
        nome: "iPhone 15 Pro Max",
        prezzo: "1.089€",
        originalPrice: "1.289€",
        discount: "-16%",
        img: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_SL1500_.jpg",
        descrizione: "iPhone 15 Pro Max con chip A17 Pro, fotocamera da 48MP e design in titanio. Disponibile in vari colori.",
        category: "smartphone",
        link: "https://www.amazon.it/dp/B0CHX1W1XY?tag=tony6401-21"
    },
    {
        id: "3",
        nome: "Amazon Fire TV Stick 4K Max",
        prezzo: "28,99€",
        originalPrice: "54,99€",
        discount: "-47%",
        img: "https://m.media-amazon.com/images/I/51B45gaTgjL._AC_SL1000_.jpg",
        descrizione: "Streaming device 4K con Alexa Voice Remote, supporto Wi-Fi 6 e prestazioni ultra-veloci.",
        category: "tech",
        link: "https://amzn.to/4jhgwHr?tag=tony6401-21"
    },
    {
        id: "4",
        nome: "Calvin Klein T-Shirt Uomo",
        prezzo: "18€",
        originalPrice: "35€",
        discount: "-49%",
        img: "https://m.media-amazon.com/images/I/71BHou6YJKL._AC_SY879_.jpg",
        descrizione: "T-shirt in cotone 100% con logo Calvin Klein, vestibilità regular e disponibile in vari colori.",
        category: "fashion",
        link: "https://www.amazon.it/dp/B07QMZXP4K?tag=tony6401-21"
    },
    {
        id: "5",
        nome: "Vitamina D3 + K2",
        prezzo: "14,95€",
        originalPrice: "24,95€",
        discount: "-40%",
        img: "https://m.media-amazon.com/images/I/61XvMqDAOYL._AC_SL1500_.jpg",
        descrizione: "Integratore di Vitamina D3 2000 UI + K2 MK7, 365 compresse per un anno di fornitura.",
        category: "salute",
        link: "https://www.amazon.it/dp/B07QMZXP4K?tag=tony6401-21"
    },
    {
        id: "6",
        nome: "Instant Vortex Plus Friggitrice",
        prezzo: "89,99€",
        originalPrice: "149,99€",
        discount: "-40%",
        img: "https://m.media-amazon.com/images/I/71XvMqDAOYL._AC_SL1500_.jpg",
        descrizione: "Friggitrice ad aria da 4L con 6 programmi di cottura, display digitale e ricettario incluso.",
        category: "casa",
        link: "https://www.amazon.it/dp/B08L5TNJHP?tag=tony6401-21"
    },
    {
        id: "7",
        nome: "Apple AirPods Pro 2",
        prezzo: "189€",
        originalPrice: "279€",
        discount: "-32%",
        img: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SL1500_.jpg",
        descrizione: "AirPods Pro di 2ª generazione con cancellazione attiva del rumore e custodia di ricarica MagSafe.",
        category: "tech",
        link: "https://www.amazon.it/dp/B0BDHWDR12?tag=tony6401-21"
    },
    {
        id: "8",
        nome: "Nike Air Force 1",
        prezzo: "79€",
        originalPrice: "110€",
        discount: "-28%",
        img: "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
        descrizione: "Sneakers iconiche Nike Air Force 1 in pelle bianca, comfort e stile senza tempo.",
        category: "fashion",
        link: "https://www.amazon.it/dp/B077XQZQJX?tag=tony6401-21"
    },
    {
        id: "9",
        nome: "Dyson V8 Absolute",
        prezzo: "299€",
        originalPrice: "449€",
        discount: "-33%",
        img: "https://m.media-amazon.com/images/I/61phl7urNGL._AC_SL1500_.jpg",
        descrizione: "Aspirapolvere senza filo Dyson V8 con tecnologia ciclonica e fino a 40 minuti di autonomia.",
        category: "casa",
        link: "https://www.amazon.it/dp/B01IENFJ14?tag=tony6401-21"
    },
    {
        id: "10",
        nome: "Xiaomi Redmi Note 13",
        prezzo: "179€",
        originalPrice: "249€",
        discount: "-28%",
        img: "https://m.media-amazon.com/images/I/71KxlQnWP8L._AC_SL1500_.jpg",
        descrizione: "Smartphone Xiaomi con display AMOLED 6.67\", fotocamera 108MP e batteria 5000mAh.",
        category: "smartphone",
        link: "https://www.amazon.it/dp/B0CQX8N7VF?tag=tony6401-21"
    },
    {
        id: "11",
        nome: "Adidas Ultraboost 22",
        prezzo: "89€",
        originalPrice: "180€",
        discount: "-51%",
        img: "https://m.media-amazon.com/images/I/71Q4YzKzQjL._AC_UY695_.jpg",
        descrizione: "Scarpe da running Adidas con tecnologia Boost per massimo comfort e prestazioni.",
        category: "fashion",
        link: "https://www.amazon.it/dp/B09TQJXM4R?tag=tony6401-21"
    },
    {
        id: "12",
        nome: "De'Longhi Magnifica S",
        prezzo: "249€",
        originalPrice: "399€",
        discount: "-38%",
        img: "https://m.media-amazon.com/images/I/81J+KJ5PJXL._AC_SL1500_.jpg",
        descrizione: "Macchina da caffè automatica con macinacaffè integrato e sistema cappuccinatore.",
        category: "casa",
        link: "https://www.amazon.it/dp/B00400OMU0?tag=tony6401-21"
    },
    {
        id: "13",
        nome: "Sony WH-1000XM5",
        prezzo: "299€",
        originalPrice: "419€",
        discount: "-29%",
        img: "https://m.media-amazon.com/images/I/61+btTqPTCL._AC_SL1500_.jpg",
        descrizione: "Cuffie wireless Sony con cancellazione del rumore leader del settore e 30h di autonomia.",
        category: "tech",
        link: "https://www.amazon.it/dp/B09XS7JWHH?tag=tony6401-21"
    },
    {
        id: "14",
        nome: "Levi's 501 Original Jeans",
        prezzo: "59€",
        originalPrice: "95€",
        discount: "-38%",
        img: "https://m.media-amazon.com/images/I/71YnKcHPzaL._AC_UY679_.jpg",
        descrizione: "Jeans Levi's 501 Original Fit, il classico intramontabile in denim 100% cotone.",
        category: "fashion",
        link: "https://www.amazon.it/dp/B0000DIWMM?tag=tony6401-21"
    },
    {
        id: "15",
        nome: "Omega 3 Fish Oil",
        prezzo: "19,99€",
        originalPrice: "34,99€",
        discount: "-43%",
        img: "https://m.media-amazon.com/images/I/71nKWzKzQjL._AC_SL1500_.jpg",
        descrizione: "Integratore Omega 3 da olio di pesce, 1000mg per capsula, 365 softgel per un anno.",
        category: "salute",
        link: "https://www.amazon.it/dp/B07Q2Q4Q4Q?tag=tony6401-21"
    },
    {
        id: "16",
        nome: "iPad Air 5ª Gen",
        prezzo: "549€",
        originalPrice: "699€",
        discount: "-21%",
        img: "https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_SL1500_.jpg",
        descrizione: "iPad Air con chip M1, display Liquid Retina 10.9\" e compatibilità Apple Pencil.",
        category: "tech",
        link: "https://www.amazon.it/dp/B09V3HN1KC?tag=tony6401-21"
    },
    {
        id: "17",
        nome: "The North Face Giacca",
        prezzo: "129€",
        originalPrice: "199€",
        discount: "-35%",
        img: "https://m.media-amazon.com/images/I/71pKzQnWP8L._AC_UY679_.jpg",
        descrizione: "Giacca The North Face impermeabile e traspirante, perfetta per outdoor e città.",
        category: "fashion",
        link: "https://www.amazon.it/dp/B08XQZQJXM?tag=tony6401-21"
    },
    {
        id: "18",
        nome: "Roomba i7+",
        prezzo: "499€",
        originalPrice: "799€",
        discount: "-38%",
        img: "https://m.media-amazon.com/images/I/71nKWzKzQjL._AC_SL1500_.jpg",
        descrizione: "Robot aspirapolvere iRobot Roomba i7+ con svuotamento automatico e mappatura intelligente.",
        category: "casa",
        link: "https://www.amazon.it/dp/B07GNPDX7T?tag=tony6401-21"
    },
    {
        id: "19",
        nome: "OnePlus 12",
        prezzo: "699€",
        originalPrice: "899€",
        discount: "-22%",
        img: "https://m.media-amazon.com/images/I/71Q4YzKzQjL._AC_SL1500_.jpg",
        descrizione: "OnePlus 12 con Snapdragon 8 Gen 3, fotocamera Hasselblad e ricarica rapida 100W.",
        category: "smartphone",
        link: "https://www.amazon.it/dp/B0CQX8N7VF?tag=tony6401-21"
    },
    {
        id: "20",
        nome: "Magnesio + Vitamina B6",
        prezzo: "12,99€",
        originalPrice: "22,99€",
        discount: "-43%",
        img: "https://m.media-amazon.com/images/I/61phl7urNGL._AC_SL1500_.jpg",
        descrizione: "Integratore di Magnesio con Vitamina B6, 180 compresse per supporto muscolare e nervoso.",
        category: "salute",
        link: "https://www.amazon.it/dp/B07Q2Q4Q4Q?tag=tony6401-21"
    },
    {
        id: "21",
        nome: "MacBook Air M2",
        prezzo: "999€",
        originalPrice: "1.249€",
        discount: "-20%",
        img: "https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SL1500_.jpg",
        descrizione: "MacBook Air 13\" con chip M2, 8GB RAM, 256GB SSD e display Liquid Retina.",
        category: "tech",
        link: "https://www.amazon.it/dp/B0B3C2R8MP?tag=tony6401-21"
    },
    {
        id: "22",
        nome: "Zara Blazer Donna",
        prezzo: "39€",
        originalPrice: "69€",
        discount: "-43%",
        img: "https://m.media-amazon.com/images/I/71BHou6YJKL._AC_UY679_.jpg",
        descrizione: "Blazer elegante da donna, perfetto per ufficio e occasioni formali, taglio slim fit.",
        category: "fashion",
        link: "https://www.amazon.it/dp/B08XQZQJXM?tag=tony6401-21"
    },
    {
        id: "23",
        nome: "Philips Airfryer XXL",
        prezzo: "179€",
        originalPrice: "299€",
        discount: "-40%",
        img: "https://m.media-amazon.com/images/I/81J+KJ5PJXL._AC_SL1500_.jpg",
        descrizione: "Friggitrice ad aria Philips XXL da 7.3L, perfetta per famiglie numerose, cottura sana.",
        category: "casa",
        link: "https://www.amazon.it/dp/B08L5TNJHP?tag=tony6401-21"
    },
    {
        id: "24",
        nome: "Google Pixel 8",
        prezzo: "549€",
        originalPrice: "699€",
        discount: "-21%",
        img: "https://m.media-amazon.com/images/I/71KxlQnWP8L._AC_SL1500_.jpg",
        descrizione: "Google Pixel 8 con chip Tensor G3, fotocamera AI avanzata e 7 anni di aggiornamenti.",
        category: "smartphone",
        link: "https://www.amazon.it/dp/B0CQX8N7VF?tag=tony6401-21"
    },
    {
        id: "25",
        nome: "Probiotici 50 Miliardi",
        prezzo: "24,99€",
        originalPrice: "39,99€",
        discount: "-38%",
        img: "https://m.media-amazon.com/images/I/71nKWzKzQjL._AC_SL1500_.jpg",
        descrizione: "Probiotici ad alta potenza con 50 miliardi di CFU, 60 capsule per la salute intestinale.",
        category: "salute",
        link: "https://www.amazon.it/dp/B07Q2Q4Q4Q?tag=tony6401-21"
    },
    {
        id: "26",
        nome: "Nintendo Switch OLED",
        prezzo: "299€",
        originalPrice: "349€",
        discount: "-14%",
        img: "https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_SL1500_.jpg",
        descrizione: "Console Nintendo Switch OLED con schermo da 7\" e colori vivaci, perfetta per gaming.",
        category: "tech",
        link: "https://www.amazon.it/dp/B098RKWHHZ?tag=tony6401-21"
    },
    {
        id: "27",
        nome: "H&M Maglione Uomo",
        prezzo: "19€",
        originalPrice: "34€",
        discount: "-44%",
        img: "https://m.media-amazon.com/images/I/71pKzQnWP8L._AC_UY679_.jpg",
        descrizione: "Maglione in maglia fine da uomo, morbido e confortevole, disponibile in vari colori.",
        category: "fashion",
        link: "https://www.amazon.it/dp/B08XQZQJXM?tag=tony6401-21"
    },
    {
        id: "28",
        nome: "Nespresso Vertuo Next",
        prezzo: "89€",
        originalPrice: "149€",
        discount: "-40%",
        img: "https://m.media-amazon.com/images/I/81J+KJ5PJXL._AC_SL1500_.jpg",
        descrizione: "Macchina da caffè Nespresso Vertuo Next, caffè e espresso con tecnologia Centrifusion.",
        category: "casa",
        link: "https://www.amazon.it/dp/B08L5TNJHP?tag=tony6401-21"
    },
    {
        id: "29",
        nome: "Samsung Galaxy Watch 6",
        prezzo: "229€",
        originalPrice: "319€",
        discount: "-28%",
        img: "https://m.media-amazon.com/images/I/71Q4YzKzQjL._AC_SL1500_.jpg",
        descrizione: "Smartwatch Samsung Galaxy Watch 6 con monitoraggio salute avanzato e GPS integrato.",
        category: "tech",
        link: "https://www.amazon.it/dp/B0CQX8N7VF?tag=tony6401-21"
    },
    {
        id: "30",
        nome: "Vitamina C 1000mg",
        prezzo: "9,99€",
        originalPrice: "19,99€",
        discount: "-50%",
        img: "https://m.media-amazon.com/images/I/61phl7urNGL._AC_SL1500_.jpg",
        descrizione: "Vitamina C 1000mg con bioflavonoidi, 180 compresse per supporto immunitario.",
        category: "salute",
        link: "https://www.amazon.it/dp/B07Q2Q4Q4Q?tag=tony6401-21"
    },
    {
        id: "31",
        nome: "Huawei P60 Pro",
        prezzo: "799€",
        originalPrice: "999€",
        discount: "-20%",
        img: "https://m.media-amazon.com/images/I/71KxlQnWP8L._AC_SL1500_.jpg",
        descrizione: "Huawei P60 Pro con fotocamera Leica, zoom 100x e design premium in vetro e metallo.",
        category: "smartphone",
        link: "https://www.amazon.it/dp/B0CQX8N7VF?tag=tony6401-21"
    },
    {
        id: "32",
        nome: "Uniqlo Felpa Uomo",
        prezzo: "29€",
        originalPrice: "49€",
        discount: "-41%",
        img: "https://m.media-amazon.com/images/I/71BHou6YJKL._AC_UY679_.jpg",
        descrizione: "Felpa con cappuccio Uniqlo in cotone morbido, comfort e stile casual per ogni giorno.",
        category: "fashion",
        link: "https://www.amazon.it/dp/B08XQZQJXM?tag=tony6401-21"
    },
    {
        id: "33",
        nome: "Shark Navigator",
        prezzo: "149€",
        originalPrice: "249€",
        discount: "-40%",
        img: "https://m.media-amazon.com/images/I/71nKWzKzQjL._AC_SL1500_.jpg",
        descrizione: "Aspirapolvere Shark Navigator con tecnologia anti-avvolgimento e filtro HEPA.",
        category: "casa",
        link: "https://www.amazon.it/dp/B08L5TNJHP?tag=tony6401-21"
    },
    {
        id: "34",
        nome: "JBL Charge 5",
        prezzo: "129€",
        originalPrice: "179€",
        discount: "-28%",
        img: "https://m.media-amazon.com/images/I/81J+KJ5PJXL._AC_SL1500_.jpg",
        descrizione: "Speaker Bluetooth JBL Charge 5 impermeabile con 20h di autonomia e powerbank integrato.",
        category: "tech",
        link: "https://www.amazon.it/dp/B08L5TNJHP?tag=tony6401-21"
    },
    {
        id: "35",
        nome: "Collagene Marino",
        prezzo: "29,99€",
        originalPrice: "49,99€",
        discount: "-40%",
        img: "https://m.media-amazon.com/images/I/61phl7urNGL._AC_SL1500_.jpg",
        descrizione: "Collagene marino idrolizzato con vitamina C, 90 capsule per pelle, capelli e unghie.",
        category: "salute",
        link: "https://www.amazon.it/dp/B07Q2Q4Q4Q?tag=tony6401-21"
    },
    {
        id: "36",
        nome: "Motorola Edge 40",
        prezzo: "399€",
        originalPrice: "549€",
        discount: "-27%",
        img: "https://m.media-amazon.com/images/I/71Q4YzKzQjL._AC_SL1500_.jpg",
        descrizione: "Motorola Edge 40 con display curvo 6.55\", fotocamera 50MP e ricarica wireless 15W.",
        category: "smartphone",
        link: "https://www.amazon.it/dp/B0CQX8N7VF?tag=tony6401-21"
    },
    {
        id: "37",
        nome: "Mango Cappotto Donna",
        prezzo: "79€",
        originalPrice: "129€",
        discount: "-39%",
        img: "https://m.media-amazon.com/images/I/71pKzQnWP8L._AC_UY679_.jpg",
        descrizione: "Cappotto elegante Mango da donna in lana, perfetto per l'inverno, taglio classico.",
        category: "fashion",
        link: "https://www.amazon.it/dp/B08XQZQJXM?tag=tony6401-21"
    },
    {
        id: "38",
        nome: "Bissell CrossWave",
        prezzo: "199€",
        originalPrice: "299€",
        discount: "-33%",
        img: "https://m.media-amazon.com/images/I/81J+KJ5PJXL._AC_SL1500_.jpg",
        descrizione: "Bissell CrossWave aspira e lava in un solo passaggio, perfetto per pavimenti duri.",
        category: "casa",
        link: "https://www.amazon.it/dp/B08L5TNJHP?tag=tony6401-21"
    },
    {
        id: "39",
        nome: "Bose QuietComfort 45",
        prezzo: "249€",
        originalPrice: "349€",
        discount: "-29%",
        img: "https://m.media-amazon.com/images/I/61+btTqPTCL._AC_SL1500_.jpg",
        descrizione: "Cuffie Bose QuietComfort 45 con cancellazione rumore e 24h di autonomia.",
        category: "tech",
        link: "https://www.amazon.it/dp/B09XS7JWHH?tag=tony6401-21"
    },
    {
        id: "40",
        nome: "Spirulina Bio",
        prezzo: "19,99€",
        originalPrice: "34,99€",
        discount: "-43%",
        img: "https://m.media-amazon.com/images/I/71nKWzKzQjL._AC_SL1500_.jpg",
        descrizione: "Spirulina biologica in compresse, superfood ricco di proteine e vitamine, 500 compresse.",
        category: "salute",
        link: "https://www.amazon.it/dp/B07Q2Q4Q4Q?tag=tony6401-21"
    },
    {
        id: "41",
        nome: "Realme GT 3",
        prezzo: "449€",
        originalPrice: "599€",
        discount: "-25%",
        img: "https://m.media-amazon.com/images/I/71KxlQnWP8L._AC_SL1500_.jpg",
        descrizione: "Realme GT 3 con Snapdragon 8+ Gen 1, ricarica 150W e display AMOLED 144Hz.",
        category: "smartphone",
        link: "https://www.amazon.it/dp/B0CQX8N7VF?tag=tony6401-21"
    },
    {
        id: "42",
        nome: "Pull & Bear Jeans",
        prezzo: "25€",
        originalPrice: "39€",
        discount: "-36%",
        img: "https://m.media-amazon.com/images/I/71YnKcHPzaL._AC_UY679_.jpg",
        descrizione: "Jeans Pull & Bear slim fit da uomo, denim stretch confortevole e moderno.",
        category: "fashion",
        link: "https://www.amazon.it/dp/B08XQZQJXM?tag=tony6401-21"
    },
    {
        id: "43",
        nome: "Black+Decker Dustbuster",
        prezzo: "59€",
        originalPrice: "89€",
        discount: "-34%",
        img: "https://m.media-amazon.com/images/I/71nKWzKzQjL._AC_SL1500_.jpg",
        descrizione: "Aspirapolvere portatile Black+Decker Dustbuster, perfetto per auto e piccole pulizie.",
        category: "casa",
        link: "https://www.amazon.it/dp/B08L5TNJHP?tag=tony6401-21"
    },
    {
        id: "44",
        nome: "Anker PowerCore 10000",
        prezzo: "19€",
        originalPrice: "29€",
        discount: "-34%",
        img: "https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_SL1500_.jpg",
        descrizione: "Power bank Anker PowerCore 10000mAh ultra-compatto con ricarica rapida PowerIQ.",
        category: "tech",
        link: "https://www.amazon.it/dp/B098RKWHHZ?tag=tony6401-21"
    },
    {
        id: "45",
        nome: "Curcuma + Piperina",
        prezzo: "16,99€",
        originalPrice: "29,99€",
        discount: "-43%",
        img: "https://m.media-amazon.com/images/I/61phl7urNGL._AC_SL1500_.jpg",
        descrizione: "Integratore Curcuma con Piperina e Zenzero, 90 capsule per proprietà antinfiammatorie.",
        category: "salute",
        link: "https://www.amazon.it/dp/B07Q2Q4Q4Q?tag=tony6401-21"
    },
    {
        id: "46",
        nome: "Nothing Phone 2",
        prezzo: "549€",
        originalPrice: "699€",
        discount: "-21%",
        img: "https://m.media-amazon.com/images/I/71Q4YzKzQjL._AC_SL1500_.jpg",
        descrizione: "Nothing Phone 2 con design trasparente unico, Snapdragon 8+ Gen 1 e Glyph Interface.",
        category: "smartphone",
        link: "https://www.amazon.it/dp/B0CQX8N7VF?tag=tony6401-21"
    },
    {
        id: "47",
        nome: "Stradivarius Vestito",
        prezzo: "19€",
        originalPrice: "35€",
        discount: "-46%",
        img: "https://m.media-amazon.com/images/I/71BHou6YJKL._AC_UY679_.jpg",
        descrizione: "Vestito Stradivarius da donna, perfetto per occasioni casual e serate fuori.",
        category: "fashion",
        link: "https://www.amazon.it/dp/B08XQZQJXM?tag=tony6401-21"
    },
    {
        id: "48",
        nome: "Tefal ActiFry",
        prezzo: "129€",
        originalPrice: "199€",
        discount: "-35%",
        img: "https://m.media-amazon.com/images/I/81J+KJ5PJXL._AC_SL1500_.jpg",
        descrizione: "Friggitrice Tefal ActiFry con tecnologia brevettata, cottura sana con poco olio.",
        category: "casa",
        link: "https://www.amazon.it/dp/B08L5TNJHP?tag=tony6401-21"
    },
    {
        id: "49",
        nome: "Logitech MX Master 3",
        prezzo: "79€",
        originalPrice: "109€",
        discount: "-28%",
        img: "https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_SL1500_.jpg",
        descrizione: "Mouse wireless Logitech MX Master 3 con scorrimento ultra-veloce e 70 giorni di autonomia.",
        category: "tech",
        link: "https://www.amazon.it/dp/B098RKWHHZ?tag=tony6401-21"
    },
    {
        id: "50",
        nome: "Ashwagandha KSM-66",
        prezzo: "22,99€",
        originalPrice: "39,99€",
        discount: "-43%",
        img: "https://m.media-amazon.com/images/I/71nKWzKzQjL._AC_SL1500_.jpg",
        descrizione: "Ashwagandha KSM-66 premium, 90 capsule per gestione stress e supporto energia naturale.",
        category: "salute",
        link: "https://www.amazon.it/dp/B07Q2Q4Q4Q?tag=tony6401-21"
    },
    {
        id: "51",
        nome: "Oppo Find X6",
        prezzo: "699€",
        originalPrice: "899€",
        discount: "-22%",
        img: "https://m.media-amazon.com/images/I/71KxlQnWP8L._AC_SL1500_.jpg",
        descrizione: "Oppo Find X6 con fotocamera Hasselblad, Snapdragon 8 Gen 2 e ricarica SuperVOOC 100W.",
        category: "smartphone",
        link: "https://www.amazon.it/dp/B0CQX8N7VF?tag=tony6401-21"
    },
    {
        id: "52",
        nome: "Bershka Giacca Jeans",
        prezzo: "29€",
        originalPrice: "49€",
        discount: "-41%",
        img: "https://m.media-amazon.com/images/I/71pKzQnWP8L._AC_UY679_.jpg",
        descrizione: "Giacca di jeans Bershka unisex, stile vintage e versatile per look casual.",
        category: "fashion",
        link: "https://www.amazon.it/dp/B08XQZQJXM?tag=tony6401-21"
    },
    {
        id: "53",
        nome: "Karcher WD 3",
        prezzo: "89€",
        originalPrice: "139€",
        discount: "-36%",
        img: "https://m.media-amazon.com/images/I/71nKWzKzQjL._AC_SL1500_.jpg",
        descrizione: "Aspirapolvere Karcher WD 3 per solidi e liquidi, potente e versatile per casa e garage.",
        category: "casa",
        link: "https://www.amazon.it/dp/B08L5TNJHP?tag=tony6401-21"
    },
    {
        id: "54",
        nome: "Razer DeathAdder V3",
        prezzo: "59€",
        originalPrice: "79€",
        discount: "-25%",
        img: "https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_SL1500_.jpg",
        descrizione: "Mouse gaming Razer DeathAdder V3 con sensore Focus Pro 30K e switch ottici.",
        category: "tech",
        link: "https://www.amazon.it/dp/B098RKWHHZ?tag=tony6401-21"
    },
    {
        id: "55",
        nome: "Melatonina 5mg",
        prezzo: "11,99€",
        originalPrice: "21,99€",
        discount: "-45%",
        img: "https://m.media-amazon.com/images/I/61phl7urNGL._AC_SL1500_.jpg",
        descrizione: "Melatonina 5mg per il sonno naturale, 180 compresse per regolare il ciclo sonno-veglia.",
        category: "salute",
        link: "https://www.amazon.it/dp/B07Q2Q4Q4Q?tag=tony6401-21"
    },
    {
        id: "56",
        nome: "Vivo X90 Pro",
        prezzo: "799€",
        originalPrice: "999€",
        discount: "-20%",
        img: "https://m.media-amazon.com/images/I/71Q4YzKzQjL._AC_SL1500_.jpg",
        descrizione: "Vivo X90 Pro con fotocamera Zeiss, MediaTek Dimensity 9200 e display AMOLED curvo.",
        category: "smartphone",
        link: "https://www.amazon.it/dp/B0CQX8N7VF?tag=tony6401-21"
    },
    {
        id: "57",
        nome: "Massimo Dutti Camicia",
        prezzo: "39€",
        originalPrice: "69€",
        discount: "-43%",
        img: "https://m.media-amazon.com/images/I/71BHou6YJKL._AC_UY679_.jpg",
        descrizione: "Camicia Massimo Dutti da uomo in cotone premium, elegante per ufficio e occasioni formali.",
        category: "fashion",
        link: "https://www.amazon.it/dp/B08XQZQJXM?tag=tony6401-21"
    },
    {
        id: "58",
        nome: "Tineco Pure One S12",
        prezzo: "159€",
        originalPrice: "249€",
        discount: "-36%",
        img: "https://m.media-amazon.com/images/I/81J+KJ5PJXL._AC_SL1500_.jpg",
        descrizione: "Aspirapolvere senza filo Tineco Pure One S12 con display LED e filtrazione avanzata.",
        category: "casa",
        link: "https://www.amazon.it/dp/B08L5TNJHP?tag=tony6401-21"
    },
    {
        id: "59",
        nome: "SteelSeries Arctis 7",
        prezzo: "129€",
        originalPrice: "179€",
        discount: "-28%",
        img: "https://m.media-amazon.com/images/I/61+btTqPTCL._AC_SL1500_.jpg",
        descrizione: "Cuffie gaming wireless SteelSeries Arctis 7 con audio surround DTS e 24h autonomia.",
        category: "tech",
        link: "https://www.amazon.it/dp/B09XS7JWHH?tag=tony6401-21"
    },
    {
        id: "60",
        nome: "Multivitaminico Completo",
        prezzo: "18,99€",
        originalPrice: "32,99€",
        discount: "-42%",
        img: "https://m.media-amazon.com/images/I/71nKWzKzQjL._AC_SL1500_.jpg",
        descrizione: "Multivitaminico completo con 26 vitamine e minerali, 365 compresse per tutto l'anno.",
        category: "salute",
        link: "https://www.amazon.it/dp/B07Q2Q4Q4Q?tag=tony6401-21"
    },
    {
        id: "61",
        nome: "Honor Magic 5 Pro",
        prezzo: "649€",
        originalPrice: "849€",
        discount: "-24%",
        img: "https://m.media-amazon.com/images/I/71KxlQnWP8L._AC_SL1500_.jpg",
        descrizione: "Honor Magic 5 Pro con Snapdragon 8 Gen 2, fotocamera 50MP e ricarica wireless 50W.",
        category: "smartphone",
        link: "https://www.amazon.it/dp/B0CQX8N7VF?tag=tony6401-21"
    }
];

// Initialize products
function initializeProducts() {
    products = [...originalProducts];
}

// Render products
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    const startIndex = currentPage * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    let productsToShow = products;

    // Apply filter
    if (currentFilter !== 'all') {
        productsToShow = products.filter(product => product.category === currentFilter);
    }

    const productsSlice = productsToShow.slice(startIndex, endIndex);
    
    if (currentPage === 0) {
        grid.innerHTML = '';
        displayedProducts = [];
    }

    productsSlice.forEach((product, index) => {
        const productCard = createProductCard(product);
        grid.appendChild(productCard);
        displayedProducts.push(product);
        
        setTimeout(() => {
            productCard.classList.add('fade-in');
        }, index * 50);
    });

    // Update load more button
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        const hasMore = endIndex < productsToShow.length;
        loadMoreBtn.style.display = hasMore ? 'block' : 'none';
    }
}

// Create product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'glass-card product-card';
    card.setAttribute('data-category', product.category);
    
    // Format price display
    let priceHTML = `<span class="current-price">${product.prezzo}</span>`;
    if (product.originalPrice && product.discount) {
        priceHTML = `
            <span class="original-price">${product.originalPrice}</span>
            <span class="current-price">${product.prezzo}</span>
            <span class="discount-badge">${product.discount}</span>
        `;
    }

    card.innerHTML = `
        <div class="product-image-container">
            <img src="${product.img}" alt="${product.nome}" class="product-image" loading="lazy">
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.nome}</h3>
            <div class="product-price">${priceHTML}</div>
            <p class="product-description">${product.descrizione}</p>
            <div class="product-actions">
                <a href="${product.link}" class="buy-btn" target="_blank" rel="noopener">
                    Acquista su Amazon
                </a>
                <div class="secondary-actions">
                    <button class="action-btn wishlist-btn" onclick="addToWishlist('${product.id}')">
                        Wishlist
                    </button>
                    <button class="action-btn cart-btn" onclick="addToCart('${product.id}')">
                        Carrello
                    </button>
                    <button class="action-btn share-btn" onclick="shareProduct('${product.id}')">
                        Condividi
                    </button>
                </div>
            </div>
        </div>
    `;

    return card;
}

// Filter products
function filterProducts(category) {
    currentFilter = category;
    currentPage = 0;
    renderProducts();
    
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
    });
    
    const activeBtn = document.querySelector(`[data-category="${category}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
        activeBtn.setAttribute('aria-pressed', 'true');
    }
    
    showNotification(`Filtro applicato: ${category === 'all' ? 'Tutti i prodotti' : category}`);
}

// Load more products
function loadMoreProducts() {
    currentPage++;
    renderProducts();
}

// Add to wishlist
function addToWishlist(productId) {
    try {
        const product = products.find(p => p.id === productId);
        if (!product) {
            showNotification('Prodotto non trovato', 'error');
            return;
        }

        const savedData = localStorage.getItem('cronoshop_data');
        let userData = savedData ? JSON.parse(savedData) : {};
        let wishlist = userData.wishlist || [];
        
        // Check if already in wishlist
        if (wishlist.find(item => item.id === productId)) {
            showNotification('Prodotto già nella wishlist', 'warning');
            return;
        }

        wishlist.push(product);
        userData.wishlist = wishlist;
        localStorage.setItem('cronoshop_data', JSON.stringify(userData));
        
        showNotification('Prodotto aggiunto alla wishlist!', 'success');
    } catch (error) {
        console.error('Error adding to wishlist:', error);
        showNotification('Errore durante l\'aggiunta alla wishlist', 'error');
    }
}

// Add to cart
function addToCart(productId) {
    try {
        const product = products.find(p => p.id === productId);
        if (!product) {
            showNotification('Prodotto non trovato', 'error');
            return;
        }

        const savedData = localStorage.getItem('cronoshop_data');
        let userData = savedData ? JSON.parse(savedData) : {};
        let cart = userData.cart || [];
        
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        userData.cart = cart;
        localStorage.setItem('cronoshop_data', JSON.stringify(userData));
        
        updateCartCount();
        showNotification('Prodotto aggiunto al carrello!', 'success');
    } catch (error) {
        console.error('Error adding to cart:', error);
        showNotification('Errore durante l\'aggiunta al carrello', 'error');
    }
}

// Share product
function shareProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const shareText = `🛍️ Guarda questa offerta su Cronoshop!\n\n${product.nome}\n💰 ${product.prezzo}\n\n🔗 ${product.link}\n\n#Cronoshop #OfferteAmazon #Risparmio`;
    
    if (navigator.share) {
        navigator.share({
            title: `${product.nome} - Cronoshop`,
            text: shareText,
            url: product.link
        }).catch(console.error);
    } else {
        navigator.clipboard.writeText(shareText).then(() => {
            showNotification('Link copiato negli appunti!', 'success');
        }).catch(() => {
            showNotification('Errore nella copia del link', 'error');
        });
    }
}

// Update cart count
function updateCartCount() {
    try {
        const savedData = localStorage.getItem('cronoshop_data');
        if (savedData) {
            const userData = JSON.parse(savedData);
            const cart = userData.cart || [];
            const cartCount = document.querySelector('.cart-count');
            if (cartCount) {
                const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
                cartCount.textContent = totalItems;
            }
        }
    } catch (error) {
        console.error('Error loading cart data:', error);
    }
}

// Show notification
function showNotification(message, type = 'info') {
    let notification = document.getElementById('notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'notification';
        notification.className = 'notification';
        notification.innerHTML = '<span id="notificationText"></span>';
        document.body.appendChild(notification);
    }

    const notificationText = document.getElementById('notificationText');
    if (notificationText) {
        notificationText.textContent = message;
        notification.className = `notification ${type}`;
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
}

// Theme management
function applyTheme() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    const themeMode = localStorage.getItem('themeMode') || 'default';
    const glassMode = localStorage.getItem('glassMode') === 'true';

    // Remove all theme classes
    document.body.classList.remove('dark-mode', 'theme-green', 'theme-red', 'theme-blue', 'theme-purple', 'theme-orange', 'glass-mode');

    // Apply dark mode
    if (darkMode) {
        document.body.classList.add('dark-mode');
    }

    // Apply theme mode
    if (themeMode !== 'default') {
        document.body.classList.add(`theme-${themeMode}`);
    }

    // Apply glass mode
    if (glassMode) {
        document.body.classList.add('glass-mode');
    }

    // Update theme button
    const themeBtn = document.querySelector('.theme-btn');
    if (themeBtn) {
        themeBtn.textContent = darkMode ? 'Chiaro' : 'Scuro';
    }
}

function toggleTheme() {
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', !isDark);
    applyTheme();
    showNotification(`Tema ${!isDark ? 'scuro' : 'chiaro'} attivato`);
}

// Search functionality
function toggleSearch() {
    const searchContainer = document.getElementById('searchContainer');
    if (searchContainer) {
        searchContainer.classList.toggle('active');
        if (searchContainer.classList.contains('active')) {
            const searchInput = document.getElementById('searchInput');
            searchInput?.focus();
        }
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    if (navMenu) {
        navMenu.classList.toggle('active');
        
        // Update aria-expanded for accessibility
        const isExpanded = navMenu.classList.contains('active');
        mobileMenuBtn?.setAttribute('aria-expanded', isExpanded);
    }
}

// Modal management
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        modal.removeAttribute('hidden');
        document.body.style.overflow = 'hidden';
        
        // Focus on first focusable element
        const focusableElement = modal.querySelector('input, button, [tabindex]:not([tabindex="-1"])');
        focusableElement?.focus();
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        modal.setAttribute('hidden', '');
        document.body.style.overflow = '';
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize products and render
    initializeProducts();
    renderProducts();
    
    // Apply theme
    applyTheme();
    
    // Update cart count
    updateCartCount();
    
    // Setup event listeners
    setupEventListeners();
    
    // Add fade-in animation to existing cards
    setTimeout(() => {
        const elements = document.querySelectorAll('.glass-card:not(.fade-in)');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('fade-in');
            }, index * 100);
        });
    }, 100);
});

function setupEventListeners() {
    // Theme toggle
    const themeBtn = document.querySelector('.theme-btn');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }

    // Mobile menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Search toggle
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', toggleSearch);
    }

    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            filterProducts(category);
        });
    });

    // Load more button
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreProducts);
    }

    // Close modals on outside click
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-overlay')) {
            closeModal(e.target.id);
        }
    });

    // Close buttons
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal-overlay');
            if (modal) {
                closeModal(modal.id);
            }
        });
    });

    // Escape key to close modals
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal-overlay.active');
            if (activeModal) {
                closeModal(activeModal.id);
            }
        }
    });
}

// Make functions globally available
window.addToWishlist = addToWishlist;
window.addToCart = addToCart;
window.shareProduct = shareProduct;
window.showModal = showModal;
window.closeModal = closeModal;
window.toggleTheme = toggleTheme;
window.toggleSearch = toggleSearch;
window.toggleMobileMenu = toggleMobileMenu;
window.showNotification = showNotification;