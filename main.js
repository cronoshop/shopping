// Cache busting version
const CACHE_VERSION = '2.3';

// Products data
const products = [
  {
    id: "prod1",
    link: "https://amzn.to/3Z551fa",
    img: "https://m.media-amazon.com/images/I/61hiFJPpY9L._AC_SL1500_.jpg",
    nome: "Samsung Galaxy S25 Ultra",
    prezzo: "1.199€",
    descrizione: "Smartphone AI con display 6.9\" QHD+ Dynamic AMOLED 2X, fotocamera da 200MP, RAM 12GB, memoria interna da 256GB, batteria da 5000 mAh. Colore Titanium Silverblue. Garanzia 3 anni.",
    category: "smartphones"
  },
  {
    id: "prod2",
    link: "https://amzn.to/4mB7UhK",
    img: "https://m.media-amazon.com/images/I/71b8mpCMTOL._AC_SL1500_.jpg",
    nome: "by Amazon Quinoa biologica, 500g",
    prezzo: "5,49€",
    descrizione: "Quinoa biologica di alta qualità, ricca di proteine e fibre. Perfetta per insalate e piatti salutari.",
    category: "food"
  },
  {
    id: "prod3",
    link: "https://www.amazon.it/dp/B0CHWV5HTM",
    img: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_SL1500_.jpg",
    nome: "Apple iPhone 15",
    prezzo: `<span style="text-decoration: line-through; color: #888;">879,00€</span> <span style="color: #007aff; font-weight: bold;">645,00€</span> <span style="color: red; font-weight: bold;">-27%</span>`,
    descrizione: "Prestazioni top per l'uso quotidiano.",
    category: "smartphones"
  },
  {
    id: "prod4",
    link: "https://amzn.to/4kCH9aV",
    img: "https://m.media-amazon.com/images/I/618ha2Ia5tL._AC_SL1500_.jpg",
    nome: "Samsung Galaxy S25 Smartphone AI",
    prezzo: "929,00€",
    descrizione: "Smartphone con display 6.2'' FHD+ Dynamic AMOLED 2X, fotocamera da 50MP, RAM 12GB, memoria interna 256GB, batteria da 4.000 mAh. Include 3 anni di garanzia del produttore. Colore: Mint.",
    category: "smartphones"
  },
  {
    id: "prod5",
    link: "https://amzn.to/3ZAt8T4",
    img: "https://m.media-amazon.com/images/I/61Wj-1t3TwL._AC_SL1500_.jpg",
    nome: "SAMSUNG Galaxy S25 Edge",
    prezzo: "1.299,00€",
    descrizione: "Smartphone AI con display 6.7'' QHD+ Dynamic AMOLED 2X, fotocamera da 200MP, RAM 12GB, memoria interna da 512GB, batteria da 3.900 mAh. Include 3 anni di garanzia del produttore. Colore: Titanium Jetblack.",
    category: "smartphones"
  },
  {
    id: "prod6",
    link: "https://amzn.to/45gPEUX",
    img: "https://m.media-amazon.com/images/I/61y0hmQWlsL._AC_SL1500_.jpg",
    nome: "Samsung Galaxy S25+ Smartphone AI",
    prezzo: "1.189,00€",
    descrizione: "Smartphone AI con display 6.7'' QHD+ Dynamic AMOLED 2X, fotocamera da 50MP, RAM 12GB, memoria interna da 512GB, batteria da 4.900 mAh. Include 3 anni di garanzia del produttore. Colore: Silver Shadow. Versione italiana.",
    category: "smartphones"
  },
  {
    id: "prod7",
    link: "https://amzn.to/3Z6Kc2W",
    img: "https://m.media-amazon.com/images/I/610vqacJO2L.__AC_SY445_SX342_QL70_ML2_.jpg",
    nome: "Apple iPhone 16e – 128 GB",
    prezzo: "699,00€",
    descrizione: "Progettato per Apple Intelligence, dotato di chip A18, autonomia grandiosa, fotocamera Fusion da 48MP e display Super Retina XDR da 6,1\". Colore: Bianco.",
    category: "smartphones"
  },
  {
    id: "prod8",
    link: "https://amzn.to/3ZEqKut",
    img: "https://m.media-amazon.com/images/I/61cUeqowwZL._AC_SL1500_.jpg",
    nome: "Apple iPhone 16 Pro Max – 256 GB",
    prezzo: "1.195,00€",
    descrizione: "Telefono 5G con controllo fotocamera avanzato, registrazione video Dolby Vision 4K a 120 fps e autonomia senza precedenti. Compatibile con AirPods. Colore: Titanio Nero.",
    category: "smartphones"
  },
  {
    id: "prod9",
    link: "https://amzn.to/43t1D0l",
    img: "https://m.media-amazon.com/images/I/61BGE6iu4AL.__AC_SY445_SX342_QL70_ML2_.jpg",
    nome: "Apple iPhone 14 Plus – 128 GB",
    prezzo: "871,00€",
    descrizione: "Smartphone Apple con 128 GB di memoria, display Super Retina XDR da 6,7\", ottime prestazioni e autonomia, colore Azzurro. Un mix di potenza e stile.",
    category: "smartphones"
  },
  {
    id: "prod10",
    link: "https://amzn.to/4mBncTC",
    img: "https://m.media-amazon.com/images/I/51v1hYXGsdL._AC_SL1500_.jpg",
    nome: "Google Pixel 9 Pro XL",
    prezzo: "879,00€",
    descrizione: "Smartphone Android sbloccato con Gemini, sistema a tripla fotocamera posteriore, batteria con autonomia fino a 24 ore e display Super Actua da 6,8\". Colore: Grigio Verde. Memoria: 128GB.",
    category: "smartphones"
  },
  {
    id: "prod11",
    link: "https://m.media-amazon.com/images/I/51v1hYXGsdL._AC_SL1500_.jpg",
    nome: "Google Pixel 9 Pro XL",
    prezzo: "879,00€",
    descrizione: "Smartphone Android sbloccato con Gemini, sistema a tripla fotocamera posteriore, batteria con autonomia fino a 24 ore e display Super Actua da 6,8\". Colore: Grigio Verde. Memoria: 128GB.",
    category: "smartphones"
  },
  {
    id: "prod12",
    link: "https://amzn.to/4jlRfvO",
    img: "https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_SL1500_.jpg",
    nome: "Apple iPhone 14 Pro Max – 128 GB (Ricondizionato)",
    prezzo: "689,00€",
    descrizione: "iPhone 14 Pro Max ricondizionato in ottime condizioni, con 128 GB di memoria e finitura Deep Purple. La qualità Apple con un ottimo risparmio.",
    category: "smartphones"
  },
  {
    id: "prod13",
    link: "https://amzn.eu/d/j40eOtX",
    img: "https://m.media-amazon.com/images/I/619HAuZ95QL._AC_SL1500_.jpg",
    nome: "iPhone 16 (128GB) - Nero",
    prezzo: "759€",
    descrizione: "Altissima qualità Apple",
    category: "smartphones"
  },
  {
    id: "prod14",
    link: "https://amzn.to/3SnXwfz",
    img: "https://m.media-amazon.com/images/I/41sNR0PJCaL._AC_SX569_.jpg",
    nome: "SSC NAPOLI Maglietta Campioni",
    prezzo: "30€",
    descrizione: "Maglia ufficiale celebrativa",
    category: "clothing"
  },
  {
    id: "prod15",
    link: "https://amzn.to/4kbOb6E",
    img: "https://m.media-amazon.com/images/I/71BHou6YJKL._AC_SY879_.jpg",
    nome: "Calvin Klein T-Shirt Uomo",
    prezzo: "18€",
    descrizione: "Stile minimal, 100% cotone",
    category: "clothing"
  },
  {
    id: "prod16",
    link: "https://amzn.to/43xa5u6",
    img: "https://m.media-amazon.com/images/I/51V1TTs1U2L._AC_SX569_.jpg",
    nome: "adidas Squadra25 Jersey Short Sleeve T-Shirt Uomo",
    prezzo: "14,99€ (prima 23,00€, -35%)",
    descrizione: "",
    category: "clothing"
  },
  {
    id: "prod17",
    link: "https://www.amazon.it/dp/B0F1P4F8SR/ref=cm_sw_r_as_gl_apa_gl_i_HYDVV9DGWX2M1DGRM3X2?linkCode=ml1&tag=tony6401-21",
    img: "https://m.media-amazon.com/images/I/71GSwlTsPDL.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "Sunsilk Crema Onde Meravigliose Crema Styling Capelli Mossi, Effetto Anticrespo",
    prezzo: "5,99€ (prima 32,34€, -81%)",
    descrizione: "Styling perfetto per capelli mossi, effetto anticrespo a lunga durata.",
    category: "cosmetics"
  },
  {
    id: "prod18",
    link: "https://amzn.to/4kGcGJg",
    img: "https://m.media-amazon.com/images/I/6171T++Z2mL._AC_SL1095_.jpg",
    nome: "Caffè Borbone Cialda Compostabile, Miscela Oro - 100 Cialde",
    prezzo: "15,19€ (prima 16,00€, -5%)",
    descrizione: "Prezzo consigliato: 22,34€ -32% di sconto",
    category: "food"
  },
  {
    id: "prod19",
    link: "https://amzn.to/3Fbh43W",
    img: "https://m.media-amazon.com/images/I/8120xtA5GaL._AC_SL1500_.jpg",
    nome: "King C. Gillette Kit REGOLABARBA Uomo",
    prezzo: "27,37€",
    descrizione: "Kit professionale: Testina, 3 Pettini Regolatori, Spazzolina, Caricatore. Rasoio elettrico, idea regalo.",
    category: "personal_care"
  },
  {
    id: "prod20",
    link: "https://amzn.to/3Ssmcnb",
    img: "https://m.media-amazon.com/images/I/31SLM5sJK4L.__AC_SY300_SX300_QL70_ML2_.jpg",
    nome: "Samsung Galaxy S24 Ultra – 12GB / 256GB",
    prezzo: "864,90€",
    descrizione: "Smartphone top di gamma Samsung, 12GB RAM, 256GB memoria, colore Black. Prestazioni e design premium.",
    category: "smartphones"
  },
  {
    id: "prod21",
    link: "https://amzn.to/3SUojjE",
    img: "https://m.media-amazon.com/images/I/812azAWbm2L.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "Oral-B Testine Di Ricambio Original",
    prezzo: "24,99€",
    descrizione: "10 testine Pro Cross Action per spazzolino elettrico Oral-B, ricambio originale.",
    category: "personal_care"
  },
  {
    id: "prod22",
    link: "https://amzn.to/4jhgwHr",
    img: "https://m.media-amazon.com/images/I/51B45gaTgjL._AC_SL1000_.jpg",
    nome: "Amazon Fire TV Stick HD",
    prezzo: "28,99€",
    descrizione: "Amazon Fire TV Stick HD (Ultimo modello), TV gratuita e in diretta, telecomando vocale Alexa, controlli per Casa Intelligente, streaming HD.",
    category: "electronics"
  },
  {
    id: "prod23",
    link: "https://amzn.to/4dCu1QL",
    img: "https://m.media-amazon.com/images/I/618HDC8rPXL.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "Bronzi® Portafoglio Uomo Slim Piccolo",
    prezzo: "22,99€",
    descrizione: "Portacarte uomo e donna, portatessere con protezione RFID, porta carte di credito e portamonete. Mini, slim, con box regalo. Brand italiano di qualità.",
    category: "accessories"
  },
  {
    id: "prod24",
    link: "https://amzn.to/4kEfeHI",
    img: "https://m.media-amazon.com/images/I/61oxHY8kFbL._AC_SX569_.jpg",
    nome: "Vittorio Y Camicia Donna in Cotone e Lino",
    prezzo: "19,99€",
    descrizione: "Camicia casual tinta unita, comoda e traspirante, perfetta per la stagione calda. Resi gratuiti su Amazon.",
    category: "clothing"
  },
  {
    id: "prod25",
    link: "https://amzn.to/4dF2SwD",
    img: "https://m.media-amazon.com/images/I/618FhFPg8+L._AC_SX575_.jpg",
    nome: "Nike Air Force 1 '07 Lv8 4",
    prezzo: "116,00€",
    descrizione: "Scarpe da basket uomo, modello iconico Nike Air Force 1 con design classico e comfort duraturo.",
    category: "clothing"
  },
  {
    id: "prod26",
    link: "https://amzn.to/3Z7S8Rr",
    img: "https://m.media-amazon.com/images/I/41vC0GMKWJL._AC_SY695_.jpg",
    nome: "adidas Breaknet Lifestyle Court Lace Shoes",
    prezzo: "28,80€",
    descrizione: "Scarpe da tennis unisex per bambini e ragazzi. Prezzo più basso ultimi 30 giorni: 32,73€. Offerta a tempo con risparmio del 12% rispetto al prezzo recente.",
    category: "clothing"
  },
  {
    id: "prod27",
    link: "https://amzn.to/4dCt9LX",
    img: "https://m.media-amazon.com/images/I/71XHPuLiHVL._AC_SY606_.jpg",
    nome: "Nike Everyday Cush Crew Calze Uomo",
    prezzo: "14,99€",
    descrizione: "Calze da uomo Nike, modello Everyday Cush Crew, ideali per comfort quotidiano e performance sportive.",
    category: "clothing"
  },
  {
    id: "prod28",
    link: "https://amzn.to/4kFlpLJ",
    img: "https://m.media-amazon.com/images/I/71ZfLtLMYyL._AC_SX679_.jpg",
    nome: "Smart Sir Calzini Sportivi Uomo e Donna (4 paia)",
    prezzo: "9,49€",
    descrizione: "Calzini lunghi in cotone di alta qualità, comodi e traspiranti. Prezzo più basso ultimi 30 giorni: 9,99€. Offerta a tempo.",
    category: "clothing"
  },
  {
    id: "prod29",
    link: "https://amzn.to/3Z7eYZz",
    img: "https://m.media-amazon.com/images/I/51kcic+JN-L._AC_SL1095_.jpg",
    nome: "Caffè Borbone Respresso, Miscela Blu - 100 Capsule",
    prezzo: "19,49€",
    descrizione: "Caffè Borbone Respresso, Miscela Blu - 100 Capsule - Compatibili con le Macchine ad uso domestico Nespresso",
    category: "food"
  },
  {
    id: "prod30",
    link: "https://amzn.to/43PvEHy",
    img: "https://m.media-amazon.com/images/I/81irfL63EQL.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "Samsung Galaxy S22+ 5G – 128GB (Ricondizionato)",
    prezzo: "284,99€",
    descrizione: "Smartphone ricondizionato con SIM singola + e-SIM, colore Phantom Black, memoria 128GB. Risparmia 155,00€ rispetto al prezzo nuovo.",
    category: "smartphones"
  },
  {
    id: "prod31",
    link: "https://amzn.to/3HsKGdy",
    img: "https://m.media-amazon.com/images/I/61CY-+ZEN6L._AC_SY300_SX300_.jpg",
    nome: "Samsung Galaxy S21 Ultra 5G – 128GB (Ricondizionato)",
    prezzo: "294,99€",
    descrizione: "Smartphone ricondizionato, RAM 12GB, Dual SIM (e-SIM), colore Nero. Ottima occasione con risparmio di 155,00€ rispetto al prezzo nuovo.",
    category: "smartphones"
  },
  {
    id: "prod32",
    link: "https://amzn.to/3FcZUD1",
    img: "https://m.media-amazon.com/images/I/61pc4vR8BoL._AC_SL1500_.jpg",
    nome: "Samsung Galaxy A16",
    prezzo: "120,98€",
    descrizione: "Samsung Galaxy A16 Smartphone Android 14, Display Super AMOLED 6.7\" FHD+, 4GB RAM, 128GB, Batteria 5.000 mAh, Resistenza IP54, memoria espandibile fino a 1.5TB, Black",
    category: "smartphones"
  },
  {
    id: "prod33",
    link: "https://amzn.to/43ECrTf",
    img: "https://m.media-amazon.com/images/I/616+oTRo6-L._AC_SL1500_.jpg",
    nome: "Samsung Galaxy A56 5G",
    prezzo: "342,68€",
    descrizione: "Samsung Galaxy A56 5G, smartphone Android, 256 GB di memoria, 8 GB di RAM, antracite, aggiornamento del sistema operativo 6X, grande schermo, lunga durata della batteria",
    category: "smartphones"
  },
  {
    id: "prod34",
    link: "https://amzn.to/43gLxGT",
    img: "https://m.media-amazon.com/images/I/61waTtq8hCL._AC_SL1500_.jpg",
    nome: "GALAXY A26 5G – 8GB + 256GB",
    prezzo: "234,69€",
    descrizione: "Smartphone GALAXY A26 5G con 8GB di RAM e 256GB di memoria interna. Colore: Black.",
    category: "smartphones"
  },
  {
    id: "prod35",
    link: "https://amzn.to/43RhVzW",
    img: "https://m.media-amazon.com/images/I/713AzRHXYeL._AC_SL1500_.jpg",
    nome: "UpCircle Cotton fioc di bambù – 200 pezzi –",
    prezzo: "5,49€",
    descrizione: "UpCircle Cotton fioc di bambù – 200 pezzi – biodegradabili, sostenibili, senza plastica, completamente riciclabili – un punto fermo per qualsiasi bagno",
    category: "bathroom"
  },
  {
    id: "prod36",
    link: "https://amzn.to/3FoIjIi",
    img: "https://m.media-amazon.com/images/I/61MKKroaphL.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "Supradyn Energy Multivitaminico – 70 Caramelle",
    prezzo: "11,19€",
    descrizione: "Integratore multivitaminico con vitamine A, B, C, D, E e Coenzima Q10. 70 caramelle gommose al gusto ciliegia, lampone e arancia.",
    category: "health"
  },
  {
    id: "prod37",
    link: "https://amzn.to/4jnbTvu",
    img: "https://m.media-amazon.com/images/I/51HcFzY9EmL._AC_SL1080_.jpg",
    nome: "ZPAPER - 6 Rotoli Asciugamani",
    prezzo: "29,95€",
    descrizione: "Pura cellulosa, 2 veli, confezionati. Rotoloni asciugatutto multiuso per pulire i disastri.",
    category: "bathroom"
  },
  {
    id: "prod38",
    link: "https://amzn.to/4jrHVq9",
    img: "https://m.media-amazon.com/images/I/91krk-VZlwL._AC_SL1500_.jpg",
    nome: "Amazon Basics Cerniera Sacchetti di stoccaggio sottovuoto",
    prezzo: "27,19€",
    descrizione: "20 unità con pompa a mano, per risparmiare spazio con efficienza e semplicità.",
    category: "household"
  },
  {
    id: "prod39",
    link: "https://m.media-amazon.com/images/I/7107Ze-04CL._AC_SL1500_.jpg",
    nome: "Amazon Basics - 8 Batterie Ricaricabili AA NiMH",
    prezzo: "13,52€",
    descrizione: "2000 mAh, ricaricabili fino a 1000 volte, pre-caricate e pronte all'uso.",
    category: "electronics"
  },
  {
    id: "prod40",
    link: "https://m.media-amazon.com/images/I/812hFM3JmTL._AC_SL1500_.jpg",
    nome: "Fabuloso Ammorbidente Concentrato - 4x1,25L",
    prezzo: "18,72€",
    descrizione: "Profumo Fresco Mattino, 224 lavaggi. Fragranza attivata dal movimento, facilita la stiratura e lascia i capi morbidi e profumati.",
    category: "household"
  },
  {
    id: "prod41",
    link: "https://amzn.to/4mChp0i",
    img: "https://m.media-amazon.com/images/I/61QKPdoU5TL.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "ZPAPER - 60 Rotoli di Carta Igienica",
    prezzo: "32,36€",
    descrizione: "60 rotoli, 250 fogli per rotolo, 2 veli, morbida e resistente. Ideale per casa o ufficio.",
    category: "bathroom"
  },
  {
    id: "prod42",
    link: "https://amzn.to/3Hfvl04",
    img: "https://m.media-amazon.com/images/I/617i66nvMxL._AC_SY741_.jpg",
    nome: "Vitamina B12 Vegan 365 Compresse PiùLife",
    prezzo: "14,30€",
    descrizione: "Vitamina B12 Cianocobalamina, per sistema immunitario e riduzione stanchezza fisica e mentale. 1000 mcg.",
    category: "health"
  },
  {
    id: "prod43",
    link: "https://amzn.to/4dM4hSk",
    img: "https://m.media-amazon.com/images/I/71uuRXQz1JL._AC_SL1500_.jpg",
    nome: "Magnesio Citrato Vegano Tamponato (240 Capsule)",
    prezzo: "17,09€",
    descrizione: "Con 444mg polvere elementare, riduce stanchezza e affaticamento, senza additivi né glutine.",
    category: "health"
  },
  {
    id: "prod44",
    link: "https://amzn.to/4jq1SOj",
    img: "https://m.media-amazon.com/images/I/71GXfnVPsPL.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "Zzzquil Natura Integratore Per Il Sonno",
    prezzo: "36,99€",
    descrizione: "Melatonina con estratti di lavanda, valeriana e camomilla. Maxi formato 2x72 pastiglie gommose per favorire il sonno.",
    category: "health"
  },
  {
    id: "prod45",
    link: "https://amzn.to/3Z3U39Q",
    img: "https://m.media-amazon.com/images/I/71NY7I+OLQL._AC_SY300_SX300_.jpg",
    nome: "Novanight Tripla Azione Melatonina per Dormire",
    prezzo: "23,21€",
    descrizione: "Integratore per disturbi del sonno, senza glutine. Contiene melatonina, escolzia, passiflora e melissa. Non induce dipendenza.",
    category: "health"
  },
  {
    id: "prod46",
    link: "https://amzn.to/43PEXay",
    img: "https://m.media-amazon.com/images/I/61NUQEFRTFL._AC_SX522_.jpg",
    nome: "SWISSE Ultivit - Multivitaminico Ragazza (60 Compresse)",
    prezzo: "13,46€",
    descrizione: "Multivitaminico con zinco e vitamine per riduzione stanchezza e supporto sistema immunitario. Integratore con ferro, made in Italy.",
    category: "health"
  },
  {
    id: "prod47",
    link: "https://amzn.to/4mAMTnv",
    img: "https://m.media-amazon.com/images/I/51AyIO7mVXL._AC_SX569_.jpg",
    nome: "N-K PULABO Anello Intelligente Temperatura In Acciaio Inox",
    prezzo: "1,82€",
    descrizione: "Anello per coppie e amanti, cambia colore in base alla temperatura e all’umore. Unisex, in acciaio inox di alta qualità e design alla moda.",
    category: "fashion"
  },
  {
    id: "prod48",
    link: "https://amzn.to/4jlkrDe",
    img: "https://m.media-amazon.com/images/I/81Ev1JwtPhL._AC_SX569_.jpg",
    nome: "Amazon Essentials T-Shirt Basic Uomo - Pacco da 6",
    prezzo: "25,99€",
    descrizione: "Magliette girocollo in cotone, versatili e morbide, ideali per ogni occasione. Qualità Amazon Essentials in un conveniente pacco da 6.",
    category: "clothing"
  },
  {
    id: "prod49",
    link: "https://amzn.to/3SUAqNE",
    img: "https://m.media-amazon.com/images/I/61KSB-CGSyL._AC_SX569_.jpg",
    nome: "ALPIDEX T-Shirt Uomo - Confezione da 5",
    prezzo: "39,99€",
    descrizione: "Magliette da uomo con girocollo disponibili in varie taglie dalla S alla 5XL. Perfette per tutti i giorni, comode e resistenti.",
    category: "clothing"
  },
  {
    id: "prod50",
    link: "https://amzn.to/3Z60eKn",
    img: "https://m.media-amazon.com/images/I/81Auh7uuz1L._AC_SX466_.jpg",
    nome: "Amazon Essentials Felpa con Cappuccio Donna",
    prezzo: "19,60€",
    descrizione: "Felpa da donna in pile, con cappuccio e cerniera. Calda, comoda e ideale per l’uso quotidiano. Disponibile in vari colori e taglie.",
    category: "clothing"
  },
  {
    id: "prod51",
    link: "https://amzn.to/43qkEio",
    img: "https://m.media-amazon.com/images/I/61V8VUE1dFL.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "Amazfit Bip 5 Smartwatch 46 mm",
    prezzo: "57,99€",
    descrizione: "Smartwatch con schermo grande, chiamate Bluetooth, Alexa integrata, GPS, durata batteria 10 giorni, fitness tracker con battito cardiaco e monitoraggio ossigeno nel sangue.",
    category: "electronics"
  },
  {
    id: "prod52",
    link: "https://amzn.to/4jlczlj",
    img: "https://m.media-amazon.com/images/I/51Kmnt241oL.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "Imou 3MP Telecamera Wi-Fi Interno",
    prezzo: "22,99€",
    descrizione: "Videocamera di sorveglianza 2K con tracciamento del movimento, rilevamento umano, audio bidirezionale e connessione 2,4GHz. Perfetta per la sicurezza domestica.",
    category: "electronics"
  },
  {
    id: "prod53",
    link: "https://amzn.to/43GhYgW",
    img: "https://m.media-amazon.com/images/I/81UE75N+r1L._AC_SL1500_.jpg",
    nome: "SEHMUA 4G LTE Telecamera Esterno senza Fili, Telecamera con Sim, 2K 360 PTZ, con Pannello Solare e Batterie",
    prezzo: "51,43€",
    descrizione: "Marca: SEHMUA. 4,3 su 5 stelle (134 recensioni). Amazon Choice. 200+ acquistati nel mese scorso. Offerta a tempo! Prezzo più basso ultimi 30 giorni: 54,14€",
    category: "electronics"
  },
  {
    id: "prod54",
    link: "https://amzn.to/4kg3QC7",
    img: "https://m.media-amazon.com/images/I/71dy+yYz4iL._AC_SX522_.jpg",
    nome: "Amazon Essentials Maglietta Intima con Scollo A V",
    prezzo: "25,99€",
    descrizione: "Pacco da 6 magliette intime da uomo, traspiranti e in cotone, perfette per il comfort quotidiano.",
    category: "clothing"
  },
  {
    id: "prod55",
    link: "https://amzn.to/4mB7UhK",
    img: "https://m.media-amazon.com/images/I/71b8mpCMTOL.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "by Amazon Quinoa biologica, 500g",
    prezzo: "5,49€",
    descrizione: "",
    category: "food"
  },
  {
    id: "prod56",
    link: "https://amzn.to/3HusXTd",
    img: "https://m.media-amazon.com/images/I/71Cm4at5uAL._AC_SL1500_.jpg",
    nome: "NEW'C 3 Pezzi, Vetro Temperato per iPhone 16, iPhone 15 (6,1 Pollici)",
    prezzo: "7,89€",
    descrizione: "Pellicola protettiva anti graffio - ultra resistente - trasparente HD - strumento di installazione facile incluso. Prezzo per unità: 2,63€.",
    category: "accessories"
  },
  {
    id: "prod57",
    link: "https://amzn.to/3FozrT6",
    img: "https://m.media-amazon.com/images/I/71+5mYCqy7S._AC_SX342_SY445_.jpg",
    nome: "Apple AirTag",
    prezzo: "28,99€",
    descrizione: "Dispositivo di localizzazione Bluetooth per ritrovare oggetti come chiavi, zaini e altro tramite l'app Dov'è su iPhone.",
    category: "electronics"
  },
  {
    id: "prod58",
    link: "https://amzn.to/3T8pQCT",
    img: "https://m.media-amazon.com/images/I/71fRnkkqVdL.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "HP 305 Nero e Tricromia, 6ZD17AE - Confezione da 2 Cartucce Originali",
    prezzo: "24,99€",
    descrizione: "Compatibili con stampanti HP DeskJet serie 2300, 2700, 2800, 4200, 4100, HP Envy 6010, 6020, 6030 e 6040. Prezzo per cartuccia: 12,50€.",
    category: "electronics"
  },
  {
    id: "prod59",
    link: "https://amzn.to/4dTbdNq",
    img: "https://m.media-amazon.com/images/I/61DvMw16ITL.__AC_SY445_SX342_QL70_ML2_.jpg",
    nome: "Apple AirPods 4",
    prezzo: "128,99€",
    descrizione: "Auricolari wireless Bluetooth con audio spaziale personalizzato, resistenza al sudore e all’acqua, custodia di ricarica USB-C, chip H2, fino a 24 ore di autonomia.",
    category: "electronics"
  },
  {
    id: "prod60",
    link: "https://amzn.to/3SEY4xJ",
    img: "https://m.media-amazon.com/images/I/61fSyWVkrYL.__AC_SY300_SX300_QL70_ML2_.jpg",
    nome: "Tapo C200 Telecamera Wi-Fi Interno FHD, Videocamera sorveglianza, Visione Notturna, 360° Visuale, Audio Bidirezionale, Rilevamento di movimento e notifiche, Allarme acustico e luminoso integrato",
    prezzo: "21,99€ (-27%)",
    descrizione: "<span class='badge-animated'>Scelta Amazon</span> - 5000+ acquistati nel mese scorso, valutazione 4,6 su 5 (136.881 recensioni)",
    category: "electronics"
  },
  {
    id: "prod61",
    link: "https://amzn.to/4kCXBZd",
    img: "https://m.media-amazon.com/images/I/61c9X3+N4AL._AC_SX300_SY300_.jpg",
    nome: "Caricatore USB C Rapido 40W 4Porto Presa USB Caricatore Multipla PD & QC3.0 Carica Cellulare, Spina Alimentatore Caricabatterie per Samsung S22 S23 S24 iPhone 15 16 14, Spinotto Muro Adattatore",
    prezzo: "<span class='badge-animated'>Scelta Amazon</span> - 5000+ acquistati nel mese scorso, valutazione 4,6 su 5 (3.438 recensioni). Disponibile anche con coupon 20% e varianti Medium, Medium+Cavo USB C a USB C (14,99€), Large+2Pack (20,99€, -13%)",
    category: "electronics"
  },
  {
    id: "prod62",
    link: "https://amzn.to/3FUVgJY",
    img: "https://m.media-amazon.com/images/I/91MSouIX7HL._AC_SX466_.jpg",
    nome: "Amazon Essentials Felpa con Cappuccio e Cerniera Integrale in Pile (Big & Tall) - Uomo",
    prezzo: "21,60€",
    descrizione: "Felpa in pile con cappuccio, comoda e calda, adatta a tutte le taglie, anche Big & Tall. Design classico con zip frontale.",
    category: "clothing"
  },
  {
    id: "prod63",
    link: "https://amzn.to/4mZh5sw",
    img: "https://m.media-amazon.com/images/I/61aAOFdLzJL.__AC_SX395_SY395_QL70_ML2_.jpg",
    nome: "ASICS Gel-Excite 9 Scarpe da Corsa, Uomo",
    prezzo: "127,66€",
    descrizione: "Scarpe da corsa leggere e ammortizzate, ideali per allenamenti e uso quotidiano. Disponibili in varie taglie EU. Resi gratuiti inclusi.",
    category: "clothing"
  },
  {
    id: "prod64",
    link: "https://amzn.to/3SRisMa",
    img: "https://m.media-amazon.com/images/I/91MEK1bV2lL.__AC_SY445_SX342_QL70_ML2_.jpg",
    nome: "Joma Men's Supernova III T-Shirt",
    prezzo: "21,99€",
    descrizione: "Maglietta sportiva da uomo, leggera e traspirante. Disponibile in varie taglie dalla 6XS alla XL. Resi gratuiti inclusi.",
    category: "clothing"
  },
  {
    "id": "prod65",
    "link": "https://www.amazon.com/dp/B0CBRR1GZK?tag=tony6401-21",
    "img": "https://m.media-amazon.com/images/I/71EnaI2yCdL.__AC_SX342_SY445_QL70_ML2_.jpg",
    "nome": "Build Your Brand T-Shirt Uomo",
    "prezzo": "6.50",
    "descrizione": "Una maglietta basic come ogni uomo nell'armadio ha bisogno. Il semplice tè ha un taglio regolare e viene fornito con uno scollo rotondo a coste. Come vero basic può essere combinato a piacere e inoltre rifinito senza problemi con stampe o ricami.",
    "category": "fashion"
  },
  {
    "id": "prod66",
    "link": "https://www.amazon.com/dp/B096YNRT7Z?tag=tony6401-21",
    "img": "https://m.media-amazon.com/images/I/71rDrJKm85L.__AC_SY445_SX342_QL70_ML2_.jpg",
    "nome": "Amazon Essentials Men's Stylish Slim Fit Flat Front Trousers",
    "prezzo": "21.93",
    "descrizione": "We listen to customer feedback and fine-tune every detail to provide comfortable, durable and high-quality clothing at affordable prices for the whole family.",
    "category": "fashion"
  },
  {
    "id": "prod67",
    "link": "https://www.amazon.com/dp/B06XWND2ST?tag=tony6401-21",
    "img": "https://m.media-amazon.com/images/I/816fhPoCRyS.__AC_SY445_SX342_QL70_ML2_.jpg",
    "nome": "Amazon Essentials Camicia Casual in Popeline a Maniche Lunghe vestibilità Regular Uomo",
    "prezzo": "24€",
    "descrizione": "Un marchio Amazon.",
    "category": "tech"
  },
  {
    "id": "prod68",
    "link": "https://www.amazon.com/dp/B0B129TD65?tag=tony6401-21",
    "img": "https://m.media-amazon.com/images/I/51UaQx1b+1L._AC_SX342_SY445_.jpg",
    "nome": "LINVO Men's Women's Classic Polarized Sunglasses Fashion Rectangular TR90 100% UV400 Protection for Driving Fishing",
    "prezzo": "12€",
    "descrizione": "N/A",
    "category": "fashion"
  },
  {
    "id": "prod69",
    "link": "https://www.amazon.com/dp/B07G4SRQC8?tag=tony6401-21",
    "img": "https://m.media-amazon.com/images/I/81m7hD4I3aL.__AC_SX300_SY300_QL70_ML2_.jpg",
    "nome": "Amazon Basics - Hard Cabin Cabin Luggage with Swivel Wheels 55cm Approved for Ryanair, Easyjet and other airlines., Black, standard",
    "prezzo": "34€",
    "descrizione": "AmazonBasics offers everyday items for your home, office, garden, and more. The AmazonBasics selection is constantly growing and is designed to become a cost-effective choice for your everyday electronics and everyday necessities.",
    "category": "tech"
  },
  {
    "id": "prod70",
    "link": "https://www.amazon.com/dp/B09L8CZKRH?tag=tony6401-21",
    "img": "https://m.media-amazon.com/images/I/71LYN2Q16iL.__AC_SY395_SX395_QL70_ML2_.jpg",
    "nome": "Amazon Essentials Women's Casual Flip Flop Sandal with Ankle Strap",
    "prezzo": "19€",
    "descrizione": "Casual Ankle Strap Thong",
    "category": "tech"
  },
  {
    "id": "prod71",
    "link": "https://www.amazon.com/dp/B0C6DZKJ1X?tag=tony6401-21",
    "img": "https://m.media-amazon.com/images/I/61Y5pM28BuL.__AC_SY445_SX342_QL70_ML2_.jpg",
    "nome": "Amazon Essentials Serafino Men's Slim Fit Cotton Short Sleeve T-Shirt, Pack of 2",
    "prezzo": "26€",
    "descrizione": "We listen to customer feedback and fine-tune every detail to ensure our clothes are more comfortable, superior quality and long lasting, affordable for the whole family.",
    "category": "fashion"
  },
  {
    "id": "prod72",
    "link": "https://www.amazon.com/dp/B08JHP1L86?tag=tony6401-21",
    "img": "https://m.media-amazon.com/images/I/81qIK780N4L.__AC_SY445_SX342_QL70_ML2_.jpg",
    "nome": "Amazon Essentials Men's Stretch Jeans with Sporty Fit",
    "prezzo": "27.90€",
    "descrizione": "An Amazon brand - These classic 5-pocket athletic fit jeans are lightly elasticated for added comfort and to help maintain their shape",
    "category": "fashion"
  },
  {
    "id": "prod73",
    "link": "https://www.amazon.com/dp/B07Z6JM8TQ?tag=tony6401-21",
    "img": "https://m.media-amazon.com/images/I/71tUoMNs8fL.__AC_SY445_SX342_QL70_ML2_.jpg",
    "nome": "Amazon Essentials Women's High Leg Cotton Underwear (Available in Plus Size), Breathable Women's Briefs, Multiple Packs",
    "prezzo": "12.05€",
    "descrizione": "Amazon Essentials focuses on creating high-quality and long-lasting clothing for every day. Our women's clothing line includes cashmere sweaters, fleece and down jackets, and more, including plus size options. Our uniform sizes make you guess shopping, and each piece is tested to maintain the highest standards of quality and comfort.",
    "category": "tech"
  },
  {
    "id": "prod74",
    "link": "https://www.amazon.com/dp/B0CD2SHVLZ?tag=tony6401-21",
    "img": "https://m.media-amazon.com/images/I/81cKZpZzm5L.__AC_SY445_SX342_QL70_ML2_.jpg",
    "nome": "Amazon Basics - Travel Backpack / Hand Luggage",
    "prezzo": "34€",
    "descrizione": "Amazon Basics Hand Travel Backpack",
    "category": "tech"
  },
  {
    "id": "prod75",
    "link": "https://www.amazon.com/dp/B088DG714B?tag=tony6401-21",
    "img": "https://m.media-amazon.com/images/I/71vbSv0DSIL.__AC_SY445_SX342_QL70_ML2_.jpg",
    "nome": "9 Pairs Short Socks Tobilleros Men's",
    "prezzo": "16€",
    "descrizione": "N/A",
    "category": "tech"
  },
  {
    "id": "prod76",
    "link": "https://www.amazon.com/dp/B0CB21FKJ3?tag=tony6401-21",
    "img": "https://m.media-amazon.com/images/I/71E-K37BdsL.__AC_SY395_SX395_QL70_ML2_.jpg",
    "nome": "Skechers Uno Stand On Air, Scarpe da Ginnastica Uomo",
    "prezzo": "19.00 €",
    "descrizione": "Sneaker Durabuck con lacci in memory foam raffreddata ad aria.",
    "category": "altro"
  },
  {
    "id": "prod77",
    "link": "https://www.amazon.com/dp/B0BG8JH3H9?tag=tony6401-21",
    "img": "https://m.media-amazon.com/images/I/81+fhlfEC0L._AC_SX342_SY445_.jpg",
    "nome": "Amazon Essentials Men's Cotton Jersey Boxer Shorts (Available in Big & Tall Sizes) - Pack of 5",
    "prezzo": "26.80 €",
    "descrizione": "We listen to customer feedback and fine-tune every detail to ensure our clothes are more comfortable, superior quality and long lasting, affordable for the whole family.",
    "category": "altro"
  },
  {
    "id": "prod78",
    "link": "https://www.amazon.com/dp/B07XB1Y3W2?tag=tony6401-21",
    "img": "https://m.media-amazon.com/images/I/81tCQ7KumJL.__AC_SY445_SX342_QL70_ML2_.jpg",
    "nome": "Amazon Essentials Men's Straight Jeans with Bootcut Cut",
    "prezzo": "35.00 €",
    "descrizione": "An Amazon brand - Classic denim and five-pocket style highlight these perfect everyday jeans",
    "category": "fashion"
  },
  {
    "id": "prod79",
    "link": "https://www.amazon.com/dp/B08WK5MQ1H?tag=tony6401-21",
    "img": "https://m.media-amazon.com/images/I/91FFTV5JTAL.__AC_SY445_SX342_QL70_ML2_.jpg",
    "nome": "Amazon Essentials Girls and Girls Fleece Lined Zip Up Hoodies",
    "prezzo": "16.00 €",
    "descrizione": "Amazon Essentials It has everything you need to dress up your little ones in daily wear, high quality and long lasting outfits. Our line of children's must have includes soft fleece and oh-so warm puffer jackets to keep them tidy when temperatures drop, as well as trousers and polo shirts ready for school uniform. The consistent size takes the guesswork out of the groceries and each piece is put to the test to maintain parent-approved standards for quality and comfort.",
    "category": "fashion"
  },
  {
    "id": "prod80",
    "link": "https://www.amazon.com/dp/B0BLSY2RFH?tag=tony6401-21",
    "img": "https://m.media-amazon.com/images/I/61Cwt7x2zZL.__AC_SX395_SY395_QL70_ML2_.jpg",
    "nome": "Men's Stylish Sneakers Sneakers with Wedge Heel Soft Sole Sneakers for Men with Soft Sole Breathable Toe Western Running Shoes for Men",
    "prezzo": "42.00 €",
    "descrizione": "Scopri Men's Stylish Sneakers Sneakers with Wedge Heel Soft Sole Sneakers for Men with Soft Sole Breathable Toe Western Running Shoes for Men, un prodotto della categoria 'fashion' ideale per chi cerca qualità e convenienza. Perfetto per ogni occasione, combina stile e comfort.",
    "category": "fashion"
  },
  {
    "id": "prod81",
    "link": "https://www.amazon.com/dp/B08X19T334?tag=tony6401-21",
    "img": "https://m.media-amazon.com/images/I/81nOh4knyPL.__AC_SY445_SX342_QL70_ML2_.jpg",
    "nome": "Amazon Essentials Men's High-Waist Stretch Straight Jeans",
    "prezzo": "27.10 €",
    "descrizione": "Amazon Essentials It is focused on creating affordable, high-quality and long-lasting everyday clothing. Our men's must-have line includes polo shirts, chinos, classic shorts, casual buttons and crew neck t-shirts. Our consistent size just guesswork and each piece is put to the test to maintain the highest standards of quality and comfort.",
    "category": "fashion"
  },
  {
    "id": "prod82",
    "link": "https://www.amazon.com/dp/B0CWDXTKT3?tag=tony6401-21",
    "img": "https://m.media-amazon.com/images/I/81IpfF7o41L.__AC_SY445_SX342_QL70_ML2_.jpg",
    "nome": "SOXCO 10 Pairs Mens Long Reinforced Work Socks Work Socks",
    "prezzo": "19.99 €",
    "descrizione": "Introducing SOXCO's Work Socks: The Ultimate Solution for Anyone Who Needs Durable and Comfortable Work Socks. Made with high quality materials and advanced technologies, these socks are designed to keep your feet protected and comfortable all day long. SOXCO WORK socks feature thick, durable cushioning with premium elastic that lasts long and retains its shape. In addition, reinforced heel and toe areas provide extra protection and support, ensuring these socks last longer and offer better value for money. Proprietary DRI-WIK technology wicks moisture away from your feet, preventing blisters and other foot problems, while the HEX-COMB mesh with cushioning reduces foot fatigue, allowing you to comfortably focus on your work. At an affordable price, SOXCO WORK socks are the perfect budget choice for those looking for high quality work socks. Whether you work in construction, healthcare or any other profession that requires long hours on your feet, SOXCO WORK socks offer the perfect combination of durability, comfort and value for money. Buy your SOXCO WORK pair of socks today and experience the difference they make!",
    "category": "altro"
  },
  {
    "id": "prod83",
    "link": "https://www.amazon.com/dp/B097RV1D6R?tag=tony6401-21",
    "img": "https://m.media-amazon.com/images/I/81mZMvuvfYS.__AC_SY445_SX342_QL70_ML2_.jpg",
    "nome": "Amazon Essentials Women's Loose Fit Round Neck Short Sleeve T-Shirt (Plus Size Available)",
    "prezzo": "130.00 €",
    "descrizione": "An Amazon brand - This comfortable t-shirt combines a crew neck with a flowing line.",
    "category": "fashion"
  },
  {
    "id": "prod84",
    "link": "https://www.amazon.com/dp/B0B9MX76FB?tag=tony6401-21",
    "img": "https://m.media-amazon.com/images/I/9101cym+dhL._AC_SY300_SX300_.jpg",
    "nome": "Popglory Smartwatch for Men and Women, 2 Straps Watch Calls and WhatsApp, Pedometer, Voice Assistant, Digital Watch 24H Heart Rate Monitor, Blood Pressure SpO2 Sleep, Android iOS Gift",
    "prezzo": "39.00 €",
    "descrizione": "N/A",
    "category": "smartphone"
  },
  {
    "id": "prod85",
    "link": "https://www.amazon.com/dp/B08X2H31K5?tag=tony6401-21",
    "img": "https://m.media-amazon.com/images/I/81CWjDoZb6L.__AC_SY445_SX342_QL70_ML2_.jpg",
    "nome": "Amazon Essentials Relaxed Fit Fleece Joggers Jogging Bottoms for Men",
    "prezzo": "17.00 €",
    "descrizione": "Amazon Essentials It is focused on creating affordable, high-quality and long-lasting everyday clothing. Our men's must-have line includes polo shirts, chinos, classic shorts, casual buttons and crew neck t-shirts. Our consistent size just guesswork and each piece is put to the test to maintain the highest standards of quality and comfort.",
    "category": "altro"
  },
  {
    "id": "prod86",
    "link": "https://www.amazon.com/dp/B06Y57GNY1?tag=tony6401-21",
    "img": "https://m.media-amazon.com/images/I/91lDjTg1IyL.__AC_SX300_SY300_QL70_ML2_.jpg",
    "nome": "Amazon Basics - Hiking Backpack with Inner Frame and Rain Zip",
    "prezzo": "60.48 €",
    "descrizione": "N/A",
    "category": "altro"
  }
];

