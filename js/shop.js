// Function to toggle favorite status and update the count
function toggleFavorite(element) {
    const heartIcon = element.querySelector('i');
    heartIcon.classList.toggle('fas');
    heartIcon.classList.toggle('far');
    
    element.classList.toggle('active'); // Toggle red color

    // Get current favorite count from localStorage (if any) or set to 0
    let favCount = localStorage.getItem('favCount') ? parseInt(localStorage.getItem('favCount')) : 0;

    // If the item is now favorited (filled heart), increment the count
    if (heartIcon.classList.contains('fas')) {
        favCount++;
    } else {
        // Otherwise, decrement the count
        favCount--;
    }

    // Store the updated count in localStorage
    localStorage.setItem('favCount', favCount);

    // Update the header favorite count
    document.getElementById('fav-count').textContent = favCount;
}

// Function to load favorite count from localStorage on page load
function loadFavoriteCount() {
    let favCount = localStorage.getItem('favCount') ? parseInt(localStorage.getItem('favCount')) : 0;
    document.getElementById('fav-count').textContent = favCount;
}

// Call the function to load the favorite count when the page loads
window.onload = loadFavoriteCount;


let cartCount = 0; // Initialize the cart count

function addToCart(itemName, price, imageUrl) {    
    cartCount++; // Increment the cart count
    updateCartBadge(); // Update the cart icon badge
    console.log(`Added to cart: ${itemName}, Price: ${price}, Image: ${imageUrl}`);
}

// Update the cart badge count on the header
function updateCartBadge() {
    const cartBadge = document.querySelector('.cart-badge');
    if (cartBadge) {
        cartBadge.textContent = cartCount; // Update the text of the cart badge
        cartBadge.style.display = cartCount > 0 ? 'inline-block' : 'none'; // Show badge only if cartCount > 0
    }
}

// Initialize cart badge on page load
document.addEventListener('DOMContentLoaded', updateCartBadge);
