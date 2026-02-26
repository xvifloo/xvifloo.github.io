/**
 * Preset Detail Page Functionality
 */

document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.querySelector('.download-btn');
    const previewBtn = document.querySelector('.preview-btn');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            // Get preset ID from URL or data attribute
            const urlParams = new URLSearchParams(window.location.search);
            const presetId = urlParams.get('id') || '1';

            console.log('Download preset:', presetId);

            // Placeholder – trigger download or redirect
            // In real scenario, would call Firebase or server

            // Show toast or modal
            alert('Download started! Check your downloads folder.');
        });
    }

    if (previewBtn) {
        previewBtn.addEventListener('click', () => {
            console.log('Live preview clicked');
            // Could open lightbox or external link
            // Placeholder
        });
    }
});