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

