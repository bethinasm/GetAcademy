updateView()
function updateView(){
    model.app.html.innerHTML = /*HTML*/ `
        <div>
            <div>
                <p>Add new user:</p>
                <div>
                    <input placeholder="Username" onchange="model.input.newUser.username = this.value"><br>
                    <input placeholder="Password" onchange="model.input.newUser.password = this.value"><br><br>
                    <input placeholder="Short bio about yourself" onchange="model.input.newUser.bio = this.value"/><br>
                    <input placeholder="Date Of Birth" onchange="model.input.newUser.dateOfBirth = this.value"/><br><br>
                    <button onclick="addNewUser()"> Submit </button>
                    </div>
                
                <br> <br>
                <hr>
            </div>
                
            <div style="display:flex; gap: 100px;">
                <div>
                    Existing users: <br>
                    ${showAllUsers()}
                </div>
            </div>
            
            <br> <br>
            <hr>
            <div> ${model.app.txtBox} </div>
        </div>
    `;
}

function showAllUsers() {
    let html = '';
    
    for (let i = 0; i < model.data.users.length; i++) {
        let userID = model.data.users[i].id;
        let username = model.data.users[i].username;

        html += /*HTML*/ `
            ${username} 
            <button onclick="addFriend(${userID})"> Add friend </button>
            <button onclick="showProfile(${userID})">  View profile </button> <br>
        `;
    }
    return html;
}

function showProfile(userID) {
    //find er innebygd JS funksjon. Den går igjennm hver verdi i et array og returnerer den første verdien som oppfyller betingelsen.
    let user = model.data.users.find(user => user.id === userID);
    let friendsList = '';

    console.log(`User: ${user.username}, Users Friends: ${user.friends}`);

    for (let i = 0; i < user.friends.length; i++) {
        let friendID = user.friends[i];
        let friend = model.data.users.find(user => user.id === friendID);
        
        console.log(friend);
        
        if (friend) {
            friendsList += /*HTML*/ `
                <li> ${friend.username} </li>
            `;
        }
    }

    model.app.txtBox = /*HTML*/ `
        <div> 
            <p>Welcome to ${user.username}'s profile!</p>
            <p> ${user.bio} </p>
            <p> ${user.dateOfBirth} </p>
            <hr>
            <div>  
                <p> ${user.username}'s friends: </p>
                <ul> 
                    ${friendsList || `No friends added yet`}
                </ul> 
            </div>
        </div>
    `;

    updateView();
}