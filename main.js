// Main JavaScript file for Cronoshop
let products = [];
let currentFilter = 'all';
let displayedProducts = [];
let currentPage = 0;
const productsPerPage = 12;

// Sample products data
const sampleProducts = [
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
    }
];

// Initialize products
function initializeProducts() {
    products = [...sampleProducts];
    
    // Add more sample products to reach 61 total
    for (let i = 7; i <= 61; i++) {
        const categories = ['smartphone', 'fashion', 'casa', 'tech', 'salute'];
        const category = categories[Math.floor(Math.random() * categories.length)];
        
        products.push({
            id: i.toString(),
            nome: `Prodotto ${i}`,
            prezzo: `${(Math.random() * 200 + 10).toFixed(2)}€`,
            originalPrice: `${(Math.random() * 300 + 50).toFixed(2)}€`,
            discount: `-${Math.floor(Math.random() * 50 + 10)}%`,
            img: `https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400`,
            descrizione: `Descrizione del prodotto ${i} con caratteristiche interessanti e vantaggi unici.`,
            category: category,
            link: `https://www.amazon.it/dp/EXAMPLE${i}?tag=tony6401-21`
        });
    }
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
                    🛒 Acquista su Amazon
                </a>
                <div class="secondary-actions">
                    <button class="action-btn wishlist-btn" onclick="addToWishlist('${product.id}')">
                        ❤️ Wishlist
                    </button>
                    <button class="action-btn cart-btn" onclick="addToCart('${product.id}')">
                        🛍️ Carrello
                    </button>
                    <button class="action-btn share-btn" onclick="shareProduct('${product.id}')">
                        📤 Condividi
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