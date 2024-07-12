document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            const price = button.getAttribute('data-price');
            
            cart.push({ product, price });
            alert(`${product} has been added to your cart.`);
            updateCart();
        });
    });
    
    function updateCart() {
        const cartContainer = document.getElementById('cart');
        cartContainer.innerHTML = ''; // Clear existing cart items
        
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.textContent = `${item.product} - $${item.price}`;
            cartContainer.appendChild(cartItem);
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const buttons = document.querySelectorAll('.add-to-cart');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            const price = button.getAttribute('data-price');
            cart.push({ product, price });
            console.log(`Added ${product} - $${price} to cart.`);
            // You can update the cart UI or store the cart in localStorage here.
        });
    });
});
