import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className = {style.dialog + ' ' + style.active}>
            <NavLink to={path} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className = {style.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className = {`${style.content} size_content`}>
            <div className = {style.dialog_items}>
                <DialogItem name="Siarhei" id="1" />
                <DialogItem name="Ilya" id="2" />
                <DialogItem name="Andrey" id="3" />
                <DialogItem name="Sveta" id="4" />
                <DialogItem name="Mariya" id="5" />
                <DialogItem name="Alexei" id="6" />

            </div>
            <div className = {style.messages}>
                <Message message="Hi" />
                <Message message="How are you?" />
                <Message message="Yo!" />
                <Message message="Yo!" />
                <Message message="Yo!" />
            </div>
        </div>
    );
}

export default Dialogs;