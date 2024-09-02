// shop.js
function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex(item => item.name === name);
    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += 1; // Increment quantity if item exists
    } else {
        cart.push({ name, price, image, quantity: 1 }); // Add new item if it doesn't exist
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to local storage
    window.location.href = 'cart.html'; // Redirect to cart page
}