import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(dialog => <DialogItem name = {dialog.name} id = {dialog.id} avatar = {dialog.avatar}/>);
    let messagesElements = props.messages.map( message => {

        let classMargin = (message.id) ? 'classNotMargin': 'classMargin';

        return (<Message id = {message.id} message = {message.message} margin = {classMargin} avatar = {message.avatar}/>)
    });

    return (
        <div className = {`${style.content} size_content`}>
            <div className = {style.dialog_items}>
                {dialogsElements}
            </div>
            <div className = {style.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;