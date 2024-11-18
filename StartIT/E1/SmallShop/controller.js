

function addItem(index) {
    shoppingCart.push(product[index]);
    console.log(shoppingCart);
    totalCost = 0; // må nulles ellers så plusser den feil
    for (let i = 0; i < shoppingCart.length; i++) {
        totalCost += shoppingCart[i].productPrice;
    }
    updateView();
}

// ???????
function removeItem() {
    shoppingCart.splice(index, 1);
    totalCost -= shoppingCart[i].productPrice;
}

function finishShopping() {
   
    if (coinPouch >= totalCost) {
        coinPouch -= totalCost;  // Trekk totalprisen fra Coin Pouch
        shoppingCart = []; // tømmer handlekurven
        totalCost = 0;
        alert('Thank you for your purchase! Enjoy you adventure!');
        updateView();
    } else {
        alert('You do not have enough gold!');
    }
}