// Global variables
let currentProducts = [...products];
let displayedProducts = [];
let currentPage = 0;
const productsPerPage = 6;
let currentFilter = 'all';

// Data reset function - preserves only cart and user data
function resetLocalData() {
    try {
        // Save important data
        const dataToKeep = {
            cart: localStorage.getItem('cronoshop_data') ? JSON.parse(localStorage.getItem('cronoshop_data')).cart : null,
            currentUser: localStorage.getItem('cronoshop_data') ? JSON.parse(localStorage.getItem('cronoshop_data')).currentUser : null,
            darkMode: localStorage.getItem('darkMode'),
            themeMode: localStorage.getItem('themeMode'),
            glassMode: localStorage.getItem('glassMode')
        };

        // Clear all storage
        localStorage.clear();
        sessionStorage.clear();

        // Restore important data
        const cronoshopData = {};
        if (dataToKeep.cart) cronoshopData.cart = dataToKeep.cart;
        if (dataToKeep.currentUser) cronoshopData.currentUser = dataToKeep.currentUser;
        
        localStorage.setItem('cronoshop_data', JSON.stringify(cronoshopData));
        if (dataToKeep.darkMode) localStorage.setItem('darkMode', dataToKeep.darkMode);
        if (dataToKeep.themeMode) localStorage.setItem('themeMode', dataToKeep.themeMode);
        if (dataToKeep.glassMode) localStorage.setItem('glassMode', dataToKeep.glassMode);

        console.log('Local data reset completed, preserved cart and user data');
    } catch (error) {
        console.error('Error during data reset:', error);
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
        themeBtn.textContent = darkMode ? '☀️' : '🌙';
    }
}

