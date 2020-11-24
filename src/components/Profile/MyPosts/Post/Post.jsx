import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    
    return (          
        <div className = {style.align}>
            <img src={`/assets/images/${props.pict}`} alt="Картинка 1" className = {style.img2} />
            <span className = {style.textSpan}>{props.message}</span>
            <button className = {style.button1}>Like me!</button>
            <span className = {style.textSpan}>{props.likes}</span>
            <img src="/assets/images/like3.png" alt="Лайк" className ={style.like} />
        </div>
    );
}

export default Post;