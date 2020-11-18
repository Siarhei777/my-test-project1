import React from 'react';
import style from './Post.module.css';

const Post = () => {
    return (          
    <div className = {`${style.colorText} ${style.align}`}>
        <img src="./../../../assets/images/pic3.jpg" alt="Картинка 1" className = {style.img2} />
        <span className = {style.textSpan}>post1</span>        
        <button className = {style.button1}>Like me!</button>
      </div>
        
      
    );
}

export default Post;