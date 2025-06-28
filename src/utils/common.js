// Funzioni JavaScript comuni per tutto il sito
class CronoshopUtils {
    constructor() {
        this.initializeCommonFeatures();
    }

    // Inizializza funzionalità comuni
    initializeCommonFeatures() {
        this.applyTheme();
        this.updateCartCount();
        this.setupEventListeners();
        this.trackPageView();
        this.initializeAccessibility();
    }

    // Gestione tema
    applyTheme() {
        const darkMode = localStorage.getItem('darkMode') === 'true';
        const themeMode = localStorage.getItem('themeMode') || 'default';
        const glassMode = localStorage.getItem('glassMode') === 'true';

        document.body.classList.remove('dark-mode', 'theme-green', 'theme-red', 'theme-blue', 'theme-purple', 'theme-orange', 'glass-mode');

        if (darkMode) {
            document.body.classList.add('dark-mode');
        }

        if (themeMode !== 'default') {
            document.body.classList.add(`theme-${themeMode}`);
        }

        if (glassMode) {
            document.body.classList.add('glass-mode');
        }

        const themeBtn = document.querySelector('.theme-btn');
        if (themeBtn) {
            themeBtn.textContent = darkMode ? '☀️' : '🌙';
        }
    }

    toggleTheme() {
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', !isDark);
        this.applyTheme();
        this.showNotification(`Tema ${!isDark ? 'scuro' : 'chiaro'} attivato`);
    }

