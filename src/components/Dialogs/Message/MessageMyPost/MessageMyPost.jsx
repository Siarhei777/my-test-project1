import React from 'react';
import style from './../../../Profile/MyPosts/MyPosts.module.css';
import style2 from './MessageMyPost.module.css';

const MessageMyPost = (props) => {

    let newPostElement = React.createRef();

    let addMyPost = () => {
        props.addMyPost();
    }

    let onMyPostChange = () => {
        let myText = newPostElement.current.value;
        props.updateNewMyPostText(myText);
    }

    return (
        <div className = {`${style.block_post} ${style2.element_position}`}>
            <p>My post</p>
            <textarea onChange = {onMyPostChange} ref = {newPostElement} value = {props.newMyPostText}></textarea>
            <div className = {style.button_container}>
                <button onClick = {addMyPost}>Add post</button>
            </div>
        </div>
    );
}

export default MessageMyPost;