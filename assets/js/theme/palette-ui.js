/**
 * Palette UI – Handles the custom theme picker in profile/appearance.html
 */

document.addEventListener('DOMContentLoaded', () => {
    const paletteForm = document.getElementById('customThemeForm');
    if (!paletteForm) return;

    const primaryInput = document.getElementById('primaryColor');
    const secondaryInput = document.getElementById('secondaryColor');
    const typeSelect = document.getElementById('gradientType');
    const previewDiv = document.getElementById('gradientPreview');
    const saveBtn = document.getElementById('saveCustomTheme');

    // Update preview on input change
    function updatePreview() {
        const primary = primaryInput.value;
        const secondary = secondaryInput.value;
        const type = typeSelect.value;
        const gradient = Utils.generateGradient(primary, secondary, type);
        previewDiv.style.background = gradient;
    }

    primaryInput.addEventListener('input', updatePreview);
    secondaryInput.addEventListener('input', updatePreview);
    typeSelect.addEventListener('change', updatePreview);

    // Load saved values if any
    const saved = Utils.getStorage(CONFIG.STORAGE_KEYS.CUSTOM_THEME, null);
    if (saved) {
        primaryInput.value = saved.primary;
        secondaryInput.value = saved.secondary;
        typeSelect.value = saved.type;
        updatePreview();
    } else {
        // Set defaults
        primaryInput.value = '#CAFFEE';
        secondaryInput.value = '#CAFFEE';
        updatePreview();
    }

    saveBtn.addEventListener('click', () => {
        const primary = primaryInput.value;
        const secondary = secondaryInput.value;
        const type = typeSelect.value;

        CustomTheme.applyCustomTheme(primary, secondary, type);
        alert('Custom theme saved!');
    });

    // Reset button
    const resetBtn = document.getElementById('resetTheme');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            CustomTheme.resetToDefault();
            // Reload page or update UI
            location.reload();
        });
    }
});