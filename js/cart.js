function renderCartItems() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = ''; // Clear the cart list
    let totalAmount = 0;

    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.forEach(item => {
        totalAmount += item.price * item.quantity;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image-container">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            </div>
            <div class="cart-item-details">
                <h3 class="cart-item-name">${item.name}</h3>
                <p class="cart-item-price">MMK ${item.price.toLocaleString()}</p>
                <div class="cart-item-actions">
                    <input type="number" class="cart-item-quantity" value="${item.quantity}" min="1" data-name="${item.name}">
                    <a href="#" class="remove-item-btn" data-name="${item.name}">Remove</a>
                </div>
            </div>
        `;
        cartList.appendChild(cartItem);
    });

    document.getElementById('total-amount').textContent = `MMK ${totalAmount.toLocaleString()}`;
}

function handleRemoveItem(event) {
    if (event.target.classList.contains('remove-item-btn')) {
        event.preventDefault();
        const itemName = event.target.getAttribute('data-name');
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCartItems = cartItems.filter(item => item.name !== itemName);
        localStorage.setItem('cart', JSON.stringify(updatedCartItems)); // Update cart in local storage
        renderCartItems(); // Re-render cart items
    }
}

document.getElementById('cart-list').addEventListener('click', handleRemoveItem);

// Initial render
renderCartItems();