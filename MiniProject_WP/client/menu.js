let cart = [];
let totalPrice = 0;

function addToCart(itemName, itemPrice) {
    const existingItem = cart.find(item => item.name === itemName);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }
    totalPrice += itemPrice;
    renderCart();
}

function removeFromCart(index) {
    totalPrice -= cart[index].price * cart[index].quantity;
    cart.splice(index, 1);
    renderCart();
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');

    cartItemsContainer.innerHTML = '';
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${item.name} (x${item.quantity})</span>
            <span>₹${item.price * item.quantity}</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    cartTotalContainer.innerHTML = `Total: ₹${totalPrice}`;
}

function submitOrder() {
    const thankYouMessage = document.getElementById('thank-you-message');
    thankYouMessage.innerHTML = `Total Amount Payable: ₹${totalPrice}. Thank you for your order! Do visit again.`;

    // Clear the cart after submission
    cart = [];
    totalPrice = 0;
    renderCart();
}
