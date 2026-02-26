/**
 * Font Switcher – Changes fonts based on language
 * English → ProximaNova, Comfortaa, CarolloPlayscript
 * Bangla → AmarBangla, EkusheyBangla, BalooDa2
 */

const FontSwitcher = {
    applyFont(lang) {
        const body = document.body;

        if (lang === 'bn') {
            body.classList.add('lang-bn');
            body.classList.remove('lang-en');
            // Set font families for Bangla
            this.setFontFamily('body', 'AmarBangla, sans-serif');
            this.setFontFamily('h1, h2, h3, .bangla-heading', 'EkusheyBangla, sans-serif');
            this.setFontFamily('.bangla-small, .caption', 'BalooDa2, sans-serif');
        } else {
            body.classList.add('lang-en');
            body.classList.remove('lang-bn');
            // Set font families for English
            this.setFontFamily('body, .navbar, .card', 'ProximaNova, sans-serif');
            this.setFontFamily('.btn, .category-tag', 'Comfortaa, cursive');
            this.setFontFamily('.hero .english-accent', 'CarolloPlayscript, cursive');
        }
    },

    setFontFamily(selector, fontFamily) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.style.fontFamily = fontFamily;
        });
    }
};

window.FontSwitcher = FontSwitcher;