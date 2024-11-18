function pushedLetter(element) { //element er (this), altså hele bokstav div
    const screen = document.getElementById('screen'); //screen er her en (konstant) variabel og kan ikke endres, men innerHTML kan fortsatt endres på
    
    if (element.innerText === "__") { //sjekker om space knappen har blitt trykket på
        screen.innerHTML += ' '; //hvis space blir trykket på, legges det inn et mellomrom i screen div
    } else {
        screen.innerHTML += element.innerText; //hvis det ikke er space som ble trykket på, men en bokstav, så legges bokstaven inn i screen div
    }
 }