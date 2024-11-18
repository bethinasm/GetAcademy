
updateView();
function updateView() {
    let html = /*HTML*/`
        <div class="ball">
            <div  class="innerCircle">
                <div class="${txtClass}">
                    ${answerTxt}
                </div>
            </div>
        </div>

        <br>
        <br>
        
        <div> 
            <p>
                Concentrate on your question..
            </p>
            <button onclick="RandomAnswer()"> 
                Get Answer
            </button>
        </div>
    `;
    document.getElementById('app').innerHTML = html;
}