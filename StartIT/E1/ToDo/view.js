
// VIEW

updateView()
function updateView(){
    app.innerHTML = /*HTML*/`
        <div>
            <table> 
                <tr> 
                    <th class="checkpoint"> </th>
                    <th> Person </th>
                    <th style="width: 250px;"> To do: </th>
                    <th> Deadline </th>
                    <th> Date finished </th>
                </tr>
                ${newTaskRowAdded()}
            </table> 

            <div class="newTask">
                <h3> Add new task: </h3>
                <input placeholder="Who is the new task for?" onchange="savePerson(this.value)" class="ntInput"/>
                <input placeholder="To do:" onchange="saveTask(this.value)" class="ntInput"/>
                <br><br>
                <div> 
                    Task deadline: 
                    <input type="date" onchange="saveDate(this.value)"class="ntInput"/> 
                    <button onclick="addNewTask()"> Submit </button>                
                </div>
            </div>
        </div>
    `;
}

function newTaskRowAdded() {
    let html = '';
    for (let i = 0; i < tasks.length; i++) {
        html += addNewTaskData(i);
    }
    return html;
}

function addNewTaskData(i) {
    let task = tasks[i];
    let checkFinished = task.isDone ? 'checked="checked"' : '';

    if(!task.editMode) {
        let html = /*HTML*/ `
                <tr>
                    <th class="checkpoint"> <input type="checkbox" onchange="isFinished(this, ${i})" ${checkFinished}/> </th>
                    <th> ${task.person} </th>
                    <td> ${task.description}</td>
                    <td> ${task.deadline} </td>
                    <td> ${task.finishedDate || ''} </td> <!-- || betyr eller-->
                    <td style="width: 220px; text-align: center;"> 
                        <button onclick="editTask(${i})"> Edit task </button>
                        <button onclick="deleteTask(${i})"> Delete Task </button>
                    </td>
                </tr>
            `;
        return html;
    }else{
        let editHtml = /*HTML*/ `
                <tr>
                    <th class="checkpoint"> <input type="checkbox" onchange="isFinished(this, ${i})" ${checkFinished}/> </th>
                    <th> <input id="editPerson${i}" placeholder="${task.person}"/> </th>
                    <td> <input id="editDescription${i}" placeholder="${task.description}"/></td>
                    <td> <input id="editDeadline${i}" placeholder="${task.deadline}" type="date"/> </td>
                    <td> <button onclick="updateTask(${i})"> Save </button> </td>
                </tr>
            `;
        return editHtml;
    }
}