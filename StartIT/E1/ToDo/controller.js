
// CONTROLLER 

function savePerson(personInput) {
    person = personInput;
    console.log('this person was saved ' + person);
}

function saveTask(taskInput) {
    newTask = taskInput;
    console.log('new task is: ' + newTask);
}

function saveDate(dateInput) {
    let date = new Date(dateInput);
    
    deadline = date.toLocaleDateString('no-NO'); // no-NO = Norge
    console.log('deadline is ' + deadline);
}

function addNewTask() { //pusher new task inn i arrayet
    tasks.push({ 
        person: person,
        description: newTask,
        deadline: deadline,
        isDone: false,
    });
    console.log(tasks);

    updateView();
}

function isFinished(checkbox, index) {
    tasks[index].isDone = checkbox.checked;

    if (checkbox.checked){
        let today = new Date().toLocaleDateString('no-NO');
        tasks[index].finishedDate = today;
    }else {
        tasks[index].finishedDate= ''; // gir mulighet til å unchecke checkbox
    }

    updateView();
}

function deleteTask(index) {
    tasks.splice(index, 1);

    updateView();
}

function editTask(index) {
    tasks[index].editMode = true; 

    updateView();
}

function updateTask(index) {
    let personID = `editPerson${index}`;
    let descriptionID = `editDescription${index}`;
    let deadlineID = `editDeadline${index}`;

    let personInput = document.getElementById(personID);
    let descriptionInput = document.getElementById(descriptionID);
    let deadlineInput = document.getElementById(deadlineID);

    let task = tasks[index];

    task.person = personInput.value; 
    task.description = descriptionInput.value; 

    let newDeadline = new Date(deadlineInput.value);
    task.deadline = newDeadline.toLocaleDateString('no-NO');

    task.editMode = false; // Går ut av editMode

    updateView();
}