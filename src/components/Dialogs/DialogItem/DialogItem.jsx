import style from './DialogItem.module.css';
import React from 'react';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    let pathImage = '../assets/images/';

    return (
        <div className = {`${style.dialogItem} ${style.active}`}>
            <img src={`${pathImage}${props.avatar}`} />
            <NavLink to={path} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;