// Load products data
function loadProductsData() {
    currentProducts = [...products];
    updateProductsStats();
}

// Update products stats
function updateProductsStats() {
    // Update global stats
    updateGlobalStats();
    
    // Update user stats
    updateUserStats();
}

// Update global stats
function updateGlobalStats() {
    const stats = {
        totalProducts: products.length,
        totalUsers: Math.floor(Math.random() * 5000) + 2500, // Simulated
        totalViews: Math.floor(Math.random() * 100000) + 50000, // Simulated
        avgDiscount: calculateAverageDiscount(),
        topCategory: getMostPopularCategory(),
        dailyDeals: Math.floor(Math.random() * 50) + 20
    };

    localStorage.setItem('globalStats', JSON.stringify(stats));
}

// Update user stats
function updateUserStats() {
    try {
        const savedData = localStorage.getItem('cronoshop_data');
        if (savedData) {
            const userData = JSON.parse(savedData);
            const userStats = {
                wishlistItems: (userData.wishlist || []).length,
                cartItems: (userData.cart || []).reduce((sum, item) => sum + item.quantity, 0),
                visitCount: parseInt(localStorage.getItem('visitCount') || '1'),
                lastVisit: new Date().toISOString(),
                favoriteCategory: getUserFavoriteCategory(userData)
            };

            localStorage.setItem('userStats', JSON.stringify(userStats));
        }
    } catch (error) {
        console.error('Error updating user stats:', error);
    }
}

