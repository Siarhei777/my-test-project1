import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className = {style.container_image}></div>
            <div className = {style.container_description}>
                <img src="./assets/images/pic3.jpg" alt="Картинка 2" className = {style.img2} />
                <p className = {style.description}>Description</p>
            </div>
        </div>
    );
}
export default ProfileInfo;