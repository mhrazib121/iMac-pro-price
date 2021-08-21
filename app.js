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