// Calculate average discount
function calculateAverageDiscount() {
    const discounts = products
        .filter(p => p.discount)
        .map(p => parseInt(p.discount.replace('-', '').replace('%', '')));
    
    if (discounts.length === 0) return 0;
    return Math.round(discounts.reduce((sum, d) => sum + d, 0) / discounts.length);
}

// Get most popular category
function getMostPopularCategory() {
    const categories = {};
    products.forEach(p => {
        categories[p.category] = (categories[p.category] || 0) + 1;
    });
    
    return Object.keys(categories).reduce((a, b) => categories[a] > categories[b] ? a : b);
}

// Get user favorite category
function getUserFavoriteCategory(userData) {
    const wishlist = userData.wishlist || [];
    if (wishlist.length === 0) return 'smartphone';
    
    const categories = {};
    wishlist.forEach(item => {
        categories[item.category] = (categories[item.category] || 0) + 1;
    });
    
    return Object.keys(categories).reduce((a, b) => categories[a] > categories[b] ? a : b, 'smartphone');
}

// Filter products
function filterProducts(category) {
    currentFilter = category;
    currentPage = 0;
    
    if (category === 'all') {
        currentProducts = [...products];
    } else {
        currentProducts = products.filter(product => product.category === category);
    }
    
    renderProducts();
    showNotification(`Filtro applicato: ${category === 'all' ? 'Tutti i prodotti' : category}`);
}

