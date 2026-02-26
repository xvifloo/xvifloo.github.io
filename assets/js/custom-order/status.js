/**
 * Custom Order Status Page
 */

document.addEventListener('DOMContentLoaded', () => {
    // Fetch order status from URL or Firebase
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get('id');

    if (orderId) {
        // Simulate loading status
        document.getElementById('orderStatus').textContent = 'In Progress';
    }
});