import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElemets = props.posts.map( post => <Post message = {post.message} likes = {post.likeCounts} pict = {post.pict} />);

    return (    
      <div className = {style.myposts_size}>
        <div className = {style.block_post}>
            <p>My post</p>
            <textarea></textarea>
            <div className = {style.button_container}>
                <button>Add post</button>
            </div>
        </div>
        <div className = {style.container_post}>
            { postsElemets }
        </div>
      </div>  
    );
}

export default MyPosts;