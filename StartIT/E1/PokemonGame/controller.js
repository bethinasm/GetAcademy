
function getRandomPokemon(){
    let randomNum = Math.floor(Math.random() * possiblePokemon.length);
    randomPokemon = possiblePokemon[randomNum];

}

function catchPokemon(){
    caughtPokemon.push(randomPokemon); //pusher caught pokemon inn i array
    viewCaughtPokemon();
}


function listCaughtPokemon(){ 
    let html = ''

    for (let i = 0; i < caughtPokemon.length; i++){ 
        html += /*HTML*/`
            <div class= "pokemon">
                <img src="${caughtPokemon[i].image}"/> 
                <br>
                <div class= "pokemonTextBox">
                    ${caughtPokemon[i].name}<br>
                    LVL: ${caughtPokemon[i].level}
                </div>        
            </div>
        `;
    }
    return html;
}

