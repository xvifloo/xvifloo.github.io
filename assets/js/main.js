const cursor = document.querySelector('.cursor-outline');

// জাভাস্ক্রিপ্ট লোড হলে বডিতে একটি ক্লাস যোগ হবে
document.documentElement.classList.add('js-enabled');

window.addEventListener('mousemove', (e) => {
    // মাউস নড়াচড়া করলেই সার্কেলটি ভেসে উঠবে
    cursor.style.opacity = '1';
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// মাউস স্ক্রিনের বাইরে গেলে লুকিয়ে যাবে
window.addEventListener('mouseout', () => {
    cursor.style.opacity = '0';
});
