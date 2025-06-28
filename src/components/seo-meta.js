// Componente per gestire meta tag SEO dinamici
class SEOManager {
    constructor() {
        this.defaultMeta = {
            siteName: 'Cronoshop',
            siteUrl: 'https://www.cronoshop.eu',
            defaultTitle: 'Cronoshop - Le Migliori Offerte Amazon Giornaliere | Sconti Esclusivi 2025',
            defaultDescription: 'Scopri ogni giorno le migliori offerte Amazon selezionate da Cronoshop. Smartphone, tecnologia, casa, moda e molto altro con sconti fino al 70%. Risparmia con le nostre promozioni esclusive!',
            defaultKeywords: 'offerte amazon, cronoshop, sconti amazon, promozioni giornaliere, risparmio online, shopping amazon, offerte tech, offerte smartphone, offerte casa, offerte moda',
            defaultImage: 'https://www.cronoshop.eu/assets/cronoshop-logo.png',
            twitterHandle: '@cronoshop_eu',
            fbAppId: '1234567890'
        };
    }

    // Imposta meta tag per una pagina specifica
    setPageMeta(pageConfig) {
        const config = { ...this.defaultMeta, ...pageConfig };
        
        // Title
        document.title = config.title;
        this.updateMetaTag('description', config.description);
        this.updateMetaTag('keywords', config.keywords);
        this.updateMetaTag('author', 'Cronoshop Team');
        
        // Canonical URL
        this.updateLinkTag('canonical', config.canonicalUrl || `${this.defaultMeta.siteUrl}${window.location.pathname}`);
        
        // Open Graph
        this.updateMetaProperty('og:title', config.title);
        this.updateMetaProperty('og:description', config.description);
        this.updateMetaProperty('og:type', config.type || 'website');
        this.updateMetaProperty('og:url', config.canonicalUrl || `${this.defaultMeta.siteUrl}${window.location.pathname}`);
        this.updateMetaProperty('og:image', config.image || this.defaultMeta.defaultImage);
        this.updateMetaProperty('og:site_name', this.defaultMeta.siteName);
        this.updateMetaProperty('og:locale', 'it_IT');
        
        // Twitter Card
        this.updateMetaTag('twitter:card', 'summary_large_image');
        this.updateMetaTag('twitter:site', this.defaultMeta.twitterHandle);
        this.updateMetaTag('twitter:title', config.title);
        this.updateMetaTag('twitter:description', config.description);
        this.updateMetaTag('twitter:image', config.image || this.defaultMeta.defaultImage);
        
        // Schema.org JSON-LD
        this.updateStructuredData(config);
    }

    updateMetaTag(name, content) {
        let meta = document.querySelector(`meta[name="${name}"]`);
        if (!meta) {
            meta = document.createElement('meta');
            meta.name = name;
            document.head.appendChild(meta);
        }
        meta.content = content;
    }

    updateMetaProperty(property, content) {
        let meta = document.querySelector(`meta[property="${property}"]`);
        if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute('property', property);
            document.head.appendChild(meta);
        }
        meta.content = content;
    }

    updateLinkTag(rel, href) {
        let link = document.querySelector(`link[rel="${rel}"]`);
        if (!link) {
            link = document.createElement('link');
            link.rel = rel;
            document.head.appendChild(link);
        }
        link.href = href;
    }

    updateStructuredData(config) {
        // Rimuovi script JSON-LD esistenti
        const existingScript = document.querySelector('script[type="application/ld+json"]');
        if (existingScript) {
            existingScript.remove();
        }

        // Crea nuovo script JSON-LD
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": this.defaultMeta.siteName,
            "url": this.defaultMeta.siteUrl,
            "description": config.description,
            "publisher": {
                "@type": "Organization",
                "name": this.defaultMeta.siteName,
                "logo": {
                    "@type": "ImageObject",
                    "url": this.defaultMeta.defaultImage
                }
            },
            "potentialAction": {
                "@type": "SearchAction",
                "target": `${this.defaultMeta.siteUrl}/products.html?search={search_term_string}`,
                "query-input": "required name=search_term_string"
            }
        };

        // Aggiungi dati specifici per tipo di pagina
        if (config.type === 'product') {
            structuredData["@type"] = "Product";
            structuredData.name = config.productName;
            structuredData.description = config.description;
            structuredData.image = config.image;
            structuredData.offers = {
                "@type": "Offer",
                "price": config.price,
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock"
            };
        } else if (config.type === 'article') {
            structuredData["@type"] = "Article";
            structuredData.headline = config.title;
            structuredData.description = config.description;
            structuredData.image = config.image;
            structuredData.author = {
                "@type": "Organization",
                "name": "Cronoshop Team"
            };
            structuredData.datePublished = config.datePublished || new Date().toISOString();
            structuredData.dateModified = config.dateModified || new Date().toISOString();
        }

        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
    }

    // Genera breadcrumb JSON-LD
    generateBreadcrumb(items) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        
        const breadcrumbData = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": items.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.name,
                "item": `${this.defaultMeta.siteUrl}${item.url}`
            }))
        };

        script.textContent = JSON.stringify(breadcrumbData);
        document.head.appendChild(script);
    }
}

// Inizializza SEO Manager
window.seoManager = new SEOManager();