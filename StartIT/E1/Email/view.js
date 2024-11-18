updateView()
function updateView() {

    html = /*HTML*/ `
    
    <div>
        Enter email address : <input onchange="saveUserInput(this.value)"/>
        <button onclick="checkIfEmailAddress()"> Submit </button>
    </div>

    <br>

    <div style="border: 1px solid black; width: 275px; height: 50px; padding: 50px;"> 
        ${textBox} 
    </div>

    `;
    document.getElementById('app').innerHTML = html;
}