// Render products
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    const startIndex = currentPage * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = currentProducts.slice(startIndex, endIndex);
    
    if (currentPage === 0) {
        grid.innerHTML = '';
        displayedProducts = [];
    }

    productsToShow.forEach((product, index) => {
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
        const hasMore = endIndex < currentProducts.length;
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
            <div class="product-overlay">
                <button class="overlay-btn wishlist-btn" data-id="${product.id}">❤️</button>
                <button class="overlay-btn share-btn" data-id="${product.id}">📤</button>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.nome}</h3>
            <div class="product-price">${priceHTML}</div>
            <p class="product-description">${product.descrizione}</p>
            <button class="buy-btn" data-id="${product.id}">
                🛒 Acquista su Amazon
            </button>
            <div class="product-actions">
                <button class="action-btn cart-btn" data-id="${product.id}">
                    🛍️ Carrello
                </button>
            </div>
        </div>
    `;

    // Add event listeners
    const buyBtn = card.querySelector('.buy-btn');
    const wishlistBtn = card.querySelector('.wishlist-btn');
    const cartBtn = card.querySelector('.cart-btn');
    const shareBtn = card.querySelector('.share-btn');

    if (buyBtn) {
        buyBtn.addEventListener('click', () => buyProduct(product.link));
    }
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', () => addToWishlist(product.id));
    }
    if (cartBtn) {
        cartBtn.addEventListener('click', () => addToCart(product.id));
    }
    if (shareBtn) {
        shareBtn.addEventListener('click', () => shareProduct(product));
    }

    return card;
}

// Buy product
function buyProduct(link) {
    window.open(link, '_blank');
    showNotification('Reindirizzamento ad Amazon...');
}

// Add to wishlist
function addToWishlist(productId) {
    try {
        const savedData = localStorage.getItem('cronoshop_data');
        let userData = {};
        if (savedData) {
            userData = JSON.parse(savedData);
        }
        
        let wishlist = userData.wishlist || [];
        const product = products.find(p => p.id === productId);
        
        if (product && !wishlist.find(item => item.id === productId)) {
            wishlist.push(product);
            userData.wishlist = wishlist;
            localStorage.setItem('cronoshop_data', JSON.stringify(userData));
            showNotification('Prodotto aggiunto alla wishlist');
            updateUserStats();
        } else if (wishlist.find(item => item.id === productId)) {
            showNotification('Prodotto già nella wishlist');
        }
    } catch (error) {
        console.error('Error adding to wishlist:', error);
    }
}

// Add to cart
function addToCart(productId) {
    try {
        const savedData = localStorage.getItem('cronoshop_data');
        let userData = {};
        if (savedData) {
            userData = JSON.parse(savedData);
        }
        
        let cart = userData.cart || [];
        const product = products.find(p => p.id === productId);
        
        if (product) {
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            
            userData.cart = cart;
            localStorage.setItem('cronoshop_data', JSON.stringify(userData));
            updateCartCount();
            showNotification('Prodotto aggiunto al carrello');
            updateUserStats();
        }
    } catch (error) {
        console.error('Error adding to cart:', error);
    }
}

// Share product
function shareProduct(product) {
    const shareText = `Guarda questa offerta su Cronoshop!\n\n${product.nome}\n${product.prezzo}\n\n${product.link}`;
    
    if (navigator.share) {
        navigator.share({
            title: product.nome,
            text: shareText,
            url: product.link
        });
    } else {
        navigator.clipboard.writeText(shareText).then(() => {
            showNotification('Link copiato negli appunti!');
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
function showNotification(message) {
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
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
}

// Theme toggle
function toggleTheme() {
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', !isDark);
    applyTheme();
    showNotification(`Tema ${!isDark ? 'scuro' : 'chiaro'} attivato`);
}

// Toggle search
function toggleSearch() {
    const searchContainer = document.getElementById('searchContainer');
    if (searchContainer) {
        searchContainer.classList.toggle('active');
        if (searchContainer.classList.contains('active')) {
            document.getElementById('searchInput').focus();
        }
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// Load more products
function loadMoreProducts() {
    currentPage++;
    renderProducts();
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Reset local data first
    resetLocalData();
    
    // Apply theme
    applyTheme();
    
    // Load data
    loadProductsData();
    updateCartCount();
    
    // Increment visit count
    let visitCount = parseInt(localStorage.getItem('visitCount') || '0');
    visitCount++;
    localStorage.setItem('visitCount', visitCount.toString());
    
    // Update user widget
    updateUserWidget();
    
    // Render products if on main page
    if (document.getElementById('productsGrid')) {
        renderProducts();
    }

    // Setup event listeners
    setupEventListeners();

    // Add fade-in animation to cards
    setTimeout(() => {
        const elements = document.querySelectorAll('.glass-card');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('fade-in');
            }, index * 100);
        });
    }, 100);
});

// Setup event listeners
function setupEventListeners() {
    // Theme button
    const themeBtn = document.querySelector('.theme-btn');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }

    // Search button
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', toggleSearch);
    }

    // Mobile menu button
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            filterProducts(category);
            
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Load more button
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreProducts);
    }

    // Hero button
    const heroBtn = document.querySelector('.hero .primary-btn');
    if (heroBtn) {
        heroBtn.addEventListener('click', function() {
            document.getElementById('offerte').scrollIntoView({ behavior: 'smooth' });
        });
    }
}

// Update user widget
function updateUserWidget() {
    try {
        const savedData = localStorage.getItem('cronoshop_data');
        if (savedData) {
            const userData = JSON.parse(savedData);
            const currentUser = userData.currentUser;
            
            const userName = document.querySelector('.user-name');
            const userPoints = document.querySelector('.user-points');
            const userAction = document.querySelector('.user-actions .mini-btn');
            
            if (currentUser) {
                if (userName) userName.textContent = currentUser.name;
                if (userPoints) userPoints.textContent = `${currentUser.points || 0} punti`;
                if (userAction) {
                    userAction.textContent = 'Profilo';
                    userAction.href = 'account.html';
                }
            } else {
                if (userName) userName.textContent = 'Ospite';
                if (userPoints) userPoints.textContent = '0 punti';
                if (userAction) {
                    userAction.textContent = 'Accedi';
                    userAction.href = 'account.html';
                }
            }
        }
    } catch (error) {
        console.error('Error updating user widget:', error);
    }
}

// Export functions for global use
window.filterProducts = filterProducts;
window.addToWishlist = addToWishlist;
window.addToCart = addToCart;
window.buyProduct = buyProduct;
window.shareProduct = shareProduct;
window.toggleTheme = toggleTheme;
window.toggleSearch = toggleSearch;
window.toggleMobileMenu = toggleMobileMenu;
window.loadMoreProducts = loadMoreProducts;
window.showNotification = showNotification;
