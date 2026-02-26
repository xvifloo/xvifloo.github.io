/**
 * Support Ticket System
 */

document.addEventListener('DOMContentLoaded', () => {
    const ticketForm = document.getElementById('ticketForm');
    if (ticketForm) {
        ticketForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Handle ticket creation
            console.log('Ticket submitted');
            alert('Ticket created successfully!');
        });
    }
});