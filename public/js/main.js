// Main JavaScript for POS System
document.addEventListener('DOMContentLoaded', () => {
    const barcodeForm = document.getElementById('barcode-form');
    const barcodeInput = document.getElementById('barcode-input');
    const productDetails = document.getElementById('product-details');
    const errorMessage = document.getElementById('error-message');
    const productImg = document.getElementById('product-img');
    const productName = document.getElementById('product-name');
    const productPrice = document.getElementById('product-price');
    const productBarcode = document.getElementById('product-barcode');

    // Handle form submission
    barcodeForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const barcode = barcodeInput.value.trim();
        if (!barcode) return;

        try {
            // Call the API to get product details
            const response = await fetch(`/api/product/${barcode}`);
            const result = await response.json();

            if (!response.ok || !result.success) {
                showError();
                return;
            }

            // Display product details
            displayProduct(result.data);
            
        } catch (error) {
            console.error('Error fetching product:', error);
            showError();
        }
    });

    // Function to display product details
    function displayProduct(product) {
        // Set product details
        productName.textContent = product.productname;
        productPrice.textContent = product.price.toFixed(2);
        productBarcode.textContent = product.barcode;

        // Set product image (use product name to find the image)
        const imageName = product.productname.replace(/\s+/g, '_');
        productImg.src = `/productImages/${product.productname}.jpg`;
        productImg.alt = product.productname;

        // Show product details and hide error
        productDetails.classList.remove('hidden');
        errorMessage.classList.add('hidden');

        // Clear input for next scan
        barcodeInput.value = '';
        barcodeInput.focus();
    }

    // Function to show error message
    function showError() {
        productDetails.classList.add('hidden');
        errorMessage.classList.remove('hidden');
        
        // Clear input for next scan
        barcodeInput.value = '';
        barcodeInput.focus();
    }
});
