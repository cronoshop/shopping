// Cronoshop JavaScript - Minimal White/Blue Design
// Product Data
const products = [
  {
    id: "prod1",
    link: "https://amzn.to/3Z551fa",
    img: "https://m.media-amazon.com/images/I/61hiFJPpY9L._AC_SL1500_.jpg",
    nome: "Samsung Galaxy S25 Ultra",
    prezzo: "1.199€",
    descrizione: "Smartphone AI con display 6.9\" QHD+ Dynamic AMOLED 2X, fotocamera da 200MP, RAM 12GB, memoria interna da 256GB, batteria da 5000 mAh. Colore Titanium Silverblue. Garanzia 3 anni."
  },
  {
    id: "prod2",
    link: "https://amzn.to/4mB7UhK",
    img: "https://m.media-amazon.com/images/I/71b8mpCMTOL._AC_SL1500_.jpg",
    nome: "by Amazon Quinoa biologica, 500g",
    prezzo: "5,49€",
    descrizione: "Quinoa biologica di alta qualità, ricca di proteine e fibre. Perfetta per insalate e piatti salutari."
  },
  {
    id: "prod3",
    link: "https://www.amazon.it/dp/B0CHWV5HTM",
    img: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_SL1500_.jpg",
    nome: "Apple iPhone 15",
    prezzo: `<span style="text-decoration: line-through; color: #888;">879,00€</span> <span style="color: #007aff; font-weight: bold;">645,00€</span> <span style="color: red; font-weight: bold;">-27%</span>`,
    descrizione: "Prestazioni top per l'uso quotidiano."
  },
  {
    id: "prod4",
    link: "https://amzn.to/4kCH9aV",
    img: "https://m.media-amazon.com/images/I/618ha2Ia5tL._AC_SL1500_.jpg",
    nome: "Samsung Galaxy S25 Smartphone AI",
    prezzo: "929,00€",
    descrizione: "Smartphone con display 6.2'' FHD+ Dynamic AMOLED 2X, fotocamera da 50MP, RAM 12GB, memoria interna 256GB, batteria da 4.000 mAh. Include 3 anni di garanzia del produttore. Colore: Mint."
  },
  {
    id: "prod5",
    link: "https://amzn.to/3ZAt8T4",
    img: "https://m.media-amazon.com/images/I/61Wj-1t3TwL._AC_SL1500_.jpg",
    nome: "SAMSUNG Galaxy S25 Edge",
    prezzo: "1.299,00€",
    descrizione: "Smartphone AI con display 6.7'' QHD+ Dynamic AMOLED 2X, fotocamera da 200MP, RAM 12GB, memoria interna da 512GB, batteria da 3.900 mAh. Include 3 anni di garanzia del produttore. Colore: Titanium Jetblack."
  },
  {
    id: "prod6",
    link: "https://amzn.to/45gPEUX",
    img: "https://m.media-amazon.com/images/I/61y0hmQWlsL._AC_SL1500_.jpg",
    nome: "Samsung Galaxy S25+ Smartphone AI",
    prezzo: "1.189,00€",
    descrizione: "Smartphone AI con display 6.7'' QHD+ Dynamic AMOLED 2X, fotocamera da 50MP, RAM 12GB, memoria interna da 512GB, batteria da 4.900 mAh. Include 3 anni di garanzia del produttore. Colore: Silver Shadow. Versione italiana."
  },
  {
    id: "prod7",
    link: "https://amzn.to/3Z6Kc2W",
    img: "https://m.media-amazon.com/images/I/610vqacJO2L.__AC_SY445_SX342_QL70_ML2_.jpg",
    nome: "Apple iPhone 16e – 128 GB",
    prezzo: "699,00€",
    descrizione: "Progettato per Apple Intelligence, dotato di chip A18, autonomia grandiosa, fotocamera Fusion da 48MP e display Super Retina XDR da 6,1\". Colore: Bianco."
  },
  {
    id: "prod8",
    link: "https://amzn.to/3ZEqKut",
    img: "https://m.media-amazon.com/images/I/61cUeqowwZL._AC_SL1500_.jpg",
    nome: "Apple iPhone 16 Pro Max – 256 GB",
    prezzo: "1.195,00€",
    descrizione: "Telefono 5G con controllo fotocamera avanzato, registrazione video Dolby Vision 4K a 120 fps e autonomia senza precedenti. Compatibile con AirPods. Colore: Titanio Nero."
  },
  {
    id: "prod9",
    link: "https://amzn.to/43t1D0l",
    img: "https://m.media-amazon.com/images/I/61BGE6iu4AL.__AC_SY445_SX342_QL70_ML2_.jpg",
    nome: "Apple iPhone 14 Plus – 128 GB",
    prezzo: "871,00€",
    descrizione: "Smartphone Apple con 128 GB di memoria, display Super Retina XDR da 6,7\", ottime prestazioni e autonomia, colore Azzurro. Un mix di potenza e stile."
  },
  {
    id: "prod10",
    link: "https://amzn.to/4mBncTC",
    img: "https://m.media-amazon.com/images/I/51v1hYXGsdL._AC_SL1500_.jpg",
    nome: "Google Pixel 9 Pro XL",
    prezzo: "879,00€",
    descrizione: "Smartphone Android sbloccato con Gemini, sistema a tripla fotocamera posteriore, batteria con autonomia fino a 24 ore e display Super Actua da 6,8\". Colore: Grigio Verde. Memoria: 128GB."
  },
  {
    id: "prod11",
    link: "https://m.media-amazon.com/images/I/51v1hYXGsdL._AC_SL1500_.jpg",
    nome: "Google Pixel 9 Pro XL",
    prezzo: "879,00€",
    descrizione: "Smartphone Android sbloccato con Gemini, sistema a tripla fotocamera posteriore, batteria con autonomia fino a 24 ore e display Super Actua da 6,8\". Colore: Grigio Verde. Memoria: 128GB."
  },
  {
    id: "prod12",
    link: "https://amzn.to/4jlRfvO",
    img: "https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_SL1500_.jpg",
    nome: "Apple iPhone 14 Pro Max – 128 GB (Ricondizionato)",
    prezzo: "689,00€",
    descrizione: "iPhone 14 Pro Max ricondizionato in ottime condizioni, con 128 GB di memoria e finitura Deep Purple. La qualità Apple con un ottimo risparmio."
  },
  {
    id: "prod13",
    link: "https://amzn.eu/d/j40eOtX",
    img: "https://m.media-amazon.com/images/I/619HAuZ95QL._AC_SL1500_.jpg",
    nome: "iPhone 16 (128GB) - Nero",
    prezzo: "759€",
    descrizione: "Altissima qualità Apple"
  },
  {
    id: "prod14",
    link: "https://amzn.to/3SnXwfz",
    img: "https://m.media-amazon.com/images/I/41sNR0PJCaL._AC_SX569_.jpg",
    nome: "SSC NAPOLI Maglietta Campioni",
    prezzo: "30€",
    descrizione: "Maglia ufficiale celebrativa"
  },
  {
    id: "prod15",
    link: "https://amzn.to/4kbOb6E",
    img: "https://m.media-amazon.com/images/I/71BHou6YJKL._AC_SY879_.jpg",
    nome: "Calvin Klein T-Shirt Uomo",
    prezzo: "18€",
    descrizione: "Stile minimal, 100% cotone"
  },
  {
    id: "prod16",
    link: "https://amzn.to/43xa5u6",
    img: "https://m.media-amazon.com/images/I/51V1TTs1U2L._AC_SX569_.jpg",
    nome: "adidas Squadra25 Jersey Short Sleeve T-Shirt Uomo",
    prezzo: "14,99€ (prima 23,00€, -35%)",
    descrizione: ""
  },
  {
    id: "prod17",
    link: "https://www.amazon.it/dp/B0F1P4F8SR/ref=cm_sw_r_as_gl_apa_gl_i_HYDVV9DGWX2M1DGRM3X2?linkCode=ml1&tag=tony6401-21",
    img: "https://m.media-amazon.com/images/I/71GSwlTsPDL.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "Sunsilk Crema Onde Meravigliose Crema Styling Capelli Mossi, Effetto Anticrespo",
    prezzo: "5,99€ (prima 32,34€, -81%)",
    descrizione: "Styling perfetto per capelli mossi, effetto anticrespo a lunga durata."
  },
  {
    id: "prod18",
    link: "https://amzn.to/4kGcGJg",
    img: "https://m.media-amazon.com/images/I/6171T++Z2mL._AC_SL1095_.jpg",
    nome: "Caffè Borbone Cialda Compostabile, Miscela Oro - 100 Cialde",
    prezzo: "15,19€ (prima 16,00€, -5%)",
    descrizione: "Prezzo consigliato: 22,34€ -32% di sconto"
  },
  {
    id: "prod19",
    link: "https://amzn.to/3Fbh43W",
    img: "https://m.media-amazon.com/images/I/8120xtA5GaL._AC_SL1500_.jpg",
    nome: "King C. Gillette Kit REGOLABARBA Uomo",
    prezzo: "27,37€",
    descrizione: "Kit professionale: Testina, 3 Pettini Regolatori, Spazzolina, Caricatore. Rasoio elettrico, idea regalo."
  },
  {
    id: "prod20",
    link: "https://amzn.to/3Ssmcnb",
    img: "https://m.media-amazon.com/images/I/31SLM5sJK4L.__AC_SY300_SX300_QL70_ML2_.jpg",
    nome: "Samsung Galaxy S24 Ultra – 12GB / 256GB",
    prezzo: "864,90€",
    descrizione: "Smartphone top di gamma Samsung, 12GB RAM, 256GB memoria, colore Black. Prestazioni e design premium."
  },
  {
    id: "prod21",
    link: "https://amzn.to/3SUojjE",
    img: "https://m.media-amazon.com/images/I/812azAWbm2L.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "Oral-B Testine Di Ricambio Original",
    prezzo: "24,99€",
    descrizione: "10 testine Pro Cross Action per spazzolino elettrico Oral-B, ricambio originale."
  },
  {
    id: "prod22",
    link: "https://amzn.to/4jhgwHr",
    img: "https://m.media-amazon.com/images/I/51B45gaTgjL._AC_SL1000_.jpg",
    nome: "Amazon Fire TV Stick HD",
    prezzo: "28,99€",
    descrizione: "Amazon Fire TV Stick HD (Ultimo modello), TV gratuita e in diretta, telecomando vocale Alexa, controlli per Casa Intelligente, streaming HD."
  },
  {
    id: "prod23",
    link: "https://amzn.to/4dCu1QL",
    img: "https://m.media-amazon.com/images/I/618HDC8rPXL.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "Bronzi® Portafoglio Uomo Slim Piccolo",
    prezzo: "22,99€",
    descrizione: "Portacarte uomo e donna, portatessere con protezione RFID, porta carte di credito e portamonete. Mini, slim, con box regalo. Brand italiano di qualità."
  },
  {
    id: "prod24",
    link: "https://amzn.to/4kEfeHI",
    img: "https://m.media-amazon.com/images/I/61oxHY8kFbL._AC_SX569_.jpg",
    nome: "Vittorio Y Camicia Donna in Cotone e Lino",
    prezzo: "19,99€",
    descrizione: "Camicia casual tinta unita, comoda e traspirante, perfetta per la stagione calda. Resi gratuiti su Amazon."
  },
  {
    id: "prod25",
    link: "https://amzn.to/4dF2SwD",
    img: "https://m.media-amazon.com/images/I/618FhFPg8+L._AC_SX575_.jpg",
    nome: "Nike Air Force 1 '07 Lv8 4",
    prezzo: "116,00€",
    descrizione: "Scarpe da basket uomo, modello iconico Nike Air Force 1 con design classico e comfort duraturo."
  },
  {
    id: "prod26",
    link: "https://amzn.to/3Z7S8Rr",
    img: "https://m.media-amazon.com/images/I/41vC0GMKWJL._AC_SY695_.jpg",
    nome: "adidas Breaknet Lifestyle Court Lace Shoes",
    prezzo: "28,80€",
    descrizione: "Scarpe da tennis unisex per bambini e ragazzi. Prezzo più basso ultimi 30 giorni: 32,73€. Offerta a tempo con risparmio del 12% rispetto al prezzo recente."
  },
  {
    id: "prod27",
    link: "https://amzn.to/4dCt9LX",
    img: "https://m.media-amazon.com/images/I/71XHPuLiHVL._AC_SY606_.jpg",
    nome: "Nike Everyday Cush Crew Calze Uomo",
    prezzo: "14,99€",
    descrizione: "Calze da uomo Nike, modello Everyday Cush Crew, ideali per comfort quotidiano e performance sportive."
  },
  {
    id: "prod28",
    link: "https://amzn.to/4kFlpLJ",
    img: "https://m.media-amazon.com/images/I/71ZfLtLMYyL._AC_SX679_.jpg",
    nome: "Smart Sir Calzini Sportivi Uomo e Donna (4 paia)",
    prezzo: "9,49€",
    descrizione: "Calzini lunghi in cotone di alta qualità, comodi e traspiranti. Prezzo più basso ultimi 30 giorni: 9,99€. Offerta a tempo."
  },
  {
    id: "prod29",
    link: "https://amzn.to/3Z7eYZz",
    img: "https://m.media-amazon.com/images/I/51kcic+JN-L._AC_SL1095_.jpg.jpg",
    nome: "Caffè Borbone Respresso, Miscela Blu - 100 Capsule",
    prezzo: "19,49€",
    descrizione: "Caffè Borbone Respresso, Miscela Blu - 100 Capsule - Compatibili con le Macchine ad uso domestico Nespresso"
  },
  {
    id: "prod30",
    link: "https://amzn.to/43PvEHy",
    img: "https://m.media-amazon.com/images/I/81irfL63EQL.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "Samsung Galaxy S22+ 5G – 128GB (Ricondizionato)",
    prezzo: "284,99€",
    descrizione: "Smartphone ricondizionato con SIM singola + e-SIM, colore Phantom Black, memoria 128GB. Risparmia 155,00€ rispetto al prezzo nuovo."
  },
  {
    id: "prod31",
    link: "https://amzn.to/3HsKGdy",
    img: "https://m.media-amazon.com/images/I/61CY-+ZEN6L._AC_SY300_SX300_.jpg",
    nome: "Samsung Galaxy S21 Ultra 5G – 128GB (Ricondizionato)",
    prezzo: "294,99€",
    descrizione: "Smartphone ricondizionato, RAM 12GB, Dual SIM (e-SIM), colore Nero. Ottima occasione con risparmio di 155,00€ rispetto al prezzo nuovo."
  },
  {
    id: "prod32",
    link: "https://amzn.to/3FcZUD1",
    img: "https://m.media-amazon.com/images/I/61pc4vR8BoL._AC_SL1500_.jpg",
    nome: "Samsung Galaxy A16",
    prezzo: "120,98€",
    descrizione: "Samsung Galaxy A16 Smartphone Android 14, Display Super AMOLED 6.7\" FHD+, 4GB RAM, 128GB, Batteria 5.000 mAh, Resistenza IP54, memoria espandibile fino a 1.5TB, Black"
  },
  {
    id: "prod33",
    link: "https://amzn.to/43ECrTf",
    img: "https://m.media-amazon.com/images/I/616+oTRo6-L._AC_SL1500_.jpg",
    nome: "Samsung Galaxy A56 5G",
    prezzo: "342,68€",
    descrizione: "Samsung Galaxy A56 5G, smartphone Android, 256 GB di memoria, 8 GB di RAM, antracite, aggiornamento del sistema operativo 6X, grande schermo, lunga durata della batteria"
  },
  {
    id: "prod34",
    link: "https://amzn.to/43gLxGT",
    img: "https://m.media-amazon.com/images/I/61waTtq8hCL._AC_SL1500_.jpg",
    nome: "GALAXY A26 5G – 8GB + 256GB",
    prezzo: "234,69€",
    descrizione: "Smartphone GALAXY A26 5G con 8GB di RAM e 256GB di memoria interna. Colore: Black."
  },
  {
    id: "prod35",
    link: "https://amzn.to/43RhVzW",
    img: "https://m.media-amazon.com/images/I/713AzRHXYeL._AC_SL1500_.jpg",
    nome: "UpCircle Cotton fioc di bambù – 200 pezzi –",
    prezzo: "5,49€",
    descrizione: "UpCircle Cotton fioc di bambù – 200 pezzi – biodegradabili, sostenibili, senza plastica, completamente riciclabili – un punto fermo per qualsiasi bagno"
  },
  {
    id: "prod36",
    link: "https://amzn.to/3FoIjIi",
    img: "https://m.media-amazon.com/images/I/61MKKroaphL.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "Supradyn Energy Multivitaminico – 70 Caramelle",
    prezzo: "11,19€",
    descrizione: "Integratore multivitaminico con vitamine A, B, C, D, E e Coenzima Q10. 70 caramelle gommose al gusto ciliegia, lampone e arancia."
  },
  {
    id: "prod37",
    link: "https://amzn.to/4jnbTvu",
    img: "https://m.media-amazon.com/images/I/51HcFzY9EmL._AC_SL1080_.jpg",
    nome: "ZPAPER - 6 Rotoli Asciugamani",
    prezzo: "29,95€",
    descrizione: "Pura cellulosa, 2 veli, confezionati. Rotoloni asciugatutto multiuso per pulire i disastri."
  },
  {
    id: "prod38",
    link: "https://amzn.to/4jrHVq9",
    img: "https://m.media-amazon.com/images/I/91krk-VZlwL._AC_SL1500_.jpg",
    nome: "Amazon Basics Cerniera Sacchetti di stoccaggio sottovuoto",
    prezzo: "27,19€",
    descrizione: "20 unità con pompa a mano, per risparmiare spazio con efficienza e semplicità."
  },
  {
    id: "prod39",
    link: "https://amzn.to/43PsHqs",
    img: "https://m.media-amazon.com/images/I/7107Ze-04CL._AC_SL1500_.jpg",
    nome: "Amazon Basics - 8 Batterie Ricaricabili AA NiMH",
    prezzo: "13,52€",
    descrizione: "2000 mAh, ricaricabili fino a 1000 volte, pre-caricate e pronte all'uso."
  },
  {
    id: "prod40",
    link: "https://amzn.to/44Xo3rC",
    img: "https://m.media-amazon.com/images/I/812hFM3JmTL._AC_SL1500_.jpg",
    nome: "Fabuloso Ammorbidente Concentrato - 4x1,25L",
    prezzo: "18,72€",
    descrizione: "Profumo Fresco Mattino, 224 lavaggi. Fragranza attivata dal movimento, facilita la stiratura e lascia i capi morbidi e profumati."
  },
  {
    id: "prod41",
    link: "https://amzn.to/4mChp0i",
    img: "https://m.media-amazon.com/images/I/61QKPdoU5TL.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "ZPAPER - 60 Rotoli di Carta Igienica",
    prezzo: "32,36€",
    descrizione: "60 rotoli, 250 fogli per rotolo, 2 veli, morbida e resistente. Ideale per casa o ufficio."
  },
  {
    id: "prod42",
    link: "https://amzn.to/3Hfvl04",
    img: "https://m.media-amazon.com/images/I/617i66nvMxL._AC_SY741_.jpg",
    nome: "Vitamina B12 Vegan 365 Compresse PiùLife",
    prezzo: "14,30€",
    descrizione: "Vitamina B12 Cianocobalamina, per sistema immunitario e riduzione stanchezza fisica e mentale. 1000 mcg."
  },
  {
    id: "prod43",
    link: "https://amzn.to/4dM4hSk",
    img: "https://m.media-amazon.com/images/I/71uuRXQz1JL._AC_SL1500_.jpg",
    nome: "Magnesio Citrato Vegano Tamponato (240 Capsule)",
    prezzo: "17,09€",
    descrizione: "Con 444mg polvere elementare, riduce stanchezza e affaticamento, senza additivi né glutine."
  },
  {
    id: "prod44",
    link: "https://amzn.to/4jq1SOj",
    img: "https://m.media-amazon.com/images/I/71GXfnVPsPL.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "Zzzquil Natura Integratore Per Il Sonno",
    prezzo: "36,99€",
    descrizione: "Melatonina con estratti di lavanda, valeriana e camomilla. Maxi formato 2x72 pastiglie gommose per favorire il sonno."
  },
  {
    id: "prod45",
    link: "https://amzn.to/3Z3U39Q",
    img: "https://m.media-amazon.com/images/I/71NY7I+OLQL._AC_SY300_SX300_.jpg",
    nome: "Novanight Tripla Azione Melatonina per Dormire",
    prezzo: "23,21€",
    descrizione: "Integratore per disturbi del sonno, senza glutine. Contiene melatonina, escolzia, passiflora e melissa. Non induce dipendenza."
  },
  {
    id: "prod46",
    link: "https://amzn.to/43PEXay",
    img: "https://m.media-amazon.com/images/I/61NUQEFRTFL._AC_SX522_.jpg",
    nome: "SWISSE Ultivit - Multivitaminico Ragazza (60 Compresse)",
    prezzo: "13,46€",
    descrizione: "Multivitaminico con zinco e vitamine per riduzione stanchezza e supporto sistema immunitario. Integratore con ferro, made in Italy."
  },
  {
    id: "prod47",
    link: "https://amzn.to/4mAMTnv",
    img: "https://m.media-amazon.com/images/I/51AyIO7mVXL._AC_SX569_.jpg",
    nome: "N-K PULABO Anello Intelligente Temperatura In Acciaio Inox",
    prezzo: "1,82€",
    descrizione: "Anello per coppie e amanti, cambia colore in base alla temperatura e all’umore. Unisex, in acciaio inox di alta qualità e design alla moda."
  },
  {
    id: "prod48",
    link: "https://amzn.to/4jlkrDe",
    img: "https://m.media-amazon.com/images/I/81Ev1JwtPhL._AC_SX569_.jpg",
    nome: "Amazon Essentials T-Shirt Basic Uomo - Pacco da 6",
    prezzo: "25,99€",
    descrizione: "Magliette girocollo in cotone, versatili e morbide, ideali per ogni occasione. Qualità Amazon Essentials in un conveniente pacco da 6."
  },
  {
    id: "prod49",
    link: "https://amzn.to/3SUAqNE",
    img: "https://m.media-amazon.com/images/I/61KSB-CGSyL._AC_SX569_.jpg",
    nome: "ALPIDEX T-Shirt Uomo - Confezione da 5",
    prezzo: "39,99€",
    descrizione: "Magliette da uomo con girocollo disponibili in varie taglie dalla S alla 5XL. Perfette per tutti i giorni, comode e resistenti."
  },
  {
    id: "prod50",
    link: "https://amzn.to/3Z60eKn",
    img: "https://m.media-amazon.com/images/I/81Auh7uuz1L._AC_SX466_.jpg",
    nome: "Amazon Essentials Felpa con Cappuccio Donna",
    prezzo: "19,60€",
    descrizione: "Felpa da donna in pile, con cappuccio e cerniera. Calda, comoda e ideale per l’uso quotidiano. Disponibile in vari colori e taglie."
  },
  {
    id: "prod51",
    link: "https://amzn.to/43qkEio",
    img: "https://m.media-amazon.com/images/I/61V8VUE1dFL.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "Amazfit Bip 5 Smartwatch 46 mm",
    prezzo: "57,99€",
    descrizione: "Smartwatch con schermo grande, chiamate Bluetooth, Alexa integrata, GPS, durata batteria 10 giorni, fitness tracker con battito cardiaco e monitoraggio ossigeno nel sangue."
  },
  {
    id: "prod52",
    link: "https://amzn.to/4jlczlj",
    img: "https://m.media-amazon.com/images/I/51Kmnt241oL.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "Imou 3MP Telecamera Wi-Fi Interno",
    prezzo: "22,99€",
    descrizione: "Videocamera di sorveglianza 2K con tracciamento del movimento, rilevamento umano, audio bidirezionale e connessione 2,4GHz. Perfetta per la sicurezza domestica."
  },
  {
    id: "prod53",
    link: "https://amzn.to/43GhYgW",
    img: "https://m.media-amazon.com/images/I/81UE75N+r1L._AC_SL1500_.jpg",
    nome: "SEHMUA 4G LTE Telecamera Esterno senza Fili, Telecamera con Sim, 2K 360 PTZ, con Pannello Solare e Batterie",
    prezzo: "51,43€",
    descrizione: "Marca: SEHMUA. 4,3 su 5 stelle (134 recensioni). Amazon Choice. 200+ acquistati nel mese scorso. Offerta a tempo! Prezzo più basso ultimi 30 giorni: 54,14€"
  },
  {
    id: "prod54",
    link: "https://amzn.to/4kg3QC7",
    img: "https://m.media-amazon.com/images/I/71dy+yYz4iL._AC_SX522_.jpg",
    nome: "Amazon Essentials Maglietta Intima con Scollo A V",
    prezzo: "25,99€",
    descrizione: "Pacco da 6 magliette intime da uomo, traspiranti e in cotone, perfette per il comfort quotidiano."
  },
  {
    id: "prod55",
    link: "https://amzn.to/4mB7UhK",
    img: "https://m.media-amazon.com/images/I/71b8mpCMTOL.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "by Amazon Quinoa biologica, 500g",
    prezzo: "5,49€",
    descrizione: ""
  },
  {
  "id": "prod56",
  "link": "https://amzn.to/3HusXTd",
  "img": "https://m.media-amazon.com/images/I/71Cm4at5uAL._AC_SL1500_.jpg",
  "nome": "NEW'C 3 Pezzi, Vetro Temperato per iPhone 16, iPhone 15 (6,1 Pollici)",
  "prezzo": "7,89€",
  "descrizione": "Pellicola protettiva anti graffio - ultra resistente - trasparente HD - strumento di installazione facile incluso. Prezzo per unità: 2,63€."
  },
  {
  "id": "prod57",
  "link": "https://amzn.to/3FozrT6",
  "img": "https://m.media-amazon.com/images/I/71+5mYCqy7S._AC_SX342_SY445_.jpg",
  "nome": "Apple AirTag",
  "prezzo": "28,99€",
  "descrizione": "Dispositivo di localizzazione Bluetooth per ritrovare oggetti come chiavi, zaini e altro tramite l'app Dov'è su iPhone."
  },
  {
  "id": "prod58",
  "link": "https://amzn.to/3T8pQCT",
  "img": "https://m.media-amazon.com/images/I/71fRnkkqVdL.__AC_SX300_SY300_QL70_ML2_.jpg",
  "nome": "HP 305 Nero e Tricromia, 6ZD17AE - Confezione da 2 Cartucce Originali",
  "prezzo": "24,99€",
  "descrizione": "Compatibili con stampanti HP DeskJet serie 2300, 2700, 2800, 4200, 4100, HP Envy 6010, 6020, 6030 e 6040. Prezzo per cartuccia: 12,50€."
  },
  {
  "id": "prod59",
  "link": "https://amzn.to/4dTbdNq",
  "img": "https://m.media-amazon.com/images/I/61DvMw16ITL.__AC_SY445_SX342_QL70_ML2_.jpg",
  "nome": "Apple AirPods 4",
  "prezzo": "128,99€",
  "descrizione": "Auricolari wireless Bluetooth con audio spaziale personalizzato, resistenza al sudore e all’acqua, custodia di ricarica USB-C, chip H2, fino a 24 ore di autonomia."
  },
  {
  "id": "prod60",
  "link": "https://amzn.to/3SEY4xJ",
  "img": "https://m.media-amazon.com/images/I/61fSyWVkrYL.__AC_SY300_SX300_QL70_ML2_.jpg",
  "nome": "Tapo C200 Telecamera Wi-Fi Interno FHD, Videocamera sorveglianza, Visione Notturna, 360° Visuale, Audio Bidirezionale, Rilevamento di movimento e notifiche, Allarme acustico e luminoso integrato",
  "prezzo": "21,99€ (-27%)",
  "descrizione": "<span class='badge-animated'>Scelta Amazon</span> - 5000+ acquistati nel mese scorso, valutazione 4,6 su 5 (136.881 recensioni)"
  },
  {
  "id": "prod61",
  "link": "https://amzn.to/4kCXBZd",
  "img": "https://m.media-amazon.com/images/I/61c9X3+N4AL._AC_SX300_SY300_.jpg",
  "nome": "Caricatore USB C Rapido 40W 4Porto Presa USB Caricatore Multipla PD & QC3.0 Carica Cellulare, Spina Alimentatore Caricabatterie per Samsung S22 S23 S24 iPhone 15 16 14, Spinotto Muro Adattatore",
  "prezzo": "10,99€",
  "descrizione": "<span class='badge-animated'>Scelta Amazon</span> - 5000+ acquistati nel mese scorso, valutazione 4,6 su 5 (3.438 recensioni). Disponibile anche con coupon 20% e varianti Medium, Medium+Cavo USB C a USB C (14,99€), Large+2Pack (20,99€, -13%)"
  }
  {
  "id": "prod62",
  "link": "https://amzn.to/3FUVgJY",
  "img": "https://m.media-amazon.com/images/I/91MSouIX7HL._AC_SX466_.jpg",
  "nome": "Amazon Essentials Felpa con Cappuccio e Cerniera Integrale in Pile (Big & Tall) - Uomo",
  "prezzo": "21,60€",
  "descrizione": "Felpa in pile con cappuccio, comoda e calda, adatta a tutte le taglie, anche Big & Tall. Design classico con zip frontale.",
  "category": "fashion"
}
{
  "id": "prod63",
  "link": "https://amzn.to/4mZh5sw",
  "img": "https://m.media-amazon.com/images/I/61aAOFdLzJL.__AC_SX395_SY395_QL70_ML2_.jpg",
  "nome": "ASICS Gel-Excite 9 Scarpe da Corsa, Uomo",
  "prezzo": "127,66€",
  "descrizione": "Scarpe da corsa leggere e ammortizzate, ideali per allenamenti e uso quotidiano. Disponibili in varie taglie EU. Resi gratuiti inclusi.",
  "category": "fashion"
}
{
  "id": "prod64",
  "link": "https://amzn.to/3SRisMa",
  "img": "https://m.media-amazon.com/images/I/91MEK1bV2lL.__AC_SY445_SX342_QL70_ML2_.jpg",
  "nome": "Joma Men's Supernova III T-Shirt",
  "prezzo": "21,99€",
  "descrizione": "Maglietta sportiva da uomo, leggera e traspirante. Disponibile in varie taglie dalla 6XS alla XL. Resi gratuiti inclusi.",
  "category": "fashion"
}
];

