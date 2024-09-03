const products = {
    'base-plate': {
        name: 'Base Plate',
        description: '175x80x10 THK.',
        price: 25.00,
        img: 'images/baseplate.jpeg'
    },
    'anchor-bolt': {
        name: 'Anchor Bolt',
        description: '12x150mm Long Anchor Bolt with Hex Nut and Washer.',
        price: 15.00,
        img: 'images/anchorbolt.jpeg'
    },
    'post-cap': {
        name: 'Post Cap',
        description: 'PVC Pro Post Cap.',
        price: 50.00,
        img: 'images/postcap.jpeg'
    },
    'clamp': {
        name: 'Clamp',
        description: 'Unico Shield Clamp with Mushroom Head Bolt & Security Nut with Washer.',
        price: 50.00,
        img: 'images/clamp.jpeg'
    },
    'fence-post': {
        name: 'Fence Post',
        description: 'Pro Universal Post with Welded Base Plate - Regular.',
        price: 90.00,
        img: 'images/fencepost.jpeg'
    },
    'weld-mesh-panel': {
        name: 'Weld Mesh Panel',
        description: 'Vertical Wire Ø 4mm, Horizontal Wire Ø 4mm, Mesh Size 76.2x12.7mm, Panel Height 1560mm, Panel Width 2500mm, with 3 V Bends.',
        price: 150.00,
        img: 'images/weldmeshpanel.jpeg'
    }
};

function viewDetails(productId) {
    const product = products[productId];
    document.getElementById('modal-img').src = product.img;
    document.getElementById('modal-title').textContent = product.name;
    document.getElementById('modal-description').textContent = product.description;
    document.getElementById('modal-price').textContent = `₹${product.price.toFixed(2)}`;
    document.getElementById('quantity-input').value = 1; // Reset quantity to 1
    document.getElementById('product-modal').style.display = 'flex';
    document.getElementById('product-modal').setAttribute('data-product-id', productId);

    // Attach event listeners for the quantity buttons
    document.getElementById('increase-quantity').onclick = () => changeQuantity(1);
    document.getElementById('decrease-quantity').onclick = () => changeQuantity(-1);
}

function changeQuantity(change) {
    const quantityInput = document.getElementById('quantity-input');
    let currentQuantity = parseInt(quantityInput.value);
    currentQuantity = isNaN(currentQuantity) ? 1 : currentQuantity;
    currentQuantity += change;
    if (currentQuantity < 1) currentQuantity = 1; // Ensure quantity doesn't go below 1
    quantityInput.value = currentQuantity;
}

function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}

function addToCart() {
    const productId = document.getElementById('product-modal').getAttribute('data-product-id');
    const product = products[productId];
    const quantity = parseInt(document.getElementById('quantity-input').value);
    const cartItems = document.getElementById('cart-items');
    const cartItem = document.createElement('li');
    const totalPrice = product.price * quantity;
    cartItem.textContent = `${product.name} (x${quantity}): ₹${totalPrice.toFixed(2)}`;
    cartItems.appendChild(cartItem);
    updateTotal(totalPrice);
    closeModal();
}

const GST_RATE = 0.18; // 18% GST

function updateTotal(price) {
    const subtotalElement = document.getElementById('subtotal-price');
    const gstElement = document.getElementById('gst');
    const totalElement = document.getElementById('total-price');

    // Calculate the new subtotal
    const currentSubtotal = parseFloat(subtotalElement.textContent.replace('Subtotal: ₹', ''));
    const newSubtotal = currentSubtotal + price;
    subtotalElement.textContent = `Subtotal: ₹${newSubtotal.toFixed(2)}`;

    // Calculate GST
    const gstAmount = newSubtotal * GST_RATE;
    gstElement.textContent = `GST and other taxes (18%): ₹${gstAmount.toFixed(2)}`;

    // Calculate total including GST
    const newTotal = newSubtotal + gstAmount;
    totalElement.innerHTML = `<b>Total: ₹${newTotal.toFixed(2)}</b>`;
}

function checkout() {
    alert('Thank you for your purchase! Your order has been placed.');
    document.getElementById('cart-items').innerHTML = '';
    document.getElementById('subtotal-price').textContent = 'Subtotal: ₹0.00';
    document.getElementById('gst').textContent = 'GST and other taxes (18%): ₹0.00';
    document.getElementById('total-price').innerHTML = '<b>Total: ₹0.00</b>';
}
