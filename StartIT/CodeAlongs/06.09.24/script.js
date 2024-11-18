
// MODELL

let username = 'User123'; 
let password = 'Password123';

let inputUsername = '';
let inputPassword = '';

// VIEW
updateView()
function updateView() {
    let html= `
    <label for="inputForUsername"> Username:</label>
    <input id="inputForUsername" onchange="saveName(this.value)"/>
    <br>
    <label for="inputForPassword"> Password: </label>
    <input id ="inputForPassword" onchange="savePassword(this.value)"/>
    <br>
    <button onclick="checkIfCorrect()"> Log In </button>
    `;

    document.getElementById('app').innerHTML = html;
    console.log()
}


function saveName(savedUsername){
    inputUsername = savedUsername;
    console.log('saved username is: ' + inputUsername);
}

function savePassword(savedPassword){
    inputPassword = savedPassword; 
    console.log('saved password is: ' + inputPassword); 
}

function checkIfCorrect() {
    if (inputUsername === username && inputPassword === password){
        console.log('Login Successful!')
    }else if(inputUsername === username && inputPassword != password) {
        console.log('Wrong password')
    }else if(inputUsername != username && inputPassword === password){
        console.log('Wrong username')
    }else if (inputUsername != username && inputPassword != password){
        console.log('Wrong username and password')
    }
}
