/**
 * Preset Listing Page Functionality
 */

document.addEventListener('DOMContentLoaded', () => {
    // Filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    const presetCards = document.querySelectorAll('.preset-card');
    const sortSelect = document.querySelector('.sort-select');

    if (filterBtns.length) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active class
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const category = btn.dataset.category;

                filterPresets(category);
            });
        });
    }

    function filterPresets(category) {
        presetCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Sorting
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            const sortBy = sortSelect.value;
            sortPresets(sortBy);
        });
    }

    function sortPresets(by) {
        const container = document.querySelector('.grid-container');
        const cards = Array.from(presetCards);

        cards.sort((a, b) => {
            if (by === 'popular') {
                const aCount = parseInt(a.querySelector('.download-count')?.textContent.replace(/[^0-9]/g, '') || '0');
                const bCount = parseInt(b.querySelector('.download-count')?.textContent.replace(/[^0-9]/g, '') || '0');
                return bCount - aCount;
            } else if (by === 'newest') {
                // Placeholder – would use data attribute for date
                return 0;
            } else if (by === 'price') {
                const aPrice = a.querySelector('.price')?.textContent || '0';
                const bPrice = b.querySelector('.price')?.textContent || '0';
                // Convert to number (remove $ sign if present)
                const aNum = parseFloat(aPrice.replace(/[^0-9.]/g, '')) || 0;
                const bNum = parseFloat(bPrice.replace(/[^0-9.]/g, '')) || 0;
                return aNum - bNum;
            }
        });

        // Re-append sorted cards
        cards.forEach(card => container.appendChild(card));
    }
});