    // Gestione carrello
    updateCartCount() {
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

    // Menu mobile
    toggleMobileMenu() {
        const navMenu = document.getElementById('navMenu');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        
        if (navMenu) {
            navMenu.classList.toggle('active');
            
            // Aggiorna aria-expanded per accessibilità
            const isExpanded = navMenu.classList.contains('active');
            mobileMenuBtn?.setAttribute('aria-expanded', isExpanded);
        }
    }

    // Ricerca
    toggleSearch() {
        const searchContainer = document.getElementById('searchContainer');
        if (searchContainer) {
            searchContainer.classList.toggle('active');
            if (searchContainer.classList.contains('active')) {
                const searchInput = document.getElementById('searchInput');
                searchInput?.focus();
            }
        }
    }

    // Notifiche
    showNotification(message, type = 'info') {
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

    // Tracciamento visite
    trackPageView() {
        try {
            const currentPage = window.location.pathname;
            const visitData = JSON.parse(localStorage.getItem('visitData') || '{}');
            
            visitData.totalVisits = (visitData.totalVisits || 0) + 1;
            visitData.lastVisit = new Date().toISOString();
            visitData.currentPage = currentPage;
            
            if (!visitData.pages) visitData.pages = {};
            visitData.pages[currentPage] = (visitData.pages[currentPage] || 0) + 1;
            
            localStorage.setItem('visitData', JSON.stringify(visitData));
        } catch (error) {
            console.error('Error tracking page view:', error);
        }
    }

    // Accessibilità
    initializeAccessibility() {
        // Gestione focus per navigazione da tastiera
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });

        // Gestione ESC per chiudere modali
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const activeModal = document.querySelector('.modal-overlay.active');
                if (activeModal) {
                    this.closeModal(activeModal.id);
                }
            }
        });
    }

    // Gestione modali
    showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            modal.removeAttribute('hidden');
            document.body.style.overflow = 'hidden';
            
            // Focus sul primo elemento focusabile
            const focusableElement = modal.querySelector('input, button, [tabindex]:not([tabindex="-1"])');
            focusableElement?.focus();
        }
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
            modal.setAttribute('hidden', '');
            document.body.style.overflow = '';
        }
    }

    // Setup event listeners comuni
    setupEventListeners() {
        // Theme toggle
        const themeBtn = document.querySelector('.theme-btn');
        if (themeBtn) {
            themeBtn.addEventListener('click', () => this.toggleTheme());
        }

        // Mobile menu
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => this.toggleMobileMenu());
        }

        // Search toggle
        const searchBtn = document.querySelector('.search-btn');
        if (searchBtn) {
            searchBtn.addEventListener('click', () => this.toggleSearch());
        }

        // Close modals on outside click
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay')) {
                this.closeModal(e.target.id);
            }
        });

        // Close buttons
        document.querySelectorAll('.close-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const modal = e.target.closest('.modal-overlay');
                if (modal) {
                    this.closeModal(modal.id);
                }
            });
        });
    }

    // Utility per animazioni
    addFadeInAnimation() {
        setTimeout(() => {
            const elements = document.querySelectorAll('.glass-card:not(.fade-in)');
            elements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('fade-in');
                }, index * 100);
            });
        }, 100);
    }

    // Gestione prodotti
    addToWishlist(productId) {
        try {
            const savedData = localStorage.getItem('cronoshop_data');
            let userData = savedData ? JSON.parse(savedData) : {};
            let wishlist = userData.wishlist || [];
            
            // Trova il prodotto (assumendo che sia disponibile globalmente)
            const product = window.products?.find(p => p.id === productId);
            if (!product) {
                this.showNotification('Prodotto non trovato', 'error');
                return;
            }

            // Controlla se già presente
            if (wishlist.find(item => item.id === productId)) {
                this.showNotification('Prodotto già nella wishlist', 'warning');
                return;
            }

            wishlist.push(product);
            userData.wishlist = wishlist;
            localStorage.setItem('cronoshop_data', JSON.stringify(userData));
            
            this.showNotification('Prodotto aggiunto alla wishlist!', 'success');
        } catch (error) {
            console.error('Error adding to wishlist:', error);
            this.showNotification('Errore durante l\'aggiunta alla wishlist', 'error');
        }
    }

    addToCart(productId) {
        try {
            const savedData = localStorage.getItem('cronoshop_data');
            let userData = savedData ? JSON.parse(savedData) : {};
            let cart = userData.cart || [];
            
            const product = window.products?.find(p => p.id === productId);
            if (!product) {
                this.showNotification('Prodotto non trovato', 'error');
                return;
            }

            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }

            userData.cart = cart;
            localStorage.setItem('cronoshop_data', JSON.stringify(userData));
            
            this.updateCartCount();
            this.showNotification('Prodotto aggiunto al carrello!', 'success');
        } catch (error) {
            console.error('Error adding to cart:', error);
            this.showNotification('Errore durante l\'aggiunta al carrello', 'error');
        }
    }

    // Acquisto prodotto
    buyProduct(link) {
        if (link) {
            this.showNotification('Reindirizzamento ad Amazon...', 'info');
            setTimeout(() => {
                window.open(link, '_blank');
            }, 1000);
        }
    }

    // Condivisione
    shareProduct(product) {
        const shareText = `🛍️ Guarda questa offerta su Cronoshop!\n\n${product.nome}\n💰 ${product.prezzo}\n\n🔗 ${product.link}\n\n#Cronoshop #OfferteAmazon #Risparmio`;
        
        if (navigator.share) {
            navigator.share({
                title: `${product.nome} - Cronoshop`,
                text: shareText,
                url: product.link
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(shareText).then(() => {
                this.showNotification('Link copiato negli appunti!', 'success');
            }).catch(() => {
                this.showNotification('Errore nella copia del link', 'error');
            });
        }
    }

    // Debounce utility
    debounce(func, wait) {
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

    // Lazy loading per immagini
    initializeLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // Gestione errori globale
    initializeErrorHandling() {
        window.addEventListener('error', (e) => {
            console.error('Global error:', e.error);
            this.showNotification('Si è verificato un errore. Riprova.', 'error');
        });

        window.addEventListener('unhandledrejection', (e) => {
            console.error('Unhandled promise rejection:', e.reason);
            this.showNotification('Errore di connessione. Controlla la tua connessione internet.', 'error');
        });
    }
}

// Inizializza le utility quando il DOM è pronto
document.addEventListener('DOMContentLoaded', () => {
    window.cronoshopUtils = new CronoshopUtils();
});

// Esporta per uso in altri moduli
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CronoshopUtils;
}