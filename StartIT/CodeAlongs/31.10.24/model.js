
const  model = {
    app: {
        html: document.getElementById('app'),
        currentUser: 3,
        txtBox: '',
    },
   
    input: {
        newUser: {
                id: '',
                username: '',
                password: '',
                friends: '',
                bio:'',
                dateOfBirth:'',
            },
    },

    data: {
        users: [
            {
                id: 1,
                username: 'Bethina',
                password: '123',
                friends:[2],
                bio: 'Heihei! Jeg er sliten',
                dateOfBirth: '15.08.1996'
            },
            {
                id: 2,
                username: 'Oscar',
                password: '12345',
                friends:[1],
                bio: 'Fluffy matvrak',
                dateOfBirth: '11.03.2024',
            },
        ]
    },
};