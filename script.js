let cart = [];
let totalPrice = 0;

function addToCart(coffeeName, price) {
    cart.push({ name: coffeeName, price: price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear existing items

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Rp ${item.price}`;
        cartItems.appendChild(li);
    });

    document.getElementById('total-price').textContent = `Total: Rp ${totalPrice}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const addItemButton = document.getElementById('addItemButton');
    const itemInput = document.getElementById('itemInput');
    const itemList = document.getElementById('itemList');

    addItemButton.addEventListener('click', () => {
        const itemText = itemInput.value.trim();
        if (itemText) {
            const listItem = document.createElement('li');
            listItem.textContent = itemText;
            listItem.addEventListener('click', () => {
                itemList.removeChild(listItem);
            });
            itemList.appendChild(listItem);
            itemInput.value = '';
        }
    });
});
