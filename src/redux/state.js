let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you,', likeCounts: 17, pict: 'pic3.jpg'},
            {id: 2, message: "I'ts my first post - you!", likeCounts: 23, pict: 'avatar2.png'},
            {id: 3, message: 'All ok! All ok!', likeCounts: 17, pict: 'avatar3.png'},
            {id: 4, message: "I`m like you!", likeCounts: 147, pict: 'avatar4.png'}
        ]
    },
    messagesPage: {
        dialogs: [
            {id: 1, name: 'Siarhei_2'},
            {id: 2, name: 'Ilya'},
            {id: 3, name: 'Andrey'},
            {id: 4, name: 'Sveta'},
            {id: 5, name: 'Mariya'},
            {id: 6, name: 'Alexei'}
        ],

        messages: [
            {id: 1, message: 'Hi, Hi!_2'},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Yo!"},
            {id: 4, message: "Yo!"},
            {id: 5, message: "Yo! Yo!"}
        ]

    }
}

export default state;