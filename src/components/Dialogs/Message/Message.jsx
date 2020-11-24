import React from 'react';
import style from './Message.module.css';

const Message = (props) => {

    let pathImage = '../assets/images/';

    return (
        <div class = {props.margin}>
            <img src={`${pathImage}${props.avatar}`} className = {style.message_img}/>
            <span>{props.message}</span>
        </div>
    );
}

export default Message;