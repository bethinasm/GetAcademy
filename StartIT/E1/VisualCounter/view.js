
// VIEW

updateView()
function updateView() {
    app.innerHTML = /*HTML*/ `
        <div class="box">
            <h1 id="numberText"> ${number} </h1>
            <button onclick="increaseButton()"> + </button>
            <button onclick="decreaseButton()"> - </button>
        </div>
    `;
}