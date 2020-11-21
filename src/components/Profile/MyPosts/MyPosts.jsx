import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {    
    return (    
      <div className = {style.myposts_size}>
        <div className = {style.block_post}>
            <p>My post</p>
            <textarea></textarea>
            <button>Add post</button>
        </div>

        <Post message = 'Hi, how are you,' likes = '15' pict = 'pic3.jpg' />     
        <Post message = "I'ts my first post" likes ='22' pict = 'avatar2.png' />
        <Post message = 'All ok!' likes ='16' pict = 'avatar3.png' />
        <Post message = "I`m like you!" likes = '147' pict = 'avatar4.png' />
      </div>  
    );
}

export default MyPosts;