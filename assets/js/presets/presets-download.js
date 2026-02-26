/**
 * Preset download handling
 * Manages download counts, authentication checks, etc.
 */

function handleDownload(presetId, isFree = true) {
    // Check if user is logged in if needed (for paid presets)
    const user = localStorage.getItem('xvifloo_user');
    if (!user && !isFree) {
        alert('Please login to download this preset');
        window.location.href = '/auth/login.html?redirect=' + encodeURIComponent(window.location.pathname);
        return false;
    }

    // Increment download count (Firebase update would go here)
    console.log('Downloading preset', presetId);

    // Track download in user history
    if (user) {
        const userData = JSON.parse(user);
        // Update user's download list (Firebase)
    }

    return true;
}

// Expose globally
window.PresetDownload = { handleDownload };