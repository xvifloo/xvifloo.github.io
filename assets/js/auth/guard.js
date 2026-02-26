/**
 * Route Guard – Protects authenticated routes
 * Checks if user is logged in, redirects to login if not
 */

document.addEventListener('DOMContentLoaded', () => {
    // Define public paths that don't require authentication
    const publicPaths = [
        '/',
        '/index.html',
        '/auth/login.html',
        '/auth/signup.html',
        '/auth/reset-password.html',
        '/presets/',
        '/presets/index.html',
        '/presets/detail.html',
        '/tools/',
        '/support/contact.html',
        '/language/selector.html'
    ];

    const currentPath = window.location.pathname;
    const isPublic = publicPaths.some(path => currentPath.endsWith(path));

    if (isPublic) return;

    // Check if user is authenticated (Firebase)
    // Placeholder: we'll simulate check via localStorage
    const isLoggedIn = localStorage.getItem('xvifloo_user') !== null;

    if (!isLoggedIn) {
        console.log('Not authenticated, redirecting to login');
        window.location.href = '/auth/login.html?redirect=' + encodeURIComponent(currentPath);
    }
});

// Function to set user after login (to be called from login.js)
function setUser(userData) {
    localStorage.setItem('xvifloo_user', JSON.stringify(userData));
}

// Function to clear user on logout
function clearUser() {
    localStorage.removeItem('xvifloo_user');
}

// Attach to window
window.AuthGuard = { setUser, clearUser };