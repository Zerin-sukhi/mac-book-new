const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const totalUpdate = document.getElementById('total-price');
const totalConst = document.getElementById('total-const');
const deliveryCost = document.getElementById('delivery-cost');
const finalPrice = document.getElementById('final-price');

// total price calculation-------- 
function updateTotal() {

    const memoryPrice = parseFloat(memoryCost.innerText);
    const storagePrice = parseFloat(storageCost.innerText);
    const deliveryPrice = parseFloat(deliveryCost.innerText)
    const totalPrice = parseFloat(totalConst.innerText);
    const grandTotal = memoryPrice + storagePrice + deliveryPrice + totalPrice;

    totalUpdate.innerText = grandTotal;
    finalPrice.innerText = grandTotal;
    const promoInput = document.getElementById('promo-input');
    const promoValue = promoInput.value;
    if (promoValue=='stevekaku'){        
        const discTotal = grandTotal * 0.8 ;        
        finalPrice.innerText = discTotal;
    }
    promoInput.value = '';


}
// displaying innerText and function results  
function inputValue(p, n) {
    p.innerText = n;
    p.innerText;
    updateTotal();
}

// memory id and function declaration 
document.getElementById('8gb-btn').addEventListener('click', function () {
    inputValue(memoryCost, '0')

});
document.getElementById('16gb-btn').addEventListener('click', function () {
    inputValue(memoryCost, '180')

});



// SSD-storage id and function declaration 
document.getElementById('256gb-storage-btn').addEventListener('click', function () {

    inputValue(storageCost, '0')

})

document.getElementById('512gb-storage-btn').addEventListener('click', function () {
    inputValue(storageCost, '100')

})

document.getElementById('tb-storage-btn').addEventListener('click', function () {
    inputValue(storageCost, '180')

})

// delivery option id and function declare ----
document.getElementById('free-delivery').addEventListener('click', function () {
    inputValue(deliveryCost, '0')
})
document.getElementById('premium-delivery').addEventListener('click', function () {
    inputValue(deliveryCost, '20')
})

// applying promo code -----
document.getElementById('apply').addEventListener('click',function (){
    updateTotal();
})