
// MODEL 

let app = document.getElementById('app');

let person = '';
let deadline = '';
let description = '';

let tasks = [
    {
        person: 'You', 
        description: 'Create a new task', 
        deadline: '01.01.2025', 
        isDone: false,
        finishedDate: '',
        editMode: false,
    },
]