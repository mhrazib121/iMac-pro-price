// Extra Memory cost \\

document.getElementById('8gb-btn').addEventListener('click', function(){
memoryCost(0)
})
document.getElementById('16gb-btn').addEventListener('click', function(){
memoryCost(180)
})

function memoryCost(extraPrice){
    const memoryCost = document.getElementById('memory-cost');
    
    // const memoryCostNumber = parseInt(memoryCost.innerText);
    const previosCost = 0; 
    const newCost = previosCost + extraPrice;
    memoryCost.innerText=newCost;
    console.log(newCost);
}
// Extra Storage cost \\

document.getElementById('256gb-ssd').addEventListener('click', function(){
    storageCost(0)
})
document.getElementById('512gb-ssd').addEventListener('click', function(){
storageCost(100)
})
document.getElementById('1tb-ssd').addEventListener('click', function(){
    storageCost(180)
})

function storageCost(extraPrice){
    const storageCost = document.getElementById('storage-cost');
    
    // const memoryCostNumber = parseInt(memoryCost.innerText);
    const previosCost = 0; 
    const newCost = previosCost + extraPrice;
    storageCost.innerText=newCost;
    console.log(newCost);
}
// Delivery Charge \\

document.getElementById('prime-delivery').addEventListener('click', function(){
    deliveryCharge(0)
})
document.getElementById('quick-delivery').addEventListener('click', function(){
    deliveryCharge(20)
})


function deliveryCharge(extraPrice){
    const deliveryCost = document.getElementById('delivery-charge');
    
    // const memoryCostNumber = parseInt(memoryCost.innerText);
    const previosCost = 0; 
    const newCost = previosCost + extraPrice;
    deliveryCost.innerText=newCost;
    console.log(newCost);
}
