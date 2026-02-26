/**
 * Custom Theme Handling
 * Allows user to define own colors
 */

const CustomTheme = {
    init() {
        // Load saved custom theme from localStorage
        const saved = Utils.getStorage(CONFIG.STORAGE_KEYS.CUSTOM_THEME, null);
        if (saved) {
            this.applyCustomTheme(saved.primary, saved.secondary, saved.type);
        }
    },

    applyCustomTheme(primary, secondary, type = 'linear') {
        // Generate CSS gradient
        const gradient = Utils.generateGradient(primary, secondary, type);

        // Create a style element or set CSS variable
        document.documentElement.style.setProperty('--bg-gradient-start', primary);
        document.documentElement.style.setProperty('--bg-gradient-end', secondary);

        // Store
        Utils.setStorage(CONFIG.STORAGE_KEYS.CUSTOM_THEME, { primary, secondary, type });

        // Switch theme mode to custom (but keep data-theme as 'custom' or override)
        document.documentElement.setAttribute('data-theme', 'custom');
        ThemeCore.currentTheme = 'custom';

        // Dispatch event
        document.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: 'custom' } }));
    },

    resetToDefault() {
        Utils.setStorage(CONFIG.STORAGE_KEYS.CUSTOM_THEME, null);
        ThemeCore.setTheme(CONFIG.DEFAULT_THEME);
    }
};

window.CustomTheme = CustomTheme;