// Add affiliate tags to Amazon links
products.forEach(product => {
    if (product.link.includes('amazon.') && !product.link.includes('tag=tony6401-21')) {
        try {
            const url = new URL(product.link);
            url.searchParams.set('tag', 'tony6401-21');
            product.link = url.toString();
        } catch (e) {
            // Invalid link, ignore
        }
    }
});

// Global Variables
let currentProducts = [...products];
let displayedProducts = [];
let currentPage = 0;
const productsPerPage = 12;
let currentFilter = 'all';
let cart = [];
let wishlist = [];
let currentUser = null;

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    loadProductsGrid();
    setupEventListeners();
    loadUserData();
    updateCartCount();
    
    // Add fade-in animation to elements
    setTimeout(() => {
        const elements = document.querySelectorAll('.glass-card');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('fade-in');
            }, index * 100);
        });
    }, 100);
}

function setupEventListeners() {
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            filterProducts(category);
            
            // Update active button
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(searchProducts, 300));
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });
    }

    // Search button
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', toggleSearch);
    }

    // Theme button
    const themeBtn = document.querySelector('.theme-btn');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Hero scroll button
    const heroBtn = document.querySelector('.hero .primary-btn');
    if (heroBtn) {
        heroBtn.addEventListener('click', scrollToProducts);
    }

    // Load more button
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreProducts);
    }

    // Close modals when clicking outside
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-overlay')) {
            closeAllModals();
        }
    });

    // Close buttons in modals
    const closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal-overlay');
            if (modal) {
                closeModal(modal.id);
            }
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllModals();
            // Close mobile menu if open
            const navMenu = document.getElementById('navMenu');
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        }
    });
}

