import reportWebVitals from './reportWebVitals';
import {state, subscribe} from './redux/state.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText, addMyPost, updateNewMyPostText} from './redux/state';

 let rerenderEntireTree = (state) => {

    ReactDOM.render (
        <App state = {state} addPost = {addPost} updateNewPostText = {updateNewPostText} addMyPost = {addMyPost} updateNewMyPostText = {updateNewMyPostText}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


