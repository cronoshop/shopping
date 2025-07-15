
document.addEventListener("DOMContentLoaded", function () {
    fetch("nav.html")
        .then((res) => {
            if (!res.ok) throw new Error("Errore nel caricamento di nav.html: " + res.status);
            return res.text();
        })
        .then((html) => {
            const navContainer = document.getElementById("navigation-container");
            if (!navContainer) {
                console.error("Elemento 'navigation-container' non trovato.");
                return;
            }
            navContainer.innerHTML = html;

            // Logica per il menu mobile
            const menuBtn = document.querySelector('.mobile-menu-btn');
            const closeMenuBtn = document.querySelector('.close-menu-btn');
            const mobileMenu = document.getElementById('mobileMenu');
            const overlay = document.getElementById('overlay');

            const toggleMenu = (isActive) => {
                mobileMenu.classList.toggle('active', isActive);
                overlay.classList.toggle('active', isActive);
                document.body.style.overflow = isActive ? 'hidden' : '';
            };

            menuBtn?.addEventListener("click", () => toggleMenu(true));
            closeMenuBtn?.addEventListener("click", () => toggleMenu(false));
            overlay?.addEventListener("click", () => toggleMenu(false));

            // Evidenzia il link della pagina corrente
            const currentPage = window.location.pathname.split("/").pop().replace(".html", "") || "index";
            const activeLink = document.querySelector(`.nav-link[data-page="${currentPage}"]`);
            if (activeLink) {
                activeLink.classList.add("active");
            }
            
            // Aggiorna conteggio carrello
            if (typeof updateCartCount === 'function') {
                updateCartCount();
            }
        })
        .catch((err) => console.error("Errore fatale nel caricamento della navigazione:", err));
});

// Funzione per aggiornare il carrello (puoi metterla anche in un file common.js)
function updateCartCount() {
    try {
        const savedData = localStorage.getItem('cronoshop_data');
        const userData = savedData ? JSON.parse(savedData) : {};
        const cart = userData.cart || [];
        const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) cartCount.textContent = totalItems;
    } catch (e) {
        console.error("Errore nell'aggiornamento del carrello:", e);
    }
}
