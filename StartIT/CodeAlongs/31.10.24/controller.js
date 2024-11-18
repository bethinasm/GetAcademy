function addNewUser(){
    let newUserSignUp = model.input.newUser;
    let newUser = {
        id: model.data.users.length + 1,
        username: newUserSignUp.username,
        password: newUserSignUp.password,
        friends:'',
        bio: newUserSignUp.bio,
        dateOfBirth: newUserSignUp.dateOfBirth,
    };

    console.log(newUser);
    
    model.data.users.push(newUser);
    
    updateView();
}

function addFriend(userID) {
    currentUser = model.data.users.find(user => user.id === model.app.currentUser);
    
    let friendToAdd = model.data.users.find(user => user.id === userID);


    if (currentUser && friendToAdd) { //sjekker at begge finnes (ikke er null eller undefined)
        if (!currentUser.friends){ // oppretter en tom array for currentUser.friends
            currentUser.friends = [];
        }
        if(!currentUser.friends.includes(friendToAdd.id)) { //hvis currentUser.friends array ikke includes friendToAdd
            currentUser.friends.push(friendToAdd.id);
            
            console.log(`${currentUser.username} added ${friendToAdd.username} as a friend`)
            
            showProfile(currentUser.id);
        }else {
            console.log(`${currentUser.username} and ${friendToAdd.username} are already friends`)
        }
    }
}