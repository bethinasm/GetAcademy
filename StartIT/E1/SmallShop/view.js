
updateView();
function updateView() {
    html = /*HTML*/`
    <div class = "coinPouch"> 
        There is <u>${coinPouch} gold</u> in you coin pouch.
    </div>

    <br><br><br>
    
    <div class= "productsAndPrices"> 
        
        <div>`
            // legger til liste med produkter
            for (let i = 0; i < product.length; i++){
                    html += `${product[i].productName} <br> <br>`;
            }
            html += /*HTML*/`
        </div> 
                    
        <div style="display: flex; flex-direction: column; margin-left: 100px;">`;
            //legger til liste med priser
            for (let i = 0; i < product.length; i++) {
                html += `${product[i].productPrice} gold <br><br>`;
            }
            html += /*HTML*/`
        </div>
            
        <div style="display: flex; flex-direction: column; margin-left: 100px;">`;
            //legger en add buttons til hvert produkt
            for (let i = 0; i < product.length; i++) {
                html += `<button onclick="addItem(${i})"> Add item </button> <br>`;
            }
            html += /*HTML*/`
        </div>

        <div style="display: flex; flex-direction: column; margin-left: 10px;">`;
            //legger en remove buttons til hvert produkt
            for (let i = 0; i < product.length; i++)
                html += `<button onclick="removeItem()"> Remove item </button> <br>`;
            html += /*HTML*/`
        </div>

    </div>

    <br><br>

    <div class="shoppingBag">
        Shopping Bag: <br>`
        html += /*HTML*/`
           ${getShoppingCartItems()}`
        html += /*HTML*/`
    </div>

    <br><br><br><br>

    <div style="text-align: center;">   
      Total Cost: <br> <u> ${totalCost} gold </u>
    </div>

    <br><br><br><br>

    <div style="text-align: center;">
        <button class="payButton" onclick="finishShopping()"> Finish shopping and pay</button>
    </div>
    `;
    
    document.getElementById('app').innerHTML = html;
}


function getShoppingCartItems() { //dette er en view function fordi den "tegner opp" handlekurven
    let itemsString = '';
    for (let i = 0; i < shoppingCart.length; i++) {
        if (i > 0) {
            itemsString += ', ';
        }
        itemsString += shoppingCart[i].productName;
    }
    return itemsString;
}

