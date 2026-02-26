/**
 * Password Reset Page Functionality
 */

document.addEventListener('DOMContentLoaded', () => {
    const resetForm = document.getElementById('resetForm');
    if (!resetForm) return;

    resetForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('email')?.value;
        if (!email) {
            alert('Please enter your email');
            return;
        }

        const submitBtn = resetForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        try {
            // Placeholder for Firebase password reset
            // await firebase.auth().sendPasswordResetEmail(email);
            console.log('Reset email sent to:', email);

            // Show success message
            alert('Password reset email sent! Check your inbox.');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;

        } catch (error) {
            console.error('Reset error:', error);
            alert('Failed to send reset email: ' + error.message);
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
});