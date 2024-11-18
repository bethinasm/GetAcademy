

function saveUserInput(userInput) {
    userEmailInput = userInput;
    console.log('dette ble skrevet inn og lagret: ' + userEmailInput);
}


function checkIfEmailAddress(){
    
    let currentEmail = userEmailInput;

    let atIndex = currentEmail.indexOf('@');
        /* 
            indexOf er en innebygd funksjon, brukes til å 
            finne posisjon til et bestemt tegn 
        */


    if (!currentEmail.includes('@')) {
        textBox = '<b> Email address not recognised. </b> <br> Incorrect formatting.'
        // sjekker om @ IKKE er tilstede i tekst
    
       
    }else if(currentEmail.includes(' ')) {
        textBox = '<b> Email address not recognised. </b> <br> Incorrect formatting.'
       // sjekker om teksten inneholder mellomrom

    
    }else if(currentEmail.indexOf('.', atIndex) == -1){ 
        textBox = '<b> Email address not recognised. </b> <br> Incorrect formatting.'
        /* 
            sjekker om teksten inneholder punktum etter @
            indexOf (@) brukes til å finne posisjon til @ i teksten. 
            (currentEmail.indexOf('.', atIndex) leiter etter . etter posisjon til @
            hvis det ikke er . etter @ returneres det -1 som betyr at punktum mangler = funksjon returnerer false. 
        */


    }else {
        textBox = '<b> Email adress recognised.</b>'
    } 
    
    updateView();
}

