/**
 * Custom Order Request Form
 */

document.addEventListener('DOMContentLoaded', () => {
    const requestForm = document.querySelector('.request form');
    if (requestForm) {
        requestForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Custom order request submitted! We\'ll contact you soon.');
        });
    }
});