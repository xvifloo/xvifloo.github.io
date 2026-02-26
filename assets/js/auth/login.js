/**
 * Login Page Functionality
 */

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (!loginForm) return;

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('email')?.value;
        const password = document.getElementById('password')?.value;

        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }

        // Show loading
        const submitBtn = loginForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Logging in...';
        submitBtn.disabled = true;

        try {
            // Placeholder for Firebase authentication
            // await firebase.auth().signInWithEmailAndPassword(email, password);
            console.log('Login attempt with:', email);

            // Simulate success
            setTimeout(() => {
                window.location.href = '../profile/';
            }, 1000);

        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed: ' + error.message);
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });

    // Social login placeholders
    const googleBtn = document.querySelector('.btn.google');
    if (googleBtn) {
        googleBtn.addEventListener('click', () => {
            console.log('Google login clicked');
            // Implement Google sign-in
        });
    }

    const githubBtn = document.querySelector('.btn.github');
    if (githubBtn) {
        githubBtn.addEventListener('click', () => {
            console.log('GitHub login clicked');
            // Implement GitHub sign-in
        });
    }
});