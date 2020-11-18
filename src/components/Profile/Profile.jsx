import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
      <div className = {style.content}>
        <img src="./assets/images/pic2.jpg" alt="Картинка 1" className = {style.img1} />
        <img src="./assets/images/pic3.jpg" alt="Картинка 2" className = {style.img2} />
        <p className = {`${style.description} ${style.colorText}`}>Description</p>
        <MyPosts />
      </div>
    );
}

export default Profile;