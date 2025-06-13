// Cronoshop JavaScript - Minimal White/Blue Design
// Product Data
const products = [
  {
    id: "prod1",
    link: "https://amzn.to/3Z551fa",
    img: "https://m.media-amazon.com/images/I/61hiFJPpY9L._AC_SL1500_.jpg",
    nome: "Samsung Galaxy S25 Ultra",
    prezzo: "1.199€",
    originalPrice: null,
    discount: null,
    descrizione: "Smartphone AI con display 6.9\" QHD+ Dynamic AMOLED 2X, fotocamera da 200MP, RAM 12GB, memoria interna da 256GB, batteria da 5000 mAh. Colore Titanium Silverblue. Garanzia 3 anni.",
    category: "smartphone"
  },
  {
    id: "prod2",
    link: "https://amzn.to/4mB7UhK",
    img: "https://m.media-amazon.com/images/I/71b8mpCMTOL._AC_SL1500_.jpg",
    nome: "by Amazon Quinoa biologica, 500g",
    prezzo: "5,49€",
    originalPrice: null,
    discount: null,
    descrizione: "Quinoa biologica di alta qualità, ricca di proteine e fibre. Perfetta per insalate e piatti salutari.",
    category: "casa"
  },
  {
    id: "prod3",
    link: "https://www.amazon.it/dp/B0CHWV5HTM",
    img: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_SL1500_.jpg",
    nome: "Apple iPhone 15",
    prezzo: "645,00€",
    originalPrice: "879,00€",
    discount: "-27%",
    descrizione: "Prestazioni top per l'uso quotidiano.",
    category: "smartphone"
  },
  {
    id: "prod4",
    link: "https://amzn.to/4kCH9aV",
    img: "https://m.media-amazon.com/images/I/618ha2Ia5tL._AC_SL1500_.jpg",
    nome: "Samsung Galaxy S25 Smartphone AI",
    prezzo: "929,00€",
    originalPrice: null,
    discount: null,
    descrizione: "Smartphone con display 6.2'' FHD+ Dynamic AMOLED 2X, fotocamera da 50MP, RAM 12GB, memoria interna 256GB, batteria da 4.000 mAh. Include 3 anni di garanzia del produttore. Colore: Mint.",
    category: "smartphone"
  },
  {
    id: "prod5",
    link: "https://amzn.to/3ZAt8T4",
    img: "https://m.media-amazon.com/images/I/61Wj-1t3TwL._AC_SL1500_.jpg",
    nome: "SAMSUNG Galaxy S25 Edge",
    prezzo: "1.299,00€",
    originalPrice: null,
    discount: null,
    descrizione: "Smartphone AI con display 6.7'' QHD+ Dynamic AMOLED 2X, fotocamera da 200MP, RAM 12GB, memoria interna da 512GB, batteria da 3.900 mAh. Include 3 anni di garanzia del produttore. Colore: Titanium Jetblack.",
    category: "smartphone"
  },
  {
    id: "prod6",
    link: "https://amzn.to/45gPEUX",
    img: "https://m.media-amazon.com/images/I/61y0hmQWlsL._AC_SL1500_.jpg",
    nome: "Samsung Galaxy S25+ Smartphone AI",
    prezzo: "1.189,00€",
    originalPrice: null,
    discount: null,
    descrizione: "Smartphone AI con display 6.7'' QHD+ Dynamic AMOLED 2X, fotocamera da 50MP, RAM 12GB, memoria interna da 512GB, batteria da 4.900 mAh. Include 3 anni di garanzia del produttore. Colore: Silver Shadow. Versione italiana.",
    category: "smartphone"
  },
  {
    id: "prod7",
    link: "https://amzn.to/3Z6Kc2W",
    img: "https://m.media-amazon.com/images/I/610vqacJO2L.__AC_SY445_SX342_QL70_ML2_.jpg",
    nome: "Apple iPhone 16e – 128 GB",
    prezzo: "699,00€",
    originalPrice: null,
    discount: null,
    descrizione: "Progettato per Apple Intelligence, dotato di chip A18, autonomia grandiosa, fotocamera Fusion da 48MP e display Super Retina XDR da 6,1\". Colore: Bianco.",
    category: "smartphone"
  },
  {
    id: "prod8",
    link: "https://amzn.to/3ZEqKut",
    img: "https://m.media-amazon.com/images/I/61cUeqowwZL._AC_SL1500_.jpg",
    nome: "Apple iPhone 16 Pro Max – 256 GB",
    prezzo: "1.195,00€",
    originalPrice: null,
    discount: null,
    descrizione: "Telefono 5G con controllo fotocamera avanzato, registrazione video Dolby Vision 4K a 120 fps e autonomia senza precedenti. Compatibile con AirPods. Colore: Titanio Nero.",
    category: "smartphone"
  },
  {
    id: "prod9",
    link: "https://amzn.to/43t1D0l",
    img: "https://m.media-amazon.com/images/I/61BGE6iu4AL.__AC_SY445_SX342_QL70_ML2_.jpg",
    nome: "Apple iPhone 14 Plus – 128 GB",
    prezzo: "871,00€",
    originalPrice: null,
    discount: null,
    descrizione: "Smartphone Apple con 128 GB di memoria, display Super Retina XDR da 6,7\", ottime prestazioni e autonomia, colore Azzurro. Un mix di potenza e stile.",
    category: "smartphone"
  },
  {
    id: "prod10",
    link: "https://amzn.to/4mBncTC",
    img: "https://m.media-amazon.com/images/I/51v1hYXGsdL._AC_SL1500_.jpg",
    nome: "Google Pixel 9 Pro XL",
    prezzo: "879,00€",
    originalPrice: null,
    discount: null,
    descrizione: "Smartphone Android sbloccato con Gemini, sistema a tripla fotocamera posteriore, batteria con autonomia fino a 24 ore e display Super Actua da 6,8\". Colore: Grigio Verde. Memoria: 128GB.",
    category: "smartphone"
  },
  {
    id: "prod11",
    link: "https://amzn.to/4jlRfvO",
    img: "https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_SL1500_.jpg",
    nome: "Apple iPhone 14 Pro Max – 128 GB (Ricondizionato)",
    prezzo: "689,00€",
    originalPrice: null,
    discount: null,
    descrizione: "iPhone 14 Pro Max ricondizionato in ottime condizioni, con 128 GB di memoria e finitura Deep Purple. La qualità Apple con un ottimo risparmio.",
    category: "smartphone"
  },
  {
    id: "prod12",
    link: "https://amzn.eu/d/j40eOtX",
    img: "https://m.media-amazon.com/images/I/619HAuZ95QL._AC_SL1500_.jpg",
    nome: "iPhone 16 (128GB) - Nero",
    prezzo: "759€",
    originalPrice: null,
    discount: null,
    descrizione: "Altissima qualità Apple",
    category: "smartphone"
  },
  {
    id: "prod13",
    link: "https://amzn.to/3SnXwfz",
    img: "https://m.media-amazon.com/images/I/41sNR0PJCaL._AC_SX569_.jpg",
    nome: "SSC NAPOLI Maglietta Campioni",
    prezzo: "30€",
    originalPrice: null,
    discount: null,
    descrizione: "Maglia ufficiale celebrativa",
    category: "fashion"
  },
  {
    id: "prod14",
    link: "https://amzn.to/4kbOb6E",
    img: "https://m.media-amazon.com/images/I/71BHou6YJKL._AC_SY879_.jpg",
    nome: "Calvin Klein T-Shirt Uomo",
    prezzo: "18€",
    originalPrice: null,
    discount: null,
    descrizione: "Stile minimal, 100% cotone",
    category: "fashion"
  },
  {
    id: "prod15",
    link: "https://amzn.to/43xa5u6",
    img: "https://m.media-amazon.com/images/I/51V1TTs1U2L._AC_SX569_.jpg",
    nome: "adidas Squadra25 Jersey Short Sleeve T-Shirt Uomo",
    prezzo: "14,99€",
    originalPrice: "23,00€",
    discount: "-35%",
    descrizione: "T-shirt sportiva adidas per uomo",
    category: "fashion"
  },
  {
    id: "prod16",
    link: "https://amzn.to/4jhgwHr",
    img: "https://m.media-amazon.com/images/I/51B45gaTgjL._AC_SL1000_.jpg",
    nome: "Amazon Fire TV Stick HD",
    prezzo: "28,99€",
    originalPrice: null,
    discount: null,
    descrizione: "Amazon Fire TV Stick HD (Ultimo modello), TV gratuita e in diretta, telecomando vocale Alexa, controlli per Casa Intelligente, streaming HD.",
    category: "tech"
  },
  {
    id: "prod17",
    link: "https://amzn.to/4dCu1QL",
    img: "https://m.media-amazon.com/images/I/618HDC8rPXL.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "Bronzi® Portafoglio Uomo Slim Piccolo",
    prezzo: "22,99€",
    originalPrice: null,
    discount: null,
    descrizione: "Portacarte uomo e donna, portatessere con protezione RFID, porta carte di credito e portamonete. Mini, slim, con box regalo. Brand italiano di qualità.",
    category: "fashion"
  },
  {
    id: "prod18",
    link: "https://amzn.to/4kEfeHI",
    img: "https://m.media-amazon.com/images/I/61oxHY8kFbL._AC_SX569_.jpg",
    nome: "Vittorio Y Camicia Donna in Cotone e Lino",
    prezzo: "19,99€",
    originalPrice: null,
    discount: null,
    descrizione: "Camicia casual tinta unita, comoda e traspirante, perfetta per la stagione calda. Resi gratuiti su Amazon.",
    category: "fashion"
  },
  {
    id: "prod19",
    link: "https://amzn.to/4dF2SwD",
    img: "https://m.media-amazon.com/images/I/618FhFPg8+L._AC_SX575_.jpg",
    nome: "Nike Air Force 1 '07 Lv8 4",
    prezzo: "116,00€",
    originalPrice: null,
    discount: null,
    descrizione: "Scarpe da basket uomo, modello iconico Nike Air Force 1 con design classico e comfort duraturo.",
    category: "fashion"
  },
  {
    id: "prod20",
    link: "https://amzn.to/3Z7S8Rr",
    img: "https://m.media-amazon.com/images/I/41vC0GMKWJL._AC_SY695_.jpg",
    nome: "adidas Breaknet Lifestyle Court Lace Shoes",
    prezzo: "28,80€",
    originalPrice: "32,73€",
    discount: "-12%",
    descrizione: "Scarpe da tennis unisex per bambini e ragazzi. Prezzo più basso ultimi 30 giorni: 32,73€. Offerta a tempo con risparmio del 12% rispetto al prezzo recente.",
    category: "fashion"
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
            <button class="glass-btn primary-btn buy-btn" data-id="${product.id}">
                Acquista ora
            </button>
        </div>
    `;

    // Add event listeners to buttons
    const wishlistBtn = card.querySelector('.wishlist-btn');
    const cartBtn = card.querySelector('.cart-btn');
    const buyBtn = card.querySelector('.buy-btn');

    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            addToWishlist(product.id);
        });
    }
    if (cartBtn) {
        cartBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(product.id);
        });
    }
    if (buyBtn) {
        buyBtn.addEventListener('click', () => buyProduct(product.link));
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