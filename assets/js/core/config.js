/**
 * Xvifloo Global Configuration
 * Stores constants and settings
 */

const CONFIG = {
    APP_NAME: 'Xvifloo',
    VERSION: '1.0.0',
    FIREBASE: {
        apiKey: 'YOUR_API_KEY',
        authDomain: 'YOUR_AUTH_DOMAIN',
        projectId: 'YOUR_PROJECT_ID',
        storageBucket: 'YOUR_STORAGE_BUCKET',
        messagingSenderId: 'YOUR_SENDER_ID',
        appId: 'YOUR_APP_ID'
    },
    THEMES: {
        LIGHT: 'light',
        DARK: 'dark',
        SYSTEM: 'system',
        CUSTOM: 'custom'
    },
    LANGUAGES: {
        EN: 'en',
        BN: 'bn'
    },
    DEFAULT_LANGUAGE: 'en',
    DEFAULT_THEME: 'system',
    STORAGE_KEYS: {
        THEME: 'xvifloo_theme',
        LANGUAGE: 'xvifloo_language',
        CUSTOM_THEME: 'xvifloo_custom_theme'
    }
};

// Freeze to prevent modifications
Object.freeze(CONFIG);