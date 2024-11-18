
function RandomAnswer() {
    let randomIndex = Math.floor(Math.random() * answers.length)

    if (answers.length > 0){ //skjekker om det fortsatt finnes svar igjen i array
        answerTxt = answers[randomIndex];

    }else{ //hvis tomt for svar i array
        answerTxt = 'Out of Answers. <br> This is exhausting, I need to recharge.'; 
    }

    txtClass = 'txtForAnswers';

    answers.splice(randomIndex, 1); //fjerner det brukte svaret fra array
   

    updateView();
}

