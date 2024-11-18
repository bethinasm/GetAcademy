
updateView();
function updateView(){
    getRandomPokemon();

    app.innerHTML = /*HTML*/`
        <div class="topContainer"> 
            <div class="metPokemon">
                <div>${randomPokemon.name}</div> 
                <div> LVL: ${randomPokemon.level} </div>
                <br>
                <img src="${randomPokemon.image}"/>
            </div>
        </div>

        <div class="bottomScreen">
            <div class="player">
                <img src="${player.image}"/>
                <br><br>
                <div> ${player.playerName} </div>
                <div> LVL: ${player.level} </div>
            </div>
            <div class="buttonDiv">
                <button onclick="catchPokemon()"> Catch this Pokemon!</button>    
                <button onclick="updateView()"> Look for another Pokemon</button>
                <button onclick="showAllCaughtPokemon()"> Show caught Pokemon </button>       
            </div>
        </div>
    `;
}

function viewCaughtPokemon(){
    app.innerHTML = /*HTML*/`
        <div class="caughtContainer">
        <img src="${caughtPokemon[caughtPokemon.length - 1].image}"/>
            <p> You caught ${caughtPokemon[caughtPokemon.length - 1].name}! </p>
            <br>
            <div class="buttonDivCaugth">
                <button onclick="updateView()"> Look for another Pokemon</button>
                <button onclick="showAllCaughtPokemon()"> Show caught Pokemon </button>       
            </div>
        
        </div>
    `;
}

function showAllCaughtPokemon(){
    app.innerHTML = /*HTML*/ `
        <div class= "header"> Your Pokemon </div>
        <div class="listContainer"> ${listCaughtPokemon()} </div>
        <div class="listButtonDiv">
            <button onclick="updateView()"> Look for another Pokemon</button>
        </div>
    `;
}