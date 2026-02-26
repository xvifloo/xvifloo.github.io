/**
 * Utility functions used across the application
 */

const Utils = {
    /**
     * Debounce function to limit rate of execution
     */
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
    },

    /**
     * Format date to YYYY-MM-DD
     */
    formatDate(date) {
        const d = new Date(date);
        return d.toISOString().split('T')[0];
    },

    /**
     * Get value from localStorage with fallback
     */
    getStorage(key, fallback = null) {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : fallback;
        } catch (e) {
            console.warn('Failed to parse localStorage item', key, e);
            return fallback;
        }
    },

    /**
     * Set value in localStorage
     */
    setStorage(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.warn('Failed to set localStorage item', key, e);
        }
    },

    /**
     * Fetch API wrapper with error handling
     */
    async fetchAPI(url, options = {}) {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('API fetch failed:', error);
            throw error;
        }
    },

    /**
     * Calculate luminance of a hex color
     */
    getLuminance(hex) {
        // Convert hex to RGB
        let r, g, b;
        if (hex.length === 4) {
            r = parseInt(hex[1] + hex[1], 16);
            g = parseInt(hex[2] + hex[2], 16);
            b = parseInt(hex[3] + hex[3], 16);
        } else if (hex.length === 7) {
            r = parseInt(hex.substring(1, 3), 16);
            g = parseInt(hex.substring(3, 5), 16);
            b = parseInt(hex.substring(5, 7), 16);
        } else {
            return 0.5; // fallback
        }
        return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    },

    /**
     * Generate gradient CSS from two colors and type
     */
    generateGradient(color1, color2, type = 'linear', angle = '135deg') {
        if (type === 'linear') {
            return `linear-gradient(${angle}, ${color1}, ${color2})`;
        } else if (type === 'radial') {
            return `radial-gradient(circle at center, ${color1}, ${color2})`;
        }
        return `linear-gradient(135deg, ${color1}, ${color2})`;
    }
};

// Attach to window for global use
window.Utils = Utils;