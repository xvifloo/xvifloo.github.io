/**
 * Simple client-side router for Xvifloo
 * Handles navigation without page reload (optional enhancement)
 * Currently just a placeholder; actual routing is server-side / multi-page.
 * But we keep for future SPA-like behavior.
 */

const Router = {
    init() {
        window.addEventListener('popstate', () => this.handleRoute());
        this.handleRoute();
    },

    handleRoute() {
        const path = window.location.pathname;
        // This would map paths to JS initialization functions
        // For now, just trigger page-specific scripts via data attributes or body classes
        document.body.setAttribute('data-route', path);
    },

    navigate(url, pushState = true) {
        if (pushState) {
            history.pushState(null, null, url);
        }
        this.handleRoute();
    }
};

// Initialize on load
document.addEventListener('DOMContentLoaded', () => Router.init());