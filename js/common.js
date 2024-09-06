function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const cartBadge = document.getElementById('cart-count');
    if (cartBadge) {
        cartBadge.textContent = itemCount;
        cartBadge.style.display = itemCount > 0 ? 'inline-block' : 'none';
    }
}

// Initial cart count update
document.addEventListener('DOMContentLoaded', updateCartCount);
