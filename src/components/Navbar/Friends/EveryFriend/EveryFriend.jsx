import React from 'react';
import style from './EveryFriend.module.css';

const EveryFriend = (props) => {

    let pathImage = '../assets/images/';

    return (
        <div className = {style.friend_container}>
            <img src = {`${pathImage}${props.pict}`} />
            <span>{props.name}</span>
        </div>
    );
}

export default EveryFriend;