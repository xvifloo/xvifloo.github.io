/**
 * Contrast Engine – Ensures text is readable
 * Adjusts text color based on background luminance
 */

const ContrastEngine = {
    applyContrastFix(element) {
        if (!element) return;

        const bgColor = window.getComputedStyle(element).backgroundColor;
        const rgb = bgColor.match(/\d+/g);
        if (!rgb) return;

        const luminance = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
        const textColor = luminance < 128 ? '#ffffff' : '#1E272E';

        element.style.color = textColor;
    },

    // Apply to all cards and elements that need dynamic text color
    fixAllCards() {
        document.querySelectorAll('.preset-card, .feature-card, .tool-card').forEach(card => {
            this.applyContrastFix(card);
        });
    }
};

window.ContrastEngine = ContrastEngine;