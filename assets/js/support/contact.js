/**
 * Contact Form Handling
 */

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = contactForm.querySelector('input[type="text"]')?.value;
            const email = contactForm.querySelector('input[type="email"]')?.value;
            const subject = contactForm.querySelectorAll('input[type="text"]')[1]?.value;
            const message = contactForm.querySelector('textarea')?.value;

            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }

            // Placeholder – send to Firebase or email service
            console.log('Contact form submitted:', { name, email, subject, message });

            // Show success
            alert('Message sent! We\'ll respond within 24 hours.');
            contactForm.reset();
        });
    }
});