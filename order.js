document.addEventListener("DOMContentLoaded", function() {
    const fruitSelect = document.getElementById('fruit-select');
    const fruitQuantity = document.getElementById('fruit-quantity');
    const vegetableSelect = document.getElementById('vegetable-select');
    const vegetableQuantity = document.getElementById('vegetable-quantity');
    const dairySelect = document.getElementById('dairy-select');
    const dairyQuantity = document.getElementById('dairy-quantity');
    const cosmeticsSelect = document.getElementById('cosmetics-select');
    const cosmeticsQuantity = document.getElementById('cosmetics-quantity');
    const skincareSelect = document.getElementById('skincare-select');
    const skincareQuantity = document.getElementById('skincare-quantity');

    function enableQuantityInput(selectElement, quantityInput) {
        selectElement.addEventListener('change', function() {
            if (selectElement.value) {
                quantityInput.disabled = false;
                quantityInput.focus();
            } else {
                quantityInput.disabled = true;
                quantityInput.value = '';
            }
        });
    }

    enableQuantityInput(fruitSelect, fruitQuantity);
    enableQuantityInput(vegetableSelect, vegetableQuantity);
    enableQuantityInput(dairySelect, dairyQuantity);
    enableQuantityInput(cosmeticsSelect, cosmeticsQuantity);
    enableQuantityInput(skincareSelect, skincareQuantity);
});
