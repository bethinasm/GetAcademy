
//MODEL - variablene våre, dataene vi har "lagret"

let word1 =' .... ';
let word2 =' .... ';
let word3 =' .... ';
let word4 =' .... ';

let wordCounter = 0;




// VIEW - det vi ser 

updateView()
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div class="box">
            <div class="text1"> 
                Once up on a time, <br> there was a ${word1} ${word2} 
                that ${word3} in the ${word4} 
                - and great stuff happened. 
            </div>
            <br> 
            <br> 
            <br> 
            <div class="text2">
                At least I think it did? I don't really remember. <br> 
                <br> 
                The End.
            </div>
        </div>
        <div class="wordBox">
            <div class="word" onclick="clickedWord(this.innerHTML)"> cat </div>
            <div class="word" onclick="clickedWord(this.innerHTML)"> forest </div>
            <div class="word" onclick="clickedWord(this.innerHTML)"> orange </div>
            <div class="word" onclick="clickedWord(this.innerHTML)"> sad </div>
            <div class="word" onclick="clickedWord(this.innerHTML)"> jumped </div>
            <div class="word" onclick="clickedWord(this.innerHTML)"> scared </div>
            <div class="word" onclick="clickedWord(this.innerHTML)"> pink </div>
            <div class="word" onclick="clickedWord(this.innerHTML)"> frog </div>
            <div class="word" onclick="clickedWord(this.innerHTML)"> lake </div>
            <div class="word" onclick="clickedWord(this.innerHTML)"> walked </div>
        </div>
    `;
}


// CONTROLLER - styrer endringer av modellen

function clickedWord(wordInput) {
    
    if (wordCounter == 0) { 
        word1 = wordInput;
    } else if (wordCounter == 1){
        word2 = wordInput;
    } else if (wordCounter == 2){
        word3 = wordInput;
    } else if (wordCounter == 3){
        word4 = wordInput;
    }

    if (wordCounter <4){ //øker telleren hver gang det blir trykket på et ord. Slutter å øke etter 4
        wordCounter++;
    }

    updateView();
}
 