
// MODEL

let textString = '';

let aCounter = 0;
let eCounter = 0;
let iCounter = 0;
let oCounter = 0;
let uCounter = 0;
let yCounter = 0;
let aeCounter = 0;
let oeCounter = 0;
let aaCounter = 0;


// VIEW

updateView()
function updateView() {
    let html =/*HTML*/`
    Skriv inn litt tekst her: <input type="text" onchange="saveInput(this.value)"/>
    <br>
    <button onclick ="countVowels()"> Tell vokalene </button>
    <br>
    <br>
    <div> 
        Hvor mange vokaler var det?
        <li> a: ${aCounter} </li>
        <li> e: ${eCounter} </li>
        <li> i: ${iCounter} </li>
        <li> o: ${oCounter} </li>
        <li> u: ${uCounter} </li>
        <li> y: ${yCounter} </li>
        <li> æ: ${aeCounter} </li>
        <li> ø: ${oeCounter} </li>
        <li> å: ${aaCounter} </li>   
    </div>
    `;
    document.getElementById('app').innerHTML = html;
}


// CONTROLLER

function saveInput(typedInput) {
    textString = typedInput.toLowerCase();
    console.log('Dette ble skrevet inn: ' + textString);
}

function emptyCounter(){
    aCounter = 0;
    eCounter = 0;
    iCounter = 0;
    oCounter = 0;
    uCounter = 0;
    yCounter = 0;
    aeCounter = 0;
    oeCounter = 0;
    aaCounter = 0;
}


function countVowels(){
    emptyCounter();
    for (let i=0; i < textString.length; i++) {
        let currentLetter = textString.charAt(i);

        if (currentLetter === 'a') {
            aCounter++;
        }else if (currentLetter === 'e') {
            eCounter++;
        }else if (currentLetter ==='i') {
            iCounter++;
        }else if (currentLetter ==='o') {
            oCounter++;
        }else if (currentLetter === 'u') {
            uCounter++;
        }else if (currentLetter === 'y') {
            yCounter++;
        }else if (currentLetter === 'æ') {
            aeCounter++;
        }else if (currentLetter === 'ø') {
            oeCounter++;
        }else if (currentLetter === 'å') {
            aaCounter++;
        }
    }

    console.log("Vowel Count:");
    console.log("a: " + aCounter);
    console.log("e: " + eCounter);
    console.log("i: " + iCounter);
    console.log("o: " + oCounter);
    console.log("u: " + uCounter);
    console.log("y: " + yCounter);
    console.log("æ: " + aeCounter);
    console.log("ø: " + oeCounter);
    console.log("å: " + aaCounter);

    updateView();
}