// Product Functions
function loadProductsGrid() {
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
        
        // Add staggered animation
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

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'glass-card product-card';
    card.setAttribute('data-category', product.category);
    
    // Format price display
    let priceHTML = `<span class="current-price">${product.prezzo}</span>`;
    if (product.originalPrice && product.discount) {
        priceHTML = `
            <div class="price-container">
                <span class="original-price">${product.originalPrice}</span>
                <span class="current-price">${product.prezzo}</span>
                <span class="discount-badge">${product.discount}</span>
            </div>
        `;
    }

    card.innerHTML = `
        <div class="product-image-container">
            <img src="${product.img}" alt="${product.nome}" class="product-image" loading="lazy">
            <div class="product-overlay">
                <button class="overlay-btn wishlist-btn" data-id="${product.id}">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
                <button class="overlay-btn cart-btn" data-id="${product.id}">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="m1 1 4 4 2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                </button>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.nome}</h3>
            <div class="product-price">${priceHTML}</div>
            <p class="product-description">${product.descrizione}</p>
            <div class="product-actions">
                <button class="glass-btn primary-btn buy-btn" data-id="${product.id}">
                    🛒 Acquista su Amazon
                </button>
                <div class="secondary-actions">
                    <button class="action-btn wishlist-btn" data-id="${product.id}">
                        ❤️
                    </button>
                    <button class="action-btn cart-btn" data-id="${product.id}">
                        🛍️
                    </button>
                    <button class="action-btn share-btn" data-id="${product.id}">
                        📤
                    </button>
                </div>
            </div>
        </div>
    `;

    // Add event listeners to buttons
    const wishlistBtns = card.querySelectorAll('.wishlist-btn');
    const cartBtns = card.querySelectorAll('.cart-btn');
    const buyBtn = card.querySelector('.buy-btn');
    const shareBtn = card.querySelector('.share-btn');

    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            addToWishlist(product.id);
        });
    });

    cartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(product.id);
        });
    });

    if (buyBtn) {
        buyBtn.addEventListener('click', () => buyProduct(product.link));
    }

    if (shareBtn) {
        shareBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            shareProduct(product);
        });
    }

    return card;
}

function filterProducts(category) {
    currentFilter = category;
    currentPage = 0;
    
    if (category === 'all') {
        currentProducts = [...products];
    } else {
        currentProducts = products.filter(product => product.category === category);
    }
    
    loadProductsGrid();
    showNotification(`Filtro applicato: ${category === 'all' ? 'Tutti i prodotti' : category}`);
}

function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (searchTerm === '') {
        currentProducts = [...products];
    } else {
        currentProducts = products.filter(product =>
            product.nome.toLowerCase().includes(searchTerm) ||
            product.descrizione.toLowerCase().includes(searchTerm)
        );
    }
    
    currentPage = 0;
    loadProductsGrid();
    showNotification(`Trovati ${currentProducts.length} prodotti`);
}

function loadMoreProducts() {
    currentPage++;
    loadProductsGrid();
}

// Product Actions
function buyProduct(link) {
    window.open(link, '_blank');
    showNotification('Reindirizzamento ad Amazon...');
}

function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = wishlist.findIndex(item => item.id === productId);
    
    if (existingIndex > -1) {
        wishlist.splice(existingIndex, 1);
        showNotification('Rimosso dai preferiti');
    } else {
        wishlist.push(product);
        showNotification('Aggiunto ai preferiti');
    }
    
    saveUserData();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartCount();
    saveUserData();
    showNotification('Aggiunto al carrello');
}

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

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// UI Functions
function toggleSearch() {
    const searchContainer = document.getElementById('searchContainer');
    if (searchContainer) {
        searchContainer.classList.toggle('active');
        if (searchContainer.classList.contains('active')) {
            document.getElementById('searchInput').focus();
        }
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    
    const themeBtn = document.querySelector('.theme-btn');
    if (themeBtn) {
        themeBtn.textContent = isDark ? '☀️' : '🌙';
    }
    
    showNotification(`Tema ${isDark ? 'scuro' : 'chiaro'} attivato`);
}

function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

function scrollToProducts() {
    const productsSection = document.getElementById('offerte');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

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

// Modal Functions
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function closeAllModals() {
    const modals = document.querySelectorAll('.modal-overlay');
    modals.forEach(modal => {
        modal.classList.remove('active');
    });
    document.body.style.overflow = '';
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Data Persistence
function saveUserData() {
    const userData = {
        cart: cart,
        wishlist: wishlist,
        currentUser: currentUser
    };
    localStorage.setItem('cronoshop_data', JSON.stringify(userData));
}

function loadUserData() {
    try {
        const savedData = localStorage.getItem('cronoshop_data');
        if (savedData) {
            const userData = JSON.parse(savedData);
            cart = userData.cart || [];
            wishlist = userData.wishlist || [];
            currentUser = userData.currentUser || null;
        }
    } catch (error) {
        console.error('Error loading user data:', error);
    }

    // Load theme preference
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-mode');
        const themeBtn = document.querySelector('.theme-btn');
        if (themeBtn) {
            themeBtn.textContent = '☀️';
        }
    }
}
