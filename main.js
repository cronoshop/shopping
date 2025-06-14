// Cache busting version
const CACHE_VERSION = '2.3';

// Products data
const products = [
    {
        id: "1",
        nome: "Samsung Galaxy S25 Ultra",
        prezzo: "1.199€",
        originalPrice: "1.399€",
        discount: "-14%",
        img: "https://m.media-amazon.com/images/I/61hiFJPpY9L._AC_SL1500_.jpg",
        descrizione: "Il nuovo flagship Samsung con S Pen integrata, fotocamera da 200MP e display Dynamic AMOLED 2X da 6.8 pollici.",
        category: "smartphone",
        link: "https://www.amazon.it/dp/B0CHWV2L8K"
    },
    {
        id: "2",
        nome: "iPhone 15 Pro Max",
        prezzo: "1.189€",
        originalPrice: "1.489€",
        discount: "-20%",
        img: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_SL1500_.jpg",
        descrizione: "iPhone 15 Pro Max con chip A17 Pro, fotocamera da 48MP e design in titanio. Disponibile in vari colori.",
        category: "smartphone",
        link: "https://www.amazon.it/dp/B0CHWV5HTM"
    },
    {
        id: "3",
        nome: "Calvin Klein T-Shirt Uomo",
        prezzo: "18€",
        originalPrice: "35€",
        discount: "-49%",
        img: "https://m.media-amazon.com/images/I/71BHou6YJKL._AC_SY879_.jpg",
        descrizione: "T-shirt in cotone 100% con logo Calvin Klein. Vestibilità regular, disponibile in vari colori e taglie.",
        category: "fashion",
        link: "https://www.amazon.it/dp/B07QMZX8VK"
    },
    {
        id: "4",
        nome: "Amazon Fire TV Stick HD",
        prezzo: "28,99€",
        originalPrice: "44,99€",
        discount: "-36%",
        img: "https://m.media-amazon.com/images/I/51B45gaTgjL._AC_SL1000_.jpg",
        descrizione: "Streaming device con telecomando vocale Alexa, supporto HD, accesso a Netflix, Prime Video e altre app.",
        category: "tech",
        link: "https://amzn.to/4jhgwHr"
    },
    {
        id: "5",
        nome: "Vitamina D3 + K2",
        prezzo: "19,99€",
        originalPrice: "29,99€",
        discount: "-33%",
        img: "https://m.media-amazon.com/images/I/61XvMqDAOVL._AC_SL1500_.jpg",
        descrizione: "Integratore di Vitamina D3 4000 UI + K2 MK7, 365 compresse per un anno di fornitura. Supporta ossa e sistema immunitario.",
        category: "salute",
        link: "https://www.amazon.it/dp/B07QMZX8VK"
    },
    {
        id: "6",
        nome: "Friggitrice ad Aria Philips",
        prezzo: "89,99€",
        originalPrice: "149,99€",
        discount: "-40%",
        img: "https://m.media-amazon.com/images/I/71XvMqDAOVL._AC_SL1500_.jpg",
        descrizione: "Friggitrice ad aria da 4.1L, tecnologia Rapid Air per cottura sana con poco olio. Include ricettario.",
        category: "casa",
        link: "https://www.amazon.it/dp/B08XQJK9VL"
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