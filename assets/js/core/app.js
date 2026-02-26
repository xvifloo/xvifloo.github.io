/**
 * Xvifloo Core Application
 * Handles initialization, global events, and utilities
 */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('Xvifloo App Initialized');

    // Initialize theme system
    if (window.ThemeCore) {
        ThemeCore.init();
    }

    // Initialize language system
    if (window.LangSwitcher) {
        LangSwitcher.init();
    }

    // Initialize mobile menu
    initMobileMenu();

    // Initialize logo switching based on theme
    initLogoSwitcher();

    // Set up global click handlers (e.g., modal close)
    setupGlobalHandlers();
});

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('open');
        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    // Close on overlay click (if we add overlay later)
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            closeMobileMenu();
        }
    });
}

function openMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.getElementById('hamburger');
    if (mobileMenu) mobileMenu.classList.add('open');
    if (hamburger) hamburger.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent scrolling
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.getElementById('hamburger');
    if (mobileMenu) mobileMenu.classList.remove('open');
    if (hamburger) hamburger.classList.remove('active');
    document.body.style.overflow = '';
}

/**
 * Logo Switcher based on theme luminance
 * Follows rule: background luminance < 50% → use dark BG logo; else light BG logo
 */
function initLogoSwitcher() {
    const logosLight = document.querySelectorAll('.logo-light');
    const logosDark = document.querySelectorAll('.logo-dark');

    function updateLogos() {
        // Get computed background color of body
        const bgColor = window.getComputedStyle(document.body).backgroundColor;
        const rgb = bgColor.match(/\d+/g);
        if (!rgb || rgb.length < 3) return;

        const luminance = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
        const useDark = luminance < 128; // threshold

        logosLight.forEach(logo => logo.style.display = useDark ? 'none' : 'block');
        logosDark.forEach(logo => logo.style.display = useDark ? 'block' : 'none');
    }

    // Initial update
    updateLogos();

    // Observe theme changes
    const observer = new MutationObserver(updateLogos);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class', 'style'] });

    // Also listen for theme toggle custom event
    document.addEventListener('themeChanged', updateLogos);
}

/**
 * Global handlers (e.g., close modal on escape)
 */
function setupGlobalHandlers() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const openMobileMenu = document.querySelector('.mobile-menu.open');
            if (openMobileMenu) {
                closeMobileMenu();
            }
        }
    });
}

/**
 * Utility function to show toast notifications (placeholder)
 */
function showToast(message, type = 'info') {
    console.log(`[${type}] ${message}`);
    // We'll implement later with a proper toast UI
}

// Export for global use
window.app = {
    openMobileMenu,
    closeMobileMenu,
    showToast
};