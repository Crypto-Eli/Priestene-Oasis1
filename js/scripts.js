document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            const price = parseFloat(button.getAttribute('data-price'));

            cart.push({ product, price });
            alert(`${product} has been added to your cart.`);
            updateCart();
        });
    });

    const updateCart = () => {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.textContent = `${item.product} - $${item.price.toFixed(2)}`;
            cartItemsContainer.appendChild(itemElement);
            total += item.price;
        });

        cartTotal.textContent = total.toFixed(2);
    };

    document.getElementById('checkout').addEventListener('click', () => {
        alert('Proceeding to checkout...');
    });
});
