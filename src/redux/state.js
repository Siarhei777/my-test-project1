let rerenderEntireTree = () => {
    console.log('State changed');
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you,', likeCounts: 17, pict: 'pic3.jpg'},
            {id: 2, message: "I'ts my first post - you!I'ts my first post - you!I'ts my first post - you!I'ts my first post - you!I'ts my first post - you!I'ts my first post - you!I'ts my first post - you!I'ts my first post - you!I'ts my first post - you!I'ts my first post - you!I'ts my first post - you!I'ts my first post - you!", likeCounts: 23, pict: 'avatar2.png'},
            {id: 3, message: "I`m like you!", likeCounts: 1, pict: 'avatar3.png'}
        ],
        newPostText: ''
    },
    messagesPage: {
        dialogs: [
            {id: 1, name: 'Siarhei_2', avatar: 'img1.jpg'},
            {id: 2, name: 'Ilya', avatar: 'img2.jpg'},
            {id: 3, name: 'Andrey', avatar: 'img4.jpg'},
            {id: 4, name: 'Sveta', avatar: 'img3.jpg'},
            {id: 5, name: 'Mariya', avatar: 'img6.jpg'},
            {id: 6, name: 'Alexei', avatar: 'img5.jpg'}
        ],

        messages: [
                {id: 1, message: 'Hi, Hi!_2How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?', avatar: 'photo.jpg'},
                {id: 2, message: "How are you?", avatar: 'photo.jpg'},
                {id: 3, message: "Yo!How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?", avatar: 'img4.jpg'},
                {id: 4, message: "Yo!", avatar: 'img3.jpg'},
                {id: 5, message: "Yo! Yo!", avatar: 'img6.jpg'}
        ],
        newMyPostText: ''

    },
    sidebarPage: {
        friends: [
            {id:1, name: 'Ilya', pict: 'img1.jpg'},
            {id:2, name: 'Alexei', pict: 'img2.jpg'},
            {id:3, name: 'Sveta', pict: 'img3.jpg'},
            {id:4, name: 'Andrey', pict: 'img4.jpg'},
        ]
    }
};

window.state = state;

/*Add post to the Profile*/
const addPost = () => {    
    let newPost = {
        id: Object.keys(state.profilePage.posts).length + 1,
        message: state.profilePage.newPostText,
        likeCounts: 0,
        pict: 'avatar4.png'
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

/*Control changes in the textarea Profile*/
const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;     
    rerenderEntireTree(state);
}

/*Add post to the Message*/
const addMyPost = () => {
    let newMyPost = {
        id: Object.keys(state.messagesPage.messages).length + 1,
        message: state.messagesPage.newMyPostText,
        avatar: 'img3.jpg'
    };
    state.messagesPage.messages.push(newMyPost);
    state.messagesPage.newMyPostText = '';
    rerenderEntireTree(state);
}

/*Control changes in the textarea MessageMyPost*/
const updateNewMyPostText = (newMyText) => {
    state.messagesPage.newMyPostText = newMyText;     
    rerenderEntireTree(state);
}

const subscribe = (observer) => {
    rerenderEntireTree = observer;
}


export {updateNewPostText};
export {addPost};
export {updateNewMyPostText};
export {addMyPost};
export {subscribe};
export {state};