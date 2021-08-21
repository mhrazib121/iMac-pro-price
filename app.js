// Extra Memory cost \\
function memoryCost(extraPrice) {
    const memoryExtraCost = document.getElementById('memory-cost');
    const previosCost = 0;
    const newCost = previosCost + extraPrice;
    memoryExtraCost.innerText = newCost;
    totalCost()

}

document.getElementById('8gb-btn').addEventListener('click', function () {
    memoryCost(0)
})
document.getElementById('16gb-btn').addEventListener('click', function () {
    memoryCost(180)
})


// Extra Storage cost \\
function storageCost(extraPrice) {
    const storageExtraCost = document.getElementById('storage-cost');
    const previosCost = 0;
    const newCost = previosCost + extraPrice;
    storageExtraCost.innerText = newCost;
    totalCost()
}

document.getElementById('256gb-ssd').addEventListener('click', function () {
    storageCost(0)
})
document.getElementById('512gb-ssd').addEventListener('click', function () {
    storageCost(100)
})
document.getElementById('1tb-ssd').addEventListener('click', function () {
    storageCost(180)
})

// Delivery Charge \\
function deliveryCharge(extraPrice) {
    const deliveryCost = document.getElementById('delivery-cost');
    const previosCost = 0;
    const newCost = previosCost + extraPrice;
    deliveryCost.innerText = newCost;
    totalCost()
}

document.getElementById('prime-delivery').addEventListener('click', function () {
    deliveryCharge(0)
})
document.getElementById('quick-delivery').addEventListener('click', function () {
    deliveryCharge(20)
})



// Total Price Function\\
// ******************\\

function getInput(product) {
    const getInputValue = document.getElementById(product + '-cost');
    const extraPrice = parseInt(getInputValue.innerText);
    return extraPrice;
}

function totalCost() {
    const bestPrice = 1299;
    const extraMemoryPrice = getInput('memory');
    const extraStoragePrice = getInput('storage');
    const quickDeliveryCost = getInput('delivery');

    // total price calculate \\
    const grandPrice = bestPrice + extraMemoryPrice + extraStoragePrice + quickDeliveryCost;
    const totalPriceField = document.getElementById('total-price');
    const totalField = document.getElementById('total');
    totalPriceField.innerText = grandPrice;
    totalField.innerText = grandPrice;
    return grandPrice;

}

// Promo Code Function\\
// ******************\\

function applyPromoCode() {
    const promoCodeField = document.getElementById('promocode-input');
    const promoCode = promoCodeField.value;
    if (promoCode == 'stevekaku') {
        const totalDiscountAmount = totalCost() * 0.20;
        const total = totalCost() - totalDiscountAmount;
        document.getElementById('total').innerText = total;

        // clear Input Field \\ 
        document.getElementById('promocode-input').value = '';
    }
    else {
        document.getElementById('promocode-input').value = "wrong inputed code";
    }
}

// promo Code Apply \\
document.getElementById('apply-btn').addEventListener('click', function () {
    applyPromoCode();
});


