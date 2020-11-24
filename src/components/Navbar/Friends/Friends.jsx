import React from 'react';
import style from './Friends.module.css';
import EveryFriend from './EveryFriend/EveryFriend';

const Friends = (props) => {

    let friendsElements = props.friends.friends.map(friends => <EveryFriend name = {friends.name} id = {friends.id} pict = {friends.pict}/>);

    return (
        <div className = {style.friends}>
            <span>Friends</span>
            <div className = {style.everyFriend}>
                {friendsElements}
            </div>
        </div>
    );
}

export default Friends;