import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElemets = props.posts.map( post => <Post message = {post.message} likes = {post.likeCounts} pict = {post.pict} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();        
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (    
      <div className = {style.myposts_size}>
        <div className = {style.block_post}>
            <p>My post</p>
            <textarea onChange = {onPostChange} ref = {newPostElement} value = {props.newPostText}/>
            <div className = {style.button_container}>
                <button onClick = {addPost}>Add post</button>
            </div>
        </div>
        <div className = {style.container_post}>
            { postsElemets }
        </div>
      </div>  
    );
}

export default